import { sendEmail } from "../utils/sendEmail.js";

export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    await sendEmail({ name, email, message });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    next(error);
  }
};
