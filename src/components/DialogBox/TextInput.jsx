import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import styles from "./TextInput.module.css";
import { db } from "../../firebaseConfig/firebaseConfig";
import {
    collection,
    addDoc,
    setDoc,
    serverTimestamp,
    doc,
    deleteDoc,
    query,
    getDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    Timestamp,
} from "firebase/firestore";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const MAX_MESSAGES = 10;

export const TextInput = ({ messages, mainUser, dialogs }) => {
    const [message, setMessage] = useState("");

    const params = useParams();
    const userId = params.userId;

    const createDialog = async (textBody) => {
        const docSnap = await getDoc(
            doc(db, "users", mainUser.id, "messages", userId)
        );
        if (!docSnap.data()) {
            let newMessage = async () => {
                await setDoc(
                    doc(db, "users", mainUser.id, "messages", userId),
                    {
                        body: [
                            { messageBody: textBody, date: Timestamp.now() },
                        ],
                    }
                );
            };
            newMessage();
        } else {
            if (docSnap.data().body.length >= MAX_MESSAGES) {
                console.log("больше 10");
                deliteDialog()
            } 
                await updateDoc(
                    doc(db, "users", mainUser.id, "messages", userId),
                    {
                        body: arrayUnion({
                            messageBody: textBody,
                            date: Timestamp.now(),
                        }),
                    }
                );
            
        }
    };

    const sendUser = async (body) => {
        const messagesCollectionRef = collection(db, "messages");
        let messagePayload = {
            name: mainUser.name,
            messageBody: body,
            date: serverTimestamp(),
        };
        if (messages.length >= MAX_MESSAGES) {
            deleteMessages(messages[0].id);
        }
        await addDoc(messagesCollectionRef, messagePayload);
    };

    const deleteMessages = async (id) => {
        const messageDoc = doc(db, "messages", id);
        await deleteDoc(messageDoc);
    };
    const myDialog = async () => {
        const docSnap = await getDoc(
            doc(db, "users", mainUser.id, "messages", userId)
        );        
        if (docSnap.data().body.length > 0){          
            return docSnap.data().body;
        } else {
            return false
        }
    };
    const deliteDialog = async () => {
        let data = await myDialog();       
        if (data) {
            updateDoc(doc(db, "users", mainUser.id, "messages", userId), {
                body: arrayRemove(data[0]),
            });
        }
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (dialogs) {
            createDialog(message);
        } else {
            sendUser(message);
        }
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
                {mainUser.id === "bxlsBiB4VMVs3n1dF1bNIh3vRcH3" && 
                <Button                   
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    onClick={() => {
                        if (dialogs) {
                            deliteDialog();
                        } else {
                            deleteMessages(messages[0].id);
                        }
                    }}
                >
                    <RemoveCircleIcon />
                </Button>}
            </form>
        </>
    );
};
