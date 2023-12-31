import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SettingPopupPage from "./SettingPopupPage";

const labelStyle = {
	padding: "3px 16px",
	textAlign: "left",
	fontSize: "10px",
	backgroundColor: "#fff",
	borderTop: "1px solid #ddd",
	borderBottom: "1px solid #ddd",
	boxShadow: "inset 0 0 20px 0 #ddd",
};

const listStyle = {
	width: "100%",
	padding: 0,
	bgcolor: "background.paper",
	borderTop: "1px solid rgba(0, 0, 0, 0.1)",
};

function SettingList({ label, options }) {
	return (
		<div>
			<div style={labelStyle}>{label}</div>
			<List sx={listStyle} component='nav'>
				{options.map((opt, idx) => (
					<>
						<ListItem key={idx} button>
							<SettingPopupPage
								topLabel={opt.toggleLabel}
								pageContent={opt.content}
								toggleComponent={
									<ListItemText primary={opt.toggleLabel} />
								}
							/>
						</ListItem>
						<Divider />
					</>
				))}
			</List>
		</div>
	);
}

export default SettingList;
