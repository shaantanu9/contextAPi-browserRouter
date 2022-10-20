import { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { token, isAuth, setToken, setIsAuth } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, "sumitted");
    return fetch("https://reqres.in/api/login", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          console.log(res.token);
          setToken(res.token);
          setIsAuth(true);
        }
      });
  };

  const changeHandler = (e) => {
    const { type, value } = e.target;
    setData({ ...data, [type]: value });
    console.log("OnchangeWorking", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={changeHandler}
          value={data.email}
          placeholder="email"
        />
        <br />
        <br />
        <input
          type="password"
          value={data.password}
          onChange={changeHandler}
          placeholder="Password"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
