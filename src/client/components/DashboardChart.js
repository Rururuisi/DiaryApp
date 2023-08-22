import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { LineChart } from "@mui/x-charts/LineChart";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: "rgb(83, 83, 83)",
    padding: "20px 10px",
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

export default function DashboardChart() {
    return (
        <div>
            <Item elevation={3}>
                <LineChart
                    dataset={dataset}
                    xAxis={[
                        {
                            scaleType: "band",
                            dataKey: "month",
                        },
                    ]}
                    series={[
                        {
                            dataKey: "data",
                            label: "Number of Diaries",
                        },
                    ]}
                    height={350}
                />
                <small>(Year) 2023</small>
            </Item>
        </div>
    );
}
