import { useEffect, useState } from "react";
import { Link } from "react-router";

const UserListPage = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const font =
    "'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setIsError("");
        const response = await fetch(API);
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsError("ເກີດຂໍ້ຜິດພາດໃນການໂຫລດຂໍ້ມູນ.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filter users by search term
  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div
      style={{
        fontFamily: font,
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0a2a, #1f1f4b)",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          color: "#a18aff",
          textAlign: "center",
        }}
      >
        ລາຍການຜູ້ໃຊ້
      </h1>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="ຄົ້ນຫາຕາມຊື່, email ຫຼືເບີໂທ"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "300px",
            maxWidth: "90%",
            padding: "12px 20px",
            borderRadius: "25px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            transition: "0.3s",
            fontFamily: font,
          }}
          onFocus={(e) => (e.target.style.background = "rgba(255,255,255,0.2)")}
          onBlur={(e) => (e.target.style.background = "rgba(255,255,255,0.1)")}
        />
      </div>

      {isLoading && (
        <div
          style={{
            color: "#fff",
            marginTop: 20,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          ກໍາລັງໂຫລດ...
        </div>
      )}

      {isError && (
        <div
          style={{
            color: "#ff6b6b",
            marginTop: 20,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          {isError}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {filteredUsers.length === 0 && !isLoading && !isError && (
          <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
            ບໍ່ພົບຜູ້ໃຊ້ຕາມຄົ້ນຫາ
          </p>
        )}

        {filteredUsers.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            style={{
              textDecoration: "none",
              color: "#fff",
              background: "rgba(44,44,84,0.7)",
              backdropFilter: "blur(10px)",
              borderRadius: "25px",
              padding: "25px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              transition: "all 0.3s ease",
              fontFamily: font,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-7px)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
            }}
          >
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt={user.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "15px",
                border: "3px solid #6a11cb",
              }}
            />
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "8px",
                fontFamily: font,
              }}
            >
              {user.name}
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#dcdcff",
                marginBottom: "5px",
                fontFamily: font,
              }}
            >
              {user.phone}
            </p>
            <p style={{ fontSize: "14px", color: "#b0b0ff", fontFamily: font }}>
              {user.email}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserListPage;
