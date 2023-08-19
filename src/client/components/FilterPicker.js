import React, { useState, useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { UserContext } from "../utils/UserContextProvider";

const formStyle = {
    marginRight: "10px",
    minWidth: 100,
    "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select":
        {
            minHeight: 0,
            height: "15px",
            fontSize: "14px",
        },
};

const formLabelStyle = { fontSize: "14px", lineHeight: "15px" };

export default function SelectSmall({ handleFilter }) {
    const { user } = useContext(UserContext);
    const startYear = parseInt(new Date(user.created_date).getFullYear());
    const endYear = parseInt(new Date().getFullYear());

    const [filter, setFilter] = useState({
        year: "",
        month: "",
    });

    const handleChange = (evt, field) => {
        setFilter((prev) => ({ ...prev, [field]: evt.target.value }));
        handleFilter({ ...filter, [field]: evt.target.value });
    };

    return (
        <>
            <FormControl sx={formStyle} size="small">
                <InputLabel sx={formLabelStyle} id="demo-select-small-label">
                    Year
                </InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={filter.year}
                    label="Year"
                    onChange={(evt) => handleChange(evt, "year")}
                >
                    <MenuItem value="">
                        <em>--</em>
                    </MenuItem>
                    {Array.from(
                        new Array(endYear - startYear + 1),
                        (_, i) => i + startYear
                    ).map((year) => (
                        <MenuItem value={year}>{year}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={formStyle} size="small">
                <InputLabel sx={formLabelStyle} id="demo-select-small-label">
                    Month
                </InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={filter.month}
                    label="Month"
                    onChange={(evt) => handleChange(evt, "month")}
                >
                    <MenuItem value="">
                        <em>--</em>
                    </MenuItem>
                    {Array.from(new Array(12), (_, i) => i + 1).map((month) => (
                        <MenuItem value={month}>
                            {month.toString().padStart(2, 0)}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}
