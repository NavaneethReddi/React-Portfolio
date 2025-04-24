import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Email validation using apilayer
  const validateEmail = async (email: string) => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "NNME7iWjQa5AKh6GdVX1SQoHWjjd73g8");

    const requestOptions = {
      method: 'GET',
      redirect: 'follow' as RequestRedirect,
      headers: myHeaders
    };

    try {
      const response = await fetch(
        `https://api.apilayer.com/email_verification/check?email=${encodeURIComponent(email)}`,
        requestOptions
      );
      const result = await response.json();
      // result.format_valid && result.smtp_check && result.score > 0.5 are good checks
      return result.format_valid && result.smtp_check && result.score > 0.5;
    } catch {
      return false;
    }
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus(null);

    const email = (form.current.elements.namedItem("user_email") as HTMLInputElement)?.value;
    const isValid = await validateEmail(email);

    if (!isValid) {
      setStatus("Invalid or undeliverable email address.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_h7vja5j",      // Replace with your EmailJS service ID
        "template_b8pdmam",     // Replace with your EmailJS template ID
        form.current,
        "0VD5drCEigGwb2beB"     // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} style={{ maxWidth: 400 }}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" disabled={loading}>
          {loading ? "Validating..." : "Send"}
        </button>
        {status && (
          <div style={{ marginTop: 10, color: status.includes("success") ? "green" : "red" }}>
            {status}
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;