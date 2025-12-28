import React from "react";
import { Outlet, Link, NavLink } from "react-router";

const MainLayout = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "auto";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";

    const root = document.getElementById("root");
    if (root) {
      root.style.margin = "0";
      root.style.padding = "0";
    }
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: scrolled ? "rgba(15, 12, 41, 0.95)" : "rgba(15, 12, 41, 0.9)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease",
    boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "none",
  };

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1.5rem",
  };

  const logoSearchWrapper = {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    flex: "1",
  };

  const searchBoxStyle = {
    display: "flex",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "0.5rem 1rem",
    width: "100%",
    maxWidth: "300px",
    transition: "all 0.3s ease",
  };

  const searchInputStyle = {
    background: "none",
    border: "none",
    color: "#fff",
    outline: "none",
    width: "100%",
    fontSize: "0.9rem",
    marginLeft: "0.5rem",
    fontFamily: "'Noto Sans Lao', sans-serif",
  };

  const logoStyle = {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const logoImgStyle = {
    height: "50px",
    width: "auto",
    objectFit: "contain",
  };

  const navStyle = {
    fontFamily:
      "'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const getNavLinkStyle = (isActive) => ({
    textDecoration: "none",
    color: isActive ? "#fff" : "rgba(255, 255, 255, 0.7)",
    padding: "0.7rem 1.3rem",
    borderRadius: "12px",
    background: isActive
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "transparent",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    border: isActive ? "none" : "1px solid transparent",
  });

  const footerStyle = {
    fontFamily:
      "'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "3rem 2rem",
    color: "#fff",
  };

  const footerGridStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  };

  const footerTextStyle = {
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: "1.8",
    fontSize: "0.95rem",
  };

  const footerHeadingStyle = {
    fontSize: "1.2rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#fff",
  };

  const footerLinksStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  };

  const footerLinkStyle = {
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const socialContainerStyle = {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
  };

  const socialIconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const copyrightStyle = {
    maxWidth: "1400px",
    margin: "2rem auto 0",
    paddingTop: "2rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "0.9rem",
  };

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
        width: "100%",
      }}
    >
      {/* Header */}
      <header style={headerStyle}>
        <div style={containerStyle}>
          <div style={logoSearchWrapper}>
            {/* Logo */}
            <NavLink to="/" style={logoStyle}>
              <img
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f680.svg"
                alt="Logo"
                style={logoImgStyle}
              />
            </NavLink>

            {/* Search Box */}
            <div
              style={searchBoxStyle}
              onFocusCapture={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              }}
              onBlurCapture={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <span style={{ fontSize: "0.9rem", opacity: 0.7 }}>🔍</span>
              <input
                type="text"
                placeholder="ຄົ້ນຫາ..."
                style={searchInputStyle}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav style={navStyle}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "is-active" : "")}
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              <span>🏠</span>
              <span>ໜ້າຫຼັກ</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "is-active" : "")}
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              <span>👤</span>
              <span>ກ່ຽວກັບຂ້ອຍ</span>
            </NavLink>

            <NavLink
              to="/posts"
              className={({ isActive }) => (isActive ? "is-active" : "")}
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              <span>📝</span>
              <span>ຜະລິດຕະພັນ</span>
            </NavLink>

            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "is-active" : "")}
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              <span>👥</span>
              <span>ລາຍການຜູ້ໃຊ້</span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "is-active" : "")}
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains("is-active")) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              <span>📧</span>
              <span>ຕິດຕໍ່ພວກເຮົາ</span>
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <div style={footerGridStyle}>
          {/* Brand Section */}
          <div>
            <p style={footerTextStyle}>
              ສ້າງວິທີແກ້ໄຂດິຈິຕອນທີ່ທັນສະໄໝ ເຊື່ອຖືໄດ້
              ແລະຂະຫຍາຍໄດ້ເພື່ອຊ່ວຍໃຫ້ທຸລະກິດຂອງທ່ານເຕີບໂຕ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={footerHeadingStyle}>ລິ້ງດ່ວນ</h3>
            <div style={footerLinksStyle}>
              <Link
                to="/"
                style={footerLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 0.7)";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                → ໜ້າຫຼັກ
              </Link>
              <Link
                to="/about"
                style={footerLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 0.7)";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                → ກ່ຽວກັບຂ້ອຍ
              </Link>
              <Link
                to="/posts"
                style={footerLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 0.7)";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                → ຜະລິດຕະພັນ
              </Link>
              <Link
                to="/users"
                style={footerLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 0.7)";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                → ລາຍການຜູ້ໃຊ້
              </Link>
              <Link
                to="/contact"
                style={footerLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 0.7)";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                → ຕິດຕໍ່ພວກເຮົາ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={footerHeadingStyle}>ຕິດຕໍ່ພວກເຮົາ</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.95rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                📧 info@techlao.com
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                📱 +856 20 1234 5678
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                📍 Vientiane, Laos
              </div>
            </div>

            {/* Social Media */}
            <div style={socialContainerStyle}>
              {["👍", "🐦", "📷", "💼"].map((icon, i) => (
                <div
                  key={i}
                  style={socialIconStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={copyrightStyle}>© 2025 TechLao. ສະຫງວນລິຂະສິດທຸກຢ່າງ.</div>
      </footer>
    </div>
  );
};

export default MainLayout;
