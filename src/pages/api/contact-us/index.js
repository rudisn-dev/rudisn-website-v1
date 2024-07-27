import emailSender from "../../../../utils/emailSender";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Extract sentMessage from the request body
      const { sentMessage } = req.body;

      // Validate sentMessage
      if (!sentMessage) {
        return res.status(400).json({ error: "sentMessage is required" });
      }

      // Call the emailSender function
      await emailSender(sentMessage);

      // Respond with success
      return res
        .status(200)
        .json({ message: "Email sent successfully", isSuccess: true });
    } catch (error) {
      // Handle any errors
      return res
        .status(500)
        .json({ error: "Error sending email", isSuccess: false });
    }
  } else {
    // Method Not Allowed
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
