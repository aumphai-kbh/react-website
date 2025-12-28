import React from "react";
import { useParams, Link } from "react-router";

const posts = [
  {
    id: 1,
    title: "ເພີ່ມຄວາມຮູ້ React",
    description: "ຮຽນຮູ້ React ພື້ນຖານ ແລະ component",
    logo: "📘",
    details:
      "ເພີ່ມຄວາມຮູ້ການສ້າງ Component, State, Props, Lifecycle ແລະ Hooks ໃນ React.",
  },
  {
    id: 2,
    title: "ຄຳແນະນຳ JavaScript",
    description: "ຄຳແນະນຳພື້ນຖານ JavaScript ແລະ ES6+",
    logo: "🟨",
    details:
      "ຮຽນການໃຊ້ Variable, Function, Array, Object, ES6+ Features ເຊັ່ນ Arrow Function, Promise ແລະ Async/Await.",
  },
  {
    id: 3,
    title: "CSS ສໍາລັບຜູ້ເລີ່ມໃໝ່",
    description: "ຄຳແນະນຳວິທີໃຊ້ Flexbox ແລະ Grid",
    logo: "🎨",
    details:
      "ເພີ່ມຄວາມສາມາດຄວບຄຸມ Layout ເຊັ່ນ Flexbox ແລະ Grid ສໍາລັບອອກແບບ Web ສະະເພາະ.",
  },
  {
    id: 4,
    title: "Node.js ແລະ Backend",
    description: "ຮຽນການສ້າງ server ດ້ວຍ Node.js",
    logo: "🟩",
    details:
      "ເພີ່ມຄວາມຮູ້ການສ້າງ API ດ້ວຍ Express, Middleware, Routing ແລະ Database Integration.",
  },
  {
    id: 5,
    title: "React Router",
    description: "ການຄວບຄຸມ navigation ພາຍໃນ React",
    logo: "🔗",
    details:
      "ເພີ່ມຄວາມສາມາດ navigation ໃນ SPA ດ້ວຍ React Router, Route, Link, Nested Routes ແລະ Redirect.",
  },
  {
    id: 6,
    title: "TypeScript ພື້ນຖານ",
    description: "ເພີ່ມຄວາມປອດໄພໃນ JavaScript ດ້ວຍ TypeScript",
    logo: "💠",
    details: "ເພີ່ມຄວາມປອດໄພຂອງ code ດ້ວຍ Type, Interface, Enum ແລະ Generic.",
  },
  {
    id: 7,
    title: "ເປັນ Fullstack ດ້ວຍ MERN",
    description: "ຮຽນ MERN Stack ສ້າງ Web App ທັງ Frontend ແລະ Backend",
    logo: "🌐",
    details:
      "ຮຽນການສ້າງ Fullstack App ດ້ວຍ MongoDB, Express, React, Node.js, Authentication ແລະ API.",
  },
  {
    id: 8,
    title: "API ແລະ Fetch",
    description: "ຮຽນວິທີເຊື່ອມຕໍ່ API ພາຍໃນ React",
    logo: "📡",
    details: "ເພີ່ມຄວາມຮູ້ການດຶງ Data ຈາກ API ແລະຈັດການ State ໃນ React.",
  },
  {
    id: 9,
    title: "Database ສຳລັບ Web",
    description: "ເພີ່ມຄວາມຮູ້ SQL ແລະ NoSQL",
    logo: "🗄️",
    details:
      "ຮຽນການອອກແບບ Database, Query, Relationships, Indexing ແລະ Optimization.",
  },
  {
    id: 10,
    title: "Debugging ແລະ Tools",
    description: "ເປັນມື້ອອກແກ້ bug ໃນ code ຂອງທ່ານ",
    logo: "🐛",
    details:
      "ເພີ່ມຄວາມສາມາດ Debug ດ້ວຍ Chrome DevTools, VSCode, Console, Breakpoints ແລະ Logging.",
  },
  {
    id: 11,
    title: "Deploy Web App",
    description: "ຮຽນວິທີ deploy ເປັນອອນໄລນ໌",
    logo: "🚀",
    details:
      "ເພີ່ມຄວາມຮູ້ການ Deploy ເປັນ Web Hosting, Vercel, Netlify ແລະ Docker.",
  },
];

const PostDetailPage = () => {
  const { postId } = useParams();
  const font =
    "'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return (
      <div style={{ fontFamily: font, color: "#fff", padding: "40px" }}>
        <h2>Post not found</h2>
        <Link
          to="/"
          style={{
            color: "#6a11cb",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          Back to posts
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: font,
        padding: "40px",
        background: "linear-gradient(180deg, #0a0a2a, #1f1f4b)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <Link
        to="/posts"
        style={{
          display: "inline-block",
          marginBottom: "30px",
          padding: "10px 20px",
          background: "linear-gradient(90deg, #6a11cb, #2575fc)",
          color: "#fff",
          borderRadius: "25px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "transform 0.3s",
          cursor: "pointer",
        }}
      >
        Back to Posts
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          borderRadius: "25px",
          background: "rgba(44,44,84,0.6)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          maxWidth: "700px",
          margin: "0 auto",
          animation: "float 3s ease-in-out infinite",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "60px", marginBottom: "20px" }}>
          {post.logo}
        </span>
        <h1 style={{ fontSize: "28px", marginBottom: "15px" }}>{post.title}</h1>
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          {post.description}
        </p>
        <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#dcdcff" }}>
          {post.details}
        </div>
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

export default PostDetailPage;
