import "../styles/registerLogin.css";
import React, { useState, useEffect, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { registerUser } from "../utils/fetchData";
import { UserContext } from "../contexts/UserContextProvider";

function RegisterForm({ onCancel, onLogin }) {
	const { login } = useContext(UserContext);

	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const [user, setUser] = useState({
		username: "",
		password: "",
		confirm: "",
	});

	const [onCheck, setOnCheck] = useState(false);
	const [isError, setIsError] = useState(false);
	const [hint, setHint] = useState("");

	useEffect(() => {
		if (user.password && user.confirm && user.password !== user.confirm) {
			setOnCheck(true);
		}
		if (user.password && user.confirm && user.password === user.confirm) {
			setHint("Password matches!");
		}
		if (onCheck) {
			setIsError(user.password !== user.confirm);
			setHint(
				user.password !== user.confirm
					? "Password doesn't match!"
					: "Password matches!"
			);
		}
	}, [user.password, user.confirm]);

	const handleUsername = (evt, filed) => {
		setUser((prev) => ({ ...prev, [filed]: evt.target.value }));
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const created_date = new Date().toLocaleTimeString([], {
			month: "2-digit",
			day: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
		const { username, password } = user;
		const userObj = await registerUser({
			username,
			password,
			created_date,
		});
		if (userObj.err) alert(userObj.err);
		else login(userObj);
	};

	return (
		<div className='Page'>
			<main>
				<img src='/favicon.ico' />
				<h1>Register</h1>
				<form onSubmit={handleSubmit}>
					<FormControl
						fullWidth
						sx={{ m: 1, maxWidth: "500px" }}
						variant='standard'>
						<TextField
							id='username'
							label='Username'
							variant='standard'
							value={user.username}
							onChange={(evt) => handleUsername(evt, "username")}
							required
						/>
					</FormControl>
					<br />
					<FormControl
						fullWidth
						sx={{ m: 1, maxWidth: "500px" }}
						variant='standard'>
						<TextField
							error={isError}
							helperText={hint}
							id='password'
							label='Password'
							type={showPassword ? "text" : "password"}
							variant='standard'
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}>
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
					<br />
					<FormControl
						fullWidth
						sx={{ m: 1, maxWidth: "500px" }}
						variant='standard'>
						<TextField
							error={isError}
							helperText={hint}
							id='confirmPassword'
							label='Confirm Password'
							type={showConfirmPassword ? "text" : "password"}
							variant='standard'
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={
												handleClickShowConfirmPassword
											}
											onMouseDown={
												handleMouseDownPassword
											}>
											{showConfirmPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
							value={user.confirm}
							onChange={(evt) => handleUsername(evt, "confirm")}
							required
						/>
					</FormControl>
					<div className='btnGroup'>
						<button
							type='button'
							onClick={() => onCancel()}
							className='leftBtn'>
							Cancel
						</button>
						<button
							type='submit'
							className='rightBtn'
							disabled={isError}>
							Register
						</button>
					</div>
					<p onClickCapture={() => onLogin()} className='goTo'>
						Already has an account? Go to login{" "}
					</p>
				</form>
			</main>
		</div>
	);
}

export default RegisterForm;
