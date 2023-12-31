import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BackIcon = styled(ArrowBackIosIcon)({
	cursor: "pointer",
});

export default function PopupPage({ topLabel, pageContent, toggleComponent }) {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => {
		setOpen(newOpen);
	};

	const page = () => (
		<Box
			sx={{
				width: "100%",
				minHeight: "100vh",
				paddingTop: "80px",
				backgroundColor: "#ededed",
			}}
			role='presentation'>
			<Toolbar
				color='ternary'
				sx={{
					position: "fixed",
					top: 0,
					width: "100%",
					backgroundColor: "#fff",
					boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.3)",
				}}>
				<BackIcon
					sx={{ color: (theme) => theme.palette.primary.dark }}
					onClick={() => toggleDrawer(false)}
				/>
				<div style={{ marginLeft: "20px", fontSize: "22px" }}>
					{topLabel}
				</div>
			</Toolbar>
			<Box sx={{ padding: "0 0 10px 0", backgroundColor: "#ededed" }}>
				{pageContent}
			</Box>
		</Box>
	);

	return (
		<React.Fragment>
			<div style={{ width: "100%" }} onClick={() => toggleDrawer(true)}>
				{toggleComponent}
			</div>
			<Drawer
				anchor={"top"}
				open={open}
				onClose={() => toggleDrawer(false)}>
				{page()}
			</Drawer>
		</React.Fragment>
	);
}
