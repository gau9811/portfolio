const express = require("express")
const router = express.Router()
const TeleSignSDK = require("telesignsdk")
require("dotenv").config()

router.post("/msg", (req, res) => {
  const customerId = "2CB2313A-0D65-47F9-85C0-5CC6596D085C"
  const apiKey = process.env.API_KEY

  const rest_endpoint = "https://rest-api.telesign.com"
  const timeout = 10 * 1000 // 10 secs

  const client = new TeleSignSDK(customerId, apiKey, rest_endpoint, timeout)

  const phoneNumber = "918076501695"
  const message = req.body
  const messageType = "ARN"
  console.log(message)
  const messageCallback = (error, responseBody) => {
    if (error === null) {
      res.json(
        `the message has been sent code:${responseBody["status"]["code"]} and description:${responseBody["status"]["description"]}`
      )
      console.log(
        `the message has been sent code:${responseBody["status"]["code"]} and description:${responseBody["status"]["description"]}`
      )
    } else {
      res.json(`the message has not been sent ${error}`)
    }
  }
  client.sms.message(messageCallback, phoneNumber, message, messageType)
})

module.exports = router
