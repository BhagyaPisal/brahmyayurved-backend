import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "brahmyayurved@gmail.com",
    subject: "New Contact Message - Brahmyayurved",

    html: `
      <h3>New Contact Message</h3>

      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>

      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });
};
