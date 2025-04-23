import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
// ...existing imports...

// ...existing code...

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_h7vja5j",      // Replace with your EmailJS service ID
        "template_b8pdmam",     // Replace with your EmailJS template ID
        form.current,
        "0VD5drCEigGwb2beB"          // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} style={{ maxWidth: 400 }}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}
export default Contact
// ...existing code...