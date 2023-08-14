import "../styles/registerLogin.css";
import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function RegisterForm({ onCancel, onLogin }) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () =>
        setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="Page">
            <main>
                <img src="/favicon.ico" />
                <h1>Register</h1>
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
                    <br />
                    <FormControl
                        fullWidth
                        sx={{ m: 1, maxWidth: "500px" }}
                        variant="standard"
                    >
                        <TextField
                            // error
                            // helperText={}
                            id="confirmPassword"
                            label="Confirm Password"
                            type={showConfirmPassword ? "text" : "password"}
                            variant="standard"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={
                                                handleClickShowConfirmPassword
                                            }
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {showConfirmPassword ? (
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
                    <button className="rightBtn">Register</button>
                </div>
                <p onClickCapture={() => onLogin()} className="goTo">
                    Already has an account? Go to login{" "}
                </p>
            </main>
        </div>
    );
}

export default RegisterForm;
