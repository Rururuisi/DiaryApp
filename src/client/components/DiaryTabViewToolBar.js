import "../styles/diary.css";
import React, { useState, useEffect } from "react";
import SortDiary from "./SortDiary";
import Chip from "@mui/material/Chip";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterPicker from "./FilterPicker";

function DiaryTabViewToolBar({
    recentOrder,
    oldestOrder,
    displaySelectPage,
    onFilter,
    disableFilter,
}) {
    const [isFilter, setIsFilter] = useState(false);

    useEffect(() => {
        if (!isFilter) {
            disableFilter();
        }
    }, [isFilter]);

    const toggleFilter = () => {
        setIsFilter(!isFilter);
    };

    const handleFilter = ({ year, month }) => {
        console.log(isFilter);
        if (isFilter) {
            onFilter(year, month);
        }
    };

    return (
        <div>
            <nav className="ToolBar">
                <div className="Filter">
                    {isFilter ? (
                        <div>
                            <Chip
                                label="Filter"
                                onClick={toggleFilter}
                                onDelete={toggleFilter}
                                deleteIcon={<FilterAltIcon />}
                                color="primary"
                                size="small"
                            />
                        </div>
                    ) : (
                        <Chip
                            label="Filter"
                            onClick={toggleFilter}
                            onDelete={toggleFilter}
                            deleteIcon={<FilterAltOutlinedIcon />}
                            variant="outlined"
                            color="primary"
                            size="small"
                        />
                    )}
                </div>
                <div>
                    <SortDiary
                        onRecent={recentOrder}
                        onOldest={oldestOrder}
                        onMultiDelete={displaySelectPage}
                    />
                </div>
            </nav>
            {isFilter && (
                <div style={{ marginTop: "15px" }}>
                    <FilterPicker handleFilter={handleFilter} />
                </div>
            )}
        </div>
    );
}

export default DiaryTabViewToolBar;
