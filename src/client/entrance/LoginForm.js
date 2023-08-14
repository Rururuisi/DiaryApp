import "../styles/registerLogin.css";
import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LoginForm({ onCancel, onRegister }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="Page Login">
            <main>
                <img src="/favicon.ico" />
                <h1>Login</h1>
                <form>
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
                            required
                        />
                    </FormControl>
                </form>
                <div className="btnGroup">
                    <button onClick={() => onCancel()} className="leftBtn">
                        Cancel
                    </button>
                    <button className="rightBtn">Login</button>
                </div>
                <p onClick={() => onRegister()} className="goTo">
                    Doesn't have an account? Go to register{" "}
                </p>
            </main>
        </div>
    );
}

export default LoginForm;
