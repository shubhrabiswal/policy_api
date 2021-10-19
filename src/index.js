const app = require('./config/express')
const mongodb = require("mongodb");
const csvtojson = require("csvtojson");
const dotenv = require('dotenv')
dotenv.config()

csvtojson()
  .fromFile("data-sheet - data-sheet.csv")
  .then(csvData => {
    // console.log(csvData);
    mongodb.MongoClient.createConnection(//connect(
      process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
      (err, client) => {
        if (err) throw err;

        client.db("POLICY_API2")
          .collection("policy_data")
          .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });

        console.log("db connected")
      }
    );

  })

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`)
})
