import "../../styles/account.css";
import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContextProvider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Input from "@mui/material/Input";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DeleteAlert from "../DeleteAlert";
import { deleteUser } from "../../utils/fetchData";

const listStyle = {
	margin: "0 auto",
	marginBottom: "30px",
	width: "90%",
	padding: 0,
	bgcolor: "background.paper",
	borderRadius: "10px",
};

const inputStyle = {
	"& .MuiInput-input": {
		textAlign: "right",
	},
};

const getListItem = ({ label, value, editable }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "baseline",
			}}>
			<div>{label}</div>
			<div>
				<Input
					sx={inputStyle}
					disabled
					defaultValue={value}
					disableUnderline={true}
				/>
				{editable && (
					<KeyboardArrowRightIcon
						style={{ translate: "0 7px", color: "#aaa" }}
					/>
				)}
			</div>
		</div>
	);
};

function AccountPage() {
	const { user, logout } = useContext(UserContext);
	const [alert, setAlert] = useState(false);

	const openAlert = () => {
		setAlert(true);
	};
	const closeAlert = () => {
		setAlert(false);
	};

	const handleDelete = () => {
		deleteUser(user._id).catch((err) => alert(err));
		logout();
	};

	return (
		<>
			<div>
				<List sx={listStyle} component='nav'>
					<ListItem>
						<ListItemText
							primary={getListItem({
								label: "Username",
								value: user.username,
								editable: false,
							})}
						/>
					</ListItem>
				</List>
				<List sx={listStyle} component='nav'>
					<ListItem button>
						<ListItemText
							primary={getListItem({
								label: "Display Name",
								value: user.displayName || user.username,
								editable: true,
							})}
						/>
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemText
							primary={getListItem({
								label: "Intro",
								value:
									user.intro ||
									"This person is lazy, didn't leave anything here...",
								editable: true,
							})}
						/>
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemText
							primary={getListItem({
								label: "Email",
								value: user.email || "",
								editable: true,
							})}
						/>
					</ListItem>
				</List>
				<List sx={listStyle} component='nav'>
					<ListItem>
						<ListItemText
							primary={getListItem({
								label: "Created Date",
								value: user.created_date,
								editable: false,
							})}
						/>
					</ListItem>
					<Divider />
				</List>
				<div className='AccountBtn'>
					<button onClick={() => logout()} className='logoutBtn'>
						Logout
					</button>
					<button onClick={openAlert}>Delete Account</button>
				</div>
			</div>
			{alert && (
				<DeleteAlert
					onClose={closeAlert}
					onDelete={handleDelete}
					deleteObjName={"the account"}
				/>
			)}
		</>
	);
}

export default AccountPage;
