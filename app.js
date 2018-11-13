var express = require('express')
var app = express()

// SELECT * FROM Outputanalyzer WHERE oa_analyze_id="azbrtgerfdez"
const Datastore = require('@google-cloud/datastore')
const projectId = 'etna-gpe'

const datastore = new Datastore({
	projectId: projectId,
})

const kind = 'OutputAnalyze'

app.get('/', function (req, res) {
  // SELECT * FROM Outputanalyzer WHERE oa_analyze_id="azbrtgerfdez"
	const query = datastore.createQuery([kind]).filter('oa_analyzeid', '=', 'trjtryjzrtyzht')
	datastore.runQuery(query).then(results => {
  // Task entities found.
  	const tasks = results[0]

  	console.log('Tasks:')
  	tasks.forEach(task => res.send(task))
	})
	
})

// API Routes
let router = express.Router()
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Content-Type", "application/json")
    next()
  })

app.listen(3000)
