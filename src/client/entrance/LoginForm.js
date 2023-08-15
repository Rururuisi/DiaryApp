import "../styles/registerLogin.css";
import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { UserContext } from "../utils/UserContextProvider";

function LoginForm({ onCancel, onRegister }) {
    const { login } = useContext(UserContext);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleUsername = (evt, filed) => {
        setUser((prev) => ({ ...prev, [filed]: evt.target.value }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const { username, password } = user;
        const response = await fetch("/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (data.err) alert(data.err);
        else login(data);
    };

    return (
        <div className="Page Login">
            <main>
                <img src="/favicon.ico" />
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <FormControl
                        fullWidth
                        sx={{ m: 1, maxWidth: "500px" }}
                        variant="standard"
                    >
                        <TextField
                            // error
                            // helperText={}
                            id="username"
                            label="Username"
                            variant="standard"
                            value={user.username}
                            onChange={(evt) => handleUsername(evt, "username")}
                            required
                        />
                    </FormControl>
                    <br />
                    <FormControl
                        fullWidth
                        sx={{ m: 1, maxWidth: "500px" }}
                        variant="standard"
                    >
                        <TextField
                            // error
                            // helperText={}
                            id="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant="standard"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            value={user.password}
                            onChange={(evt) => handleUsername(evt, "password")}
                            required
                        />
                    </FormControl>
                    <div className="btnGroup">
                        <button onClick={() => onCancel()} className="leftBtn">
                            Cancel
                        </button>
                        <button type="submit" className="rightBtn">
                            Login
                        </button>
                    </div>
                    <p onClick={() => onRegister()} className="goTo">
                        Doesn't have an account? Go to register{" "}
                    </p>
                </form>
            </main>
        </div>
    );
}

export default LoginForm;
