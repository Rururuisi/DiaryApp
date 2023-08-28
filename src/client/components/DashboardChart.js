import React, { useState, useContext } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { UserContext } from "../utils/UserContextProvider";
import { BarChart } from "@mui/x-charts/BarChart";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: "rgb(83, 83, 83)",
    padding: "0 10px 20px 10px",
    lineHeight: "60px",
    borderRadius: "30px",
    fontSize: "20px",
}));

const dataset = [
    { data: 13, month: "1" },
    { data: 33, month: "2" },
    { data: 23, month: "3" },
    { data: 17, month: "4" },
    { data: 18, month: "5" },
    { data: 6, month: "6" },
    { data: 0, month: "7" },
    { data: 12, month: "8" },
    { data: 25, month: "9" },
    { data: 30, month: "10" },
    { data: 29, month: "11" },
    { data: 25, month: "12" },
];

const getLineChartData = (diaries, yearInt) => {
    const dataInYear = Array.from({ length: 12 }, (_, i) => i + 1).map(
        (month) => {
            const data = diaries.filter(
                (diary) =>
                    parseInt(diary.created_date.year) === yearInt &&
                    parseInt(diary.created_date.month) === month
            );
            return { data: data.length, month: month };
        }
    );
    return dataInYear;
};

export default function DashboardChart() {
    const { user } = useContext(UserContext);
    const startYear = new Date(user.created_date).getFullYear();
    const endYear = new Date().getFullYear();

    const [year, setYear] = useState(endYear);
    const diariesLineChartData = getLineChartData(user.diaries, year);

    const goToPrevYear = () => {
        if (year > startYear) {
            setYear(year - 1);
        }
    };

    const goToNextYear = () => {
        if (year < endYear) {
            setYear(year + 1);
        }
    };

    return (
        <div>
            <Item elevation={3}>
                <BarChart
                    dataset={diariesLineChartData}
                    xAxis={[
                        {
                            scaleType: "band",
                            dataKey: "month",
                            label: "(Month)",
                        },
                    ]}
                    yAxis={[{ tickMinStep: 1 }]}
                    series={[
                        {
                            dataKey: "data",
                        },
                    ]}
                    height={350}
                />
                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <div onClick={goToPrevYear} style={{ cursor: "pointer" }}>
                        <ArrowBackIosNewIcon
                            sx={{ color: year > startYear ? "#333" : "#ccc" }}
                        />
                    </div>
                    <small>Number of Diaries in {year}</small>
                    <div onClick={goToNextYear} style={{ cursor: "pointer" }}>
                        <ArrowForwardIosIcon
                            sx={{ color: year < endYear ? "#333" : "#ccc" }}
                        />
                    </div>
                </div>
            </Item>
        </div>
    );
}
