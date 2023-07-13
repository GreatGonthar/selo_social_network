import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import styles from "./TextInput.module.css";
import { db } from "../../firebaseConfig/firebaseConfig";
import {
    collection,
    addDoc,
    serverTimestamp,
    doc,
    deleteDoc,
} from "firebase/firestore";

export const TextInput = ({ messages, mainUser }) => {
    const [message, setMessage] = useState("");
    const messagesCollectionRef = collection(db, "messages");

    const sendUser = async (body) => {
        let messagePayload = {
            name: mainUser.name,
            messageBody: body,
            date: serverTimestamp(),
        };
        await addDoc(messagesCollectionRef, messagePayload);
    };

    const deleteMessages = async (id) => {
        const messageDoc = doc(db, "messages", id);
        await deleteDoc(messageDoc);
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        sendUser(message);
        setMessage("");
    };

    return (
        <>
            <form
                className={styles.wrapForm}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="standard-text"
                    label="Enter your message..."
                    className={styles.wrapText}
                    value={message}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    type="submit"
                >
                    <SendIcon />
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    onClick={() => {
                        deleteMessages(messages[0].id);
                        console.log(messages[0].id);
                    }}
                >
                    <RemoveCircleIcon />
                </Button>
            </form>
        </>
    );
};
