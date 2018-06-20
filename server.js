const express = require('express')
const next = require('next')
const Datastore = require('nedb');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const db = new Datastore({filename : 'database.json'});
db.loadDatabase();
db.ensureIndex({fieldName: 'short'});

const randWDclassic = (n) => {  // [ 3 ] random words and digits by the wocabulary
	var s ='', abd ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', aL = abd.length;
	while(s.length < n)
		s += abd[Math.random() * aL|0];
	return s;
} //such as "46c17fkfpl"

app.prepare()
    .then(() => {
        const server = express()

        server.get('/posts/:id', (req, res) => {
            return app.render(req, res, '/posts', {id: req.params.id})
        })

	    server.get('/api/add', (req, res) => {
	    	const shortUrl = randWDclassic(4);
	    	let pushData = {};
	        if (req.query.site) {
		        pushData = {
		        	site : req.query.site,
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
				        res.redirect(301, data[0].site);
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
