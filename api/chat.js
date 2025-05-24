const axios = require("axios");

export default async function handler(req, res) {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  try {
    const response = await axios.post(
      "https://api.deepseek.com/v1/chat/completions",
      req.body,
      {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        }
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "DeepSeek API error" });
  }
}
