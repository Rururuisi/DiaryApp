import "../styles/timeline.css";
import React, { useState, useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import GrassIcon from "@mui/icons-material/Grass";
import testData from "../utils/testData.json";

const { diary_entries } = testData;
const color = ["primary", "secondary", "primary", "secondary"];

export default function outlinedTimeline() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []); // only runs for the first time

  return (
    <div className="Timeline">
      <header>
        <h1>
          Timeline <GrassIcon color="primary" />
        </h1>
      </header>
      <p>{!backendData.message ? <p>Loading...</p> : backendData.message}</p>
      <p>（会放一个卡片在这里，显示某些内容，没想好）</p>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {color.map((c) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color={c} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              [Month]
              <p>(date: diary content...)</p>
              <p>(date: diary content...)</p>
              <p>(date: diary content...)</p>
              <p>(date: diary content...)</p>
              <p>...</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
