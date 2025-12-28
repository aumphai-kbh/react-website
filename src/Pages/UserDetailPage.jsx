import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const UserDetailPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const API = "https://jsonplaceholder.typicode.com/users/" + userId;
  const font =
    "'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const [userDetail, setUserDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        setIsError("");

        const response = await fetch(API);
        const data = await response.json();

        setUserDetail(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setIsError("Failed to fetch user details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [API]);

  if (isLoading)
    return (
      <div
        style={{
          fontFamily: font,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, #0a0a2a, #1f1f4b)",
          color: "#fff",
          fontSize: "20px",
        }}
      >
        <span style={{ animation: "blink 1s infinite" }}>ກຳລັງໂຫຼດ...</span>
        <style>{`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}</style>
      </div>
    );

  if (isError)
    return (
      <div
        style={{
          fontFamily: font,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, #0a0a2a, #1f1f4b)",
          color: "#fff",
          fontSize: "20px",
        }}
      >
        {isError}
      </div>
    );

  if (!userDetail) return null;

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    userDetail.name
  )}&background=444444&color=ffffff&size=128`;

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
        padding: "30px 10px",
      }}
    >
      <div
        style={{
          background: "rgba(44,44,84,0.6)",
          backdropFilter: "blur(10px)",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
          maxWidth: "500px",
          width: "100%",
          animation: "float 3s ease-in-out infinite",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
          {/* Avatar */}
          <img
            src={avatarUrl}
            alt={`${userDetail.name} Avatar`}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: "2px solid #6a11cb",
              flexShrink: 0,
            }}
          />

          {/* User info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              fontSize: "14px",
            }}
          >
            <h1
              style={{
                fontSize: "18px",
                color: "#a18aff",
                margin: 0,
              }}
            >
              {userDetail.name}
            </h1>
            <p>
              <strong>Email:</strong> {userDetail.email}
            </p>
            <p>
              <strong>Phone:</strong> {userDetail.phone}
            </p>
            <p>
              <strong>Website:</strong> {userDetail.website}
            </p>
            <p>
              <strong>Company:</strong> {userDetail.company?.name}
            </p>
            <p>
              <strong>Address:</strong> {userDetail.address?.suite},{" "}
              {userDetail.address?.street}, {userDetail.address?.city},{" "}
              {userDetail.address?.zipcode}
            </p>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/users")}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontFamily: font,
            background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
            color: "#fff",
            transition: "0.3s",
            fontSize: "14px",
            alignSelf: "flex-start",
          }}
        >
          ກັບໄປລາຍການຜູ້ໃຊ້
        </button>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default UserDetailPage;
