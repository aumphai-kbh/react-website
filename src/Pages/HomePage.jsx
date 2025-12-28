import React, { useState } from "react";

const HomePage = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        margin: 0,
        padding: 0,
        background:
          "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* Hero Section with Global Network Image */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
            top: "-200px",
            right: "-200px",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(30, 144, 255, 0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            bottom: "-150px",
            left: "-150px",
            animation: "float 6s ease-in-out infinite reverse",
          }}
        />

        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "800",
            marginBottom: "1.5rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            position: "relative",
            zIndex: 1,
          }}
        >
          Welcome to Our Platform
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            maxWidth: "700px",
            marginBottom: "2.5rem",
            lineHeight: "1.8",
            color: "rgba(255, 255, 255, 0.95)",
            position: "relative",
            zIndex: 1,
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          We provide modern, reliable, and scalable digital solutions to help
          your business grow and succeed in the digital world.
        </p>

        <button
          style={{
            padding: "1rem 3rem",
            fontSize: "1.1rem",
            fontWeight: "600",
            border: "none",
            borderRadius: "50px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 15px 40px rgba(102, 126, 234, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.4)";
          }}
        >
          Get Started
        </button>

        {/* ICT Graphics */}
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          {["🌐", "☁️", "🔒", "⚡", "🤖", "📊"].map((icon, i) => (
            <div
              key={i}
              style={{
                fontSize: "3rem",
                animation: `bounce ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.7,
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, 30px) scale(1.1); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>

      {/* About Section with Business Meeting Image */}
      <section
        style={{
          padding: "6rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "700",
            marginBottom: "3rem",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          About Us
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Image Container */}
          <div
            style={{
              flex: "1 1 400px",
              maxWidth: "500px",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src="https://www.ciat.org/wp-content/uploads/2020/05/cap13.jpg"
              alt="Professional team meeting"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)",
              }}
            />
          </div>

          <div
            style={{
              flex: "1 1 400px",
              maxWidth: "500px",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "2",
                color: "rgba(255, 255, 255, 0.8)",
                padding: "2rem",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "left",
              }}
            >
              Our company focuses on delivering high-quality web and mobile
              applications. We combine technology, design, and strategy to
              create products that users love and businesses trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: "6rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "700",
            marginBottom: "4rem",
            textAlign: "center",
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              title: "Web Development",
              desc: "Responsive and modern websites using the latest technologies such as React and modern frameworks.",
              gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              icon: "💻",
            },
            {
              title: "Mobile Applications",
              desc: "Cross-platform mobile apps that work smoothly on both Android and iOS devices.",
              gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              icon: "📱",
            },
            {
              title: "System Integration",
              desc: "Seamless integration between systems, APIs, and third-party services to improve efficiency.",
              gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              icon: "🔗",
            },
          ].map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                padding: "2.5rem",
                background:
                  hoveredService === index
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.05)",
                borderRadius: "25px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform:
                  hoveredService === index
                    ? "translateY(-10px)"
                    : "translateY(0)",
                boxShadow:
                  hoveredService === index
                    ? "0 20px 60px rgba(0, 0, 0, 0.3)"
                    : "0 10px 30px rgba(0, 0, 0, 0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "5px",
                  background: service.gradient,
                  opacity: hoveredService === index ? 1 : 0.5,
                  transition: "opacity 0.3s ease",
                }}
              />

              <div
                style={{
                  fontSize: "4rem",
                  marginBottom: "1rem",
                  transform:
                    hoveredService === index
                      ? "scale(1.1) rotate(5deg)"
                      : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  background: service.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action with Technology Background */}
      <section
        style={{
          padding: "8rem 2rem",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.2)",
          margin: "4rem 0 0 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            zIndex: 0,
          }}
        />

        {/* Background Tech Icons */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "15rem",
            opacity: 0.05,
            zIndex: 0,
          }}
        >
          🚀
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "700",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #ffa751 0%, #ffe259 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ready to Work With Us?
          </h2>

          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "700px",
              margin: "0 auto 3rem auto",
              lineHeight: "1.8",
              color: "rgba(255, 255, 255, 0.9)",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Contact us today to discuss your project and see how we can help
            turn your ideas into reality.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
              marginTop: "3rem",
            }}
          >
            {["💡", "🎯", "✨", "🔧"].map((icon, i) => (
              <div
                key={i}
                style={{
                  fontSize: "3.5rem",
                  padding: "1.5rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1) rotate(10deg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
                }
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
