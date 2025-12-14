import { useEffect, useState } from "react";

const UserListPage = () => {
  const API = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setIsError("");

        const response = await fetch(API);
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsError("Failed to fetch users.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <p>ກຳລັງໂຫຼດ...</p>;
  }

  if (isError) {
    return <p>{isError}</p>;
  }

  return (
    <div>
      {users.length === 0 ? (
        <p>ບໍ່ມີຂໍ້ມູນ</p>
      ) : (
        users.map((user) => (
          <Link
            to={`/users/${user.id}`}
            style={{
              margin: "10px o",
              border: "1px solid blck",
              cursor: "pointer",
              textDecoration: "none",
              coor: "inherite",
              width: "100%",
              display: "block",
            }}
          >
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
          </Link>
        ))
      )}
    </div>
  );
};

export default UserListPage;
