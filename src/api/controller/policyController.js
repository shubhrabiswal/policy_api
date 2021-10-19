const { db } = require('../../config/mongoose')
const csvtojson = require("csvtojson")

exports.getdata = (req, res) => {
    console.log("getdata")
    db.db.collection('policy_data').findOne({account_name:req.body.account_name},
        function (findErr, data) { 
            if (findErr) {
                return res.status(401).send({
                    "error":findErr.message
                })
            }
            // console.log(data); 
            return res.status(200).send({
                "data":data
            }); 
        })
        
}


exports.getallpolicy = (req, res) => {
    console.log("getdata")
    db.db.collection('policy_data').findOne({firstname:req.body.firstname},
        function (findErr, data) { 
            if (findErr) {
                return res.status(401).json({
                    "error":findErr.message
                })
            }
            // console.log(data); 
            return res.status(200).json({
                "data":data
            }); 
        })
        
}
