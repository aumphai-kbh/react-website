import React from "react";

const AboutPage = () => {
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
      {/* HEADER SECTION */}
      <header style={{ textAlign: "center", marginBottom: "60px" }}>
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQHUmoYuTkYypg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699950196460?e=1768435200&v=beta&t=EXYcQuB0T0aNHx5FUwo4XazGdcwvX6nllve4NpF2UKs"
          alt="Aumphai Keobounheuang"
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "4px solid #6a5af9",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            margin: "0",
            background: "linear-gradient(90deg, #6a5af9, #d677ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Aumphai KEOBOUNHEUANG
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px", color: "#b0b0d0" }}>
          Project Manager | Software Management Specialist | Policy Expert
        </p>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <span>📍 Vientiane, Laos</span>
          <span>📞 020 99945844</span>
          <span>✉️ aumphai00@gmail.com</span>
        </div>
      </header>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "30px",
        }}
      >
        {/* LEFT COLUMN: EDUCATION & SKILLS */}
        <aside>
          <section style={cardStyle}>
            <h2 style={sectionTitle}>Education</h2>
            <div style={itemStyle}>
              <strong style={{ color: "#9c77ff" }}>Master of Education</strong>
              <p style={subTextStyle}>
                Educational Administration & Leadership (2021-2023)
              </p>
              <p style={subTextStyle}>BELTEI International University</p>
            </div>
            <div style={itemStyle}>
              <strong style={{ color: "#9c77ff" }}>Bachelor of Arts</strong>
              <p style={subTextStyle}>Linguistics (2012-2016)</p>
              <p style={subTextStyle}>National University of Laos</p>
            </div>
            <div style={itemStyle}>
              <strong style={{ color: "#9c77ff" }}>Diploma of English</strong>
              <p style={subTextStyle}>
                Xayphatthana Economic College (First-class honors)
              </p>
            </div>
          </section>

          <section style={cardStyle}>
            <h2 style={sectionTitle}>Languages</h2>
            <p>Lao (Native)</p>
            <p>Thai (Fluent)</p>
            <p>Tai-Deang Ethnic Language (Fluent)</p>
            <p>English (B2 Upper-Intermediate)</p>
          </section>

          <section style={cardStyle}>
            <h2 style={sectionTitle}>Technical Stack</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "Asana/Jira",
                "Figma",
                "SAP",
                "MS Teams",
                "HTML/CSS/JavaScript/React",
                "Graphic Design",
              ].map((skill) => (
                <span key={skill} style={badgeStyle}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </aside>

        {/* RIGHT COLUMN: EXPERIENCE */}
        <main>
          <section style={cardStyle}>
            <h2 style={sectionTitle}>Professional Experience</h2>

            {/* CURRENT ROLE */}
            <div
              style={{
                borderLeft: "4px solid #6a5af9",
                paddingLeft: "20px",
                marginBottom: "30px",
              }}
            >
              <h3 style={{ margin: "0" }}>Project Manager</h3>
              <p style={{ color: "#9c77ff", fontWeight: "600" }}>
                Auton Lao Company (Korea Tech) | Nov 2024 - Present
              </p>
              <ul style={listStyle}>
                <li>Managing Uni-MarketHub and Accounting (SAP) projects.</li>
                <li>
                  Leading Requirement Definition, IA Management, and System
                  Architecture.
                </li>
                <li>
                  Overseeing software debugging and quality standards via Figma
                  and Unit Testing.
                </li>
              </ul>
            </div>

            {/* GDA ROLE */}
            <div
              style={{
                borderLeft: "4px solid #6a5af9",
                paddingLeft: "20px",
                marginBottom: "30px",
              }}
            >
              <h3 style={{ margin: "0" }}>Project Officer / Social Worker</h3>
              <p style={{ color: "#9c77ff", fontWeight: "600" }}>
                Gender Development Association | Sep 2024 - Oct 2024
              </p>
              <ul style={listStyle}>
                <li>
                  Coordinated regional PEGASE Project (Protection of Children in
                  Poverty).
                </li>
                <li>
                  Facilitated home visits, community workshops, and donor
                  reporting.
                </li>
                <li>
                  Supported IP2 Mekong Water Governance and Climate Adaptive
                  capacity projects.
                </li>
              </ul>
            </div>

            {/* GOVERNMENT ROLE */}
            <div
              style={{ borderLeft: "4px solid #6a5af9", paddingLeft: "20px" }}
            >
              <h3 style={{ margin: "0" }}>Government Officer</h3>
              <p style={{ color: "#9c77ff", fontWeight: "600" }}>
                Lao National Assembly | Sep 2017 - July 2021
              </p>
              <ul style={listStyle}>
                <li>
                  Expert in legislative processes, policy development, and
                  inter-government protocol.
                </li>
                <li>Awarded Top 5 Operational Officer (2017-2021).</li>
                <li>Led operational effectiveness for the 9th NA Election.</li>
              </ul>
            </div>
          </section>

          <section style={cardStyle}>
            <h2 style={sectionTitle}>Key Achievements</h2>
            <ul style={listStyle}>
              <li>
                Successfully developed and launched Uni-MarketHub application.
              </li>
              <li>AIPA 43rd General Assembly Liaison (Phnom Penh).</li>
              <li>First CLV Parliamentary Summit Liaison.</li>
            </ul>
          </section>
        </main>
      </div>

      <footer style={{ textAlign: "center", marginTop: "60px" }}>
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "translateY(-3px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/aumphai-keobounheuang-a02b3b293",
              "_blank"
            )
          }
        >
          View Full LinkedIn Profile
        </button>
      </footer>
    </div>
  );
};

// --- STYLES ---
const cardStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  padding: "30px",
  borderRadius: "16px",
  marginBottom: "30px",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
};

const sectionTitle = {
  fontSize: "1.4rem",
  borderBottom: "2px solid #6a5af9",
  display: "inline-block",
  marginBottom: "20px",
  color: "#fff",
};

const itemStyle = { marginBottom: "15px" };
const subTextStyle = { fontSize: "0.9rem", color: "#b0b0d0", margin: "2px 0" };
const listStyle = {
  paddingLeft: "20px",
  fontSize: "0.95rem",
  lineHeight: "1.6rem",
};
const badgeStyle = {
  background: "#6a5af933",
  color: "#9c77ff",
  padding: "5px 12px",
  borderRadius: "20px",
  fontSize: "0.85rem",
  border: "1px solid #6a5af966",
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

export default AboutPage;
