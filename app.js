var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.json({
        message: 'Bilygine API Endpoint'
    });
});
app.get('/analyze/:analyzeid', function (req, res) {
  let id = req.params.analyzeid
  // SELECT * FROM Outputanalyzer WHERE oa_analyze_id="azbrtgerfdez"
  res.json({
      "id_sent": id
  });
});
app.get('/search/:occurence', function (req, res) {
  let occurence = req.params.occurence
  console.log('[GET] /search/' + occurence)
  //TODO: récupérer les données sur Datastore
    res.json([
      {
        analyzeId: "azezaef",
        url: "https://youtube.com/azezaeza",
        timestamp: [3, 10, 234, 789, 1232]
      },
      {
        analyzeId: "azezaef",
        url: "https://youtube.com/azezaeza",
        timestamp: [3, 10, 234, 789, 1232]
      },
      {
        analyzeId: "azezaef",
        url: "https://youtube.com/azezaeza",
        timestamp: [3, 10, 234, 789, 1232]
      }
    ]);
});

// API Routes
let router = express.Router();
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/json")
    next();
  });

app.listen(3000)
