const express = require('express')
const next = require('next')
const Datastore = require('nedb');
const md5 = require('md5');
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const db = new Datastore({filename : 'database.json'});
db.loadDatabase();
db.ensureIndex({fieldName: 'short'});

app.prepare()
    .then(() => {
        const server = express()

		server.use(bodyParser.json())

        server.get('/posts/:id', (req, res) => {
            return app.render(req, res, '/posts', {id: req.params.id})
        })

	    server.post('/api/add', (req, res) => {
	    	const site = req.body.site
	    	let pushData = {};
            if (site) {
                const shortUrl = md5(site).slice(0, 4);
                pushData = {
		        	site : site,
			        short: shortUrl
		        }
		        db.insert(pushData);
	        }
		    res.send(JSON.stringify(pushData));
	    })

        server.get('*', (req, res) => {
	        if (req.params && req.params[0] && req.params[0].length === 5) {
		        db.find({short: req.params[0].slice(1)}, function (err, data) {
			        if (data && data[0] && data[0].site) {
			        	let site = data[0].site;
			        	if (!site.indexOf('http') + 1) {
			        		site = 'http://' + site
						}
				        res.redirect(301, site);
			        } else {
				        return handle(req, res)
			        }
		        });
	        } else {
		        return handle(req, res)
	        }
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
