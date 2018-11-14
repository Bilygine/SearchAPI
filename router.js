const express = require('express');
const router = express.Router()
const _ = require('lodash');
const Datastore = require('@google-cloud/datastore');
const Utils = require('./utils');
const projectId = 'etna-gpe'


const datastore = new Datastore({
    projectId: projectId,
})

const table = 'OutputAnalyze'

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Content-Type", "application/json")
    next()
})

router.post('/search/:occurence', function (req, res) {
    const query = datastore.createQuery([table])
        .filter('oa_word', '=', req.params.occurence)
    let grouped
    datastore.runQuery(query).then(results => {
        // Group results by analyze_id
        results = results[0]
        grouped = _.groupBy(results, function(result) {
            return result.oa_source
        });
        // Send grouped results
        res.send(grouped)
    }).catch(e => {
        console.log(e)
    })

})

module.exports = router;
