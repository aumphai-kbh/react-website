import React from "react";
import { Link } from "react-router";

const posts = [
  {
    id: 1,
    title: "ເພີ່ມຄວາມຮູ້ React",
    description: "ຮຽນຮູ້ React ພື້ນຖານ ແລະ component",
    logo: "📘",
  },
  {
    id: 2,
    title: "ຄຳແນະນຳ JavaScript",
    description: "ຄຳແນະນຳພື້ນຖານ JavaScript ແລະ ES6+",
    logo: "🟨",
  },
  {
    id: 3,
    title: "CSS ສໍາລັບຜູ້ເລີ່ມໃໝ່",
    description: "ຄຳແນະນຳວິທີໃຊ້ Flexbox ແລະ Grid",
    logo: "🎨",
  },
  {
    id: 4,
    title: "Node.js ແລະ Backend",
    description: "ຮຽນການສ້າງ server ດ້ວຍ Node.js",
    logo: "🟩",
  },
  {
    id: 5,
    title: "React Router",
    description: "ການຄວບຄຸມ navigation ພາຍໃນ React",
    logo: "🔗",
  },
  {
    id: 6,
    title: "TypeScript ພື້ນຖານ",
    description: "ເພີ່ມຄວາມປອດໄພໃນ JavaScript ດ້ວຍ TypeScript",
    logo: "💠",
  },
  {
    id: 7,
    title: "ເປັນ Fullstack ດ້ວຍ MERN",
    description: "ຮຽນ MERN Stack ສ້າງ Web App ທັງ Frontend ແລະ Backend",
    logo: "🌐",
  },
  {
    id: 8,
    title: "API ແລະ Fetch",
    description: "ຮຽນວິທີເຊື່ອມຕໍ່ API ພາຍໃນ React",
    logo: "📡",
  },
  {
    id: 9,
    title: "Database ສຳລັບ Web",
    description: "ເພີ່ມຄວາມຮູ້ SQL ແລະ NoSQL",
    logo: "🗄️",
  },
  {
    id: 10,
    title: "Debugging ແລະ Tools",
    description: "ເປັນມື້ອອກແກ້ bug ໃນ code ຂອງທ່ານ",
    logo: "🐛",
  },
  {
    id: 11,
    title: "Deploy Web App",
    description: "ຮຽນວິທີ deploy ເປັນອອນໄລນ໌",
    logo: "🚀",
  },
];

const fontFamily =
  "'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const PostListPage = () => {
  const randomDelay = () => `${Math.random() * 2}s`;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `translateY(-10px) scale(1.05) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `0 20px 40px rgba(0,0,0,0.6), 0 0 15px rgba(255,255,255,0.1) inset`;
    card.style.filter = "brightness(1.15)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `translateY(0) scale(1) rotateX(0deg) rotateY(0deg)`;
    e.currentTarget.style.boxShadow = `0 6px 15px rgba(0,0,0,0.4)`;
    e.currentTarget.style.filter = "brightness(1)";
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily,
        background: "linear-gradient(180deg, #0a0a2a, #1f1f4b)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "40px",
          color: "#a18aff",
        }}
      >
        ຜະລິດຕະພັນ
      </h1>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Link
          to={"/posts/new"}
          style={{
            fontFamily,
            padding: "14px 28px",
            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
            color: "#fff",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            transition: "transform 0.3s, boxShadow 0.3s",
            display: "inline-block",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
          }}
        >
          ສ້າງຜະລິດຕະພັນໃໝ່
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "25px",
              borderRadius: "25px",
              background: "rgba(44,44,84,0.6)",
              backdropFilter: "blur(10px)",
              textDecoration: "none",
              color: "#fff",
              boxShadow:
                "0 6px 20px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.05) inset",
              transition: "transform 0.2s, boxShadow 0.2s, filter 0.2s",
              fontFamily,
              textAlign: "center",
              cursor: "pointer",
              animation: `float 3s ease-in-out infinite`,
              animationDelay: randomDelay(),
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <span style={{ fontSize: "40px", marginBottom: "15px" }}>
              {post.logo}
            </span>
            <h2
              style={{ margin: "10px 0", fontSize: "20px", color: "#f0f0ff" }}
            >
              {post.title}
            </h2>
            <p style={{ margin: 0, fontSize: "14px", color: "#dcdcff" }}>
              {post.description}
            </p>
          </Link>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default PostListPage;
