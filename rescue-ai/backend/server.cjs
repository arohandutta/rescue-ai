const express = require("express")
const cors = require("cors")

const {
  BedrockRuntimeClient,
  InvokeModelCommand
} = require("@aws-sdk/client-bedrock-runtime")

const app = express()

app.use(cors())
app.use(express.json())

// Create Bedrock client
const client = new BedrockRuntimeClient({
  region: "us-east-1"
})

// Chat API route
app.post("/chat", async (req, res) => {

  const message = req.body.message

  try {

    const command = new InvokeModelCommand({
      modelId: "amazon.nova-lite-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: [
              {
                text: `
You are Rescue AI, an emergency disaster response assistant.

Give short and clear safety instructions.
Always prioritize human safety.
If the situation is dangerous, tell the user to contact emergency services.

User situation:
${message}
`
              }
            ]
          }
        ]
      })
    })

    const response = await client.send(command)

    const responseBody = JSON.parse(
      new TextDecoder().decode(response.body)
    )

    const aiReply =
      responseBody.output?.message?.content?.[0]?.text ||
      "I could not generate a response."

    res.json({
      reply: aiReply
    })

  } catch (error) {

    console.error("Bedrock error:", error)

    res.json({
      reply: "Rescue AI could not process the request."
    })

  }

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})