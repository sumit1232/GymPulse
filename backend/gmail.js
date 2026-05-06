const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: 'sumitjadav2525@gmail.com',
    pass: 'rmcz okql qhix zqpn',
  },
});

const sendEmail = async (otp,email) => {
  const info = await transporter.sendMail({
    from: '"sumitjadav2525@gmail.com', // sender address
    to: email,
    subject: "Your OTP Code", // subject line
    text: "Your OTP is ${otp}", // plain text body
    html: `  <div style="font-family: Arial, sans-serif; text-align: center; padding: 24px;">
        <h2 style="margin-bottom: 16px;">Your OTP Code</h2>
        <div style="font-size: 34px; font-weight: bold; letter-spacing: 6px; padding: 12px 20px; border: 1px solid #ddd; display: inline-block; border-radius: 8px;">
          ${otp}
        </div>
      </div>`, // HTML body
  });

  console.log("Message sent: %s", info.messageId);
} 


module.exports = sendEmail
