import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./admin.scss";

const AdminLogin = ({ setLoged }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInput = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setCredentials({ ...credentials, [name]: value });
  };
  const onSubmit = async (evt) => {
    evt.preventDefault();
    await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("auth", user.accessToken);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div id="container_admin">
      <Link to={"/"}>Home</Link>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleInput}
          name="email"
          type="text"
          placeholder="User"
          value={credentials.email}
        />
        <input
          onChange={handleInput}
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
        />
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
