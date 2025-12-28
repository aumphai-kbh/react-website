import React, { useState } from "react";
import { useNavigate } from "react-router";

const PostNewPage = () => {
  const navigate = useNavigate();
  const font =
    "'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  const [preview, setPreview] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newPost = {
      title: formData.get("title"),
      body: formData.get("body"),
      userId: parseInt(formData.get("userId")),
      // We just store the image name since JSONPlaceholder cannot store files
      image: formData.get("image")?.name || "",
    };

    try {
      // Send POST request to save the new post
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPost),
        }
      );

      const data = await response.json();
      console.log("New post added:", data);

      // Navigate to posts page after successful save
      navigate("/posts");
    } catch (error) {
      console.error("Error adding new post:", error);
      alert("ບໍ່ສາມາດເພີ່ມໂພສໄດ້, ກະລຸນາລອງໃໝ່");
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  }

  return (
    <div
      style={{
        fontFamily: font,
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0a2a, #1f1f4b)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "30px",
          color: "#a18aff",
          textAlign: "center",
        }}
      >
        ສ້າງຜະລິດຕະພັນໃໝ່
      </h1>

      <div
        style={{
          background: "rgba(44,44,84,0.6)",
          backdropFilter: "blur(10px)",
          padding: "40px 30px",
          borderRadius: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          maxWidth: "500px",
          width: "100%",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontFamily: font,
          }}
        >
          <input
            name="title"
            type="text"
            placeholder="ປ້ອນຫົວຂໍ້"
            required
            style={{
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              transition: "0.3s",
              fontFamily: font,
            }}
            onFocus={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
            onBlur={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.1)")
            }
          />

          <textarea
            name="body"
            placeholder="ປ້ອນລາຍລະອຽດ"
            required
            rows={4}
            style={{
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              resize: "vertical",
              transition: "0.3s",
              fontFamily: font,
            }}
            onFocus={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
            onBlur={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.1)")
            }
          />

          <input
            name="userId"
            type="number"
            placeholder="ປ້ອນ User ID"
            required
            style={{
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              transition: "0.3s",
              fontFamily: font,
            }}
            onFocus={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
            onBlur={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.1)")
            }
          />

          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{
              padding: "8px",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              cursor: "pointer",
              fontFamily: font,
            }}
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{
                width: "100%",
                borderRadius: "15px",
                objectFit: "cover",
                marginTop: "10px",
                maxHeight: "300px",
              }}
            />
          )}

          <div
            style={{ display: "flex", gap: "15px", justifyContent: "center" }}
          >
            <button
              type="button"
              onClick={() => navigate("/posts")}
              style={{
                padding: "12px 25px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
                color: "#fff",
                transition: "0.3s",
                fontFamily: font,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              ຍົກເລີກ
            </button>

            <button
              type="submit"
              style={{
                padding: "12px 25px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                color: "#fff",
                transition: "0.3s",
                fontFamily: font,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Submit
            </button>
          </div>
        </form>
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

export default PostNewPage;
