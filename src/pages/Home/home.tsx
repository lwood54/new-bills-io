import axios from "axios";
import * as React from "react";

const Home: React.FC = () => {
  const [fetchedMessage, setFetchedMessage] = React.useState({
    id: "",
    message: "",
  });

  const [username, setUsername] = React.useState("");
  const [serverResponse, setServerResponse] = React.useState({
    _id: "",
    username: "",
  });

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const postRes = await axios.post("http://localhost:3001/api/new-user", {
      username: username,
    });
    console.log("postRes", postRes.data);
    setServerResponse(postRes.data);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form name="user-form">
        <input
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
      </form>
      <button form="user-form" type="submit" onClick={handleAddUser}>
        Add User
      </button>
      <h3>message sent: {serverResponse.username}</h3>
      <h4>id: {serverResponse._id}</h4>
    </div>
  );
};

export default Home;
