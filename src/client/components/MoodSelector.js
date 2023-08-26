import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EmojiPicker, { Emoji, EmojiStyle } from "emoji-picker-react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
};

export default function MoodSelector({ emoji, handleMood }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const selectEmoji = (evt) => {
        handleMood(evt, "mood");
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen} sx={{ bgcolor: "#eee" }}>
                {emoji ? <Emoji unified={emoji} size="25" /> : "CHOOSE"}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EmojiPicker
                        onEmojiClick={selectEmoji}
                        autoFocusSearch={false}
                    />
                </Box>
            </Modal>
        </div>
    );
}
