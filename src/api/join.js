const Airtable = require("airtable")

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  //Your API Key from Airtable
  apiKey: process.env.AIRTABLE_KEY,
})

// Your Table ID from Airtable
const db = Airtable.base(process.env.AIRTABLE_DB)

const handler = (req, res) => {
    try {
        if (req.method !== "POST") {
            return res.status(404).json({ message: "This endpoint requires a POST" })
        }

        const data = req.body

        if (!data) {
            return res.status(500).json({ error: "Data is missing." })
        }

        db("Customers").create(
            [
                {
                    fields: {
                        Name: data.name,
                        Email: data.email,
                        // Message: data.message,
                    },
                },
            ],
            (err, records) => {
                if (err) {
                    res.json({
                        message: "Trouble adding to database.",
                        error: err.message,
                    })
                } else {
                    res.json({ message: `Message Submitted` })
                }
            }
        )
    } catch (err) {
        console.log(err)
        res.json({ message: "Something went really wrong.", error: err })
    }
}

module.exports = handler