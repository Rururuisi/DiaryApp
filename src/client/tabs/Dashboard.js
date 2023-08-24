import "../styles/dashboard.css";
import React, { useState, useContext } from "react";
import GrassIcon from "@mui/icons-material/Grass";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DashboardChart from "../components/DashboardChart";
import { UserContext } from "../utils/UserContextProvider";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: "rgb(83, 83, 83)",
    padding: "20px 10px",
    lineHeight: "60px",
    borderRadius: "30px",
    fontSize: "20px",
}));

export default function Dashboard() {
    const { user } = useContext(UserContext);
    const diariesLen = user.diaries.length;

    const [isOpen, setIsOpen] = useState(false);

    const handleLogOpen = () => {
        setIsOpen(true);
    };
    const handleLogClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="Dashboard">
            <header>
                <h1>
                    Dashboard <GrassIcon color="primary" />
                </h1>
            </header>
            <main>
                <div className="total">
                    <Item elevation={2}>
                        <p>Total Diaries</p>
                        <h1>{diariesLen}</h1>
                    </Item>
                </div>
                <DashboardChart />
            </main>
        </div>
    );
}
