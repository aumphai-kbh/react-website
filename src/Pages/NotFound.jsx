import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Import Noto Sans Lao dynamically
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
    return () => {
      clearTimeout(timer);
      // Optional: don't remove the link to keep font cached for other pages
    };
  }, [navigate]);

  const laoFont =
    "'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0d0d1f 0%, #1e1e3f 100%)",
        color: "#e0e0ff",
        fontFamily: laoFont, // Applied Lao font here
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          fontWeight: "800",
          marginBottom: "20px",
          background: "linear-gradient(90deg, #6a5af9, #d677ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Inter', sans-serif", // Keep 404 in Inter for a cleaner look
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "20px",
          fontFamily: laoFont,
        }}
      >
        ບໍ່ພົບໜ້າທີ່ທ່ານຄົ້ນຫາ
      </p>
      <p style={{ fontSize: "1rem", color: "#b0b0d0", fontFamily: laoFont }}>
        ລະບົບຈະນໍາທາງທ່ານກັບສູ່ໜ້າຫຼັກໃນ <strong>3 ວິນາທີ</strong>.
      </p>
      <button
        onClick={() => navigate("/", { replace: true })}
        style={{
          marginTop: "30px",
          padding: "15px 40px",
          fontSize: "1rem",
          fontWeight: "600",
          color: "#fff",
          background: "linear-gradient(90deg, #6a5af9, #9c77ff)",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          fontFamily: laoFont, // Applied to button text
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "translateY(-3px)")
        }
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        ໄປຫາໜ້າຫຼັກ
      </button>
    </div>
  );
};

export default NotFound;
