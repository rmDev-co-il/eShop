import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user)
    console.log({ isFetching, error })


    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <form
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input
                autoComplete="on"
                style={{ padding: 10, marginBottom: 20 }}
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                autoComplete="on"
                style={{ padding: 10, marginBottom: 20 }}
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick}
                disabled={isFetching}
                style={{ padding: 10, width: 100 }}>
                Login
            </button>
            {error && <span>Something went wrong...</span> && console.log("error")}
        </form>
    );
};

export default Login;