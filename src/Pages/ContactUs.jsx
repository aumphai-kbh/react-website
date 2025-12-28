import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d0d1f 0%, #1e1e3f 100%)",
        color: "#e0e0ff",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        padding: "40px 20px",
      }}
    >
      {/* HEADER */}
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            margin: "0 0 10px 0",
            background: "linear-gradient(90deg, #6a5af9, #d677ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#b0b0d0" }}>
          We'd love to hear from you! Reach out with questions, feedback, or
          just to say hi.
        </p>
      </header>

      {/* CONTACT INFO */}
      <section
        style={{
          maxWidth: "700px",
          margin: "0 auto 50px auto",
          padding: "30px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "16px",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "20px" }}>
          Our Contact Information
        </h2>
        <p>
          <strong>Address:</strong> Hong Kea Village, Saysattha District,
          Vientiane Capital
        </p>
        <p>
          <strong>Email:</strong> Aumphai00@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +856 20 99945844
        </p>
        <p>
          <strong>Follow us:</strong>
          <a href="#" style={linkStyle}>
            {" "}
            Twitter
          </a>{" "}
          |
          <a href="#" style={linkStyle}>
            {" "}
            Facebook
          </a>{" "}
          |
          <a href="#" style={linkStyle}>
            {" "}
            LinkedIn
          </a>
        </p>
      </section>

      {/* CONTACT FORM */}
      <section
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "30px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "16px",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "20px" }}>
          Send Us a Message
        </h2>
        <form>
          <label style={labelStyle}>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              style={inputStyle}
              required
            />
          </label>
          <label style={labelStyle}>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              style={inputStyle}
              required
            />
          </label>
          <label style={labelStyle}>
            Subject:
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              style={inputStyle}
              required
            />
          </label>
          <label style={labelStyle}>
            Message:
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              style={textareaStyle}
              required
            ></textarea>
          </label>
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

// --- STYLES ---
const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "5px 0 15px 0",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.1)",
  color: "#fff",
  outline: "none",
};

const textareaStyle = { ...inputStyle, resize: "none" };

const labelStyle = {
  display: "block",
  fontSize: "1rem",
  color: "#b0b0d0",
  marginBottom: "10px",
};

const buttonStyle = {
  padding: "15px 40px",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#fff",
  background: "linear-gradient(90deg, #6a5af9, #9c77ff)",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const linkStyle = {
  color: "#6a5af9",
  textDecoration: "none",
  margin: "0 5px",
};

export default ContactUs;
