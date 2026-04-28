export default async function handler(req, res) {
  const { phone, message } = req.body;

  const response = await fetch(
    "https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: { body: message },
      }),
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
