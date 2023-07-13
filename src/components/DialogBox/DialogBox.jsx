import React, { useContext, useEffect } from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput";
import { MessageLeft, MessageRight } from "./Message";
import styles from "./DialogBox.module.css";
import { GlobalContext } from "../../App";
import useMessages from "../../hooks/useMessages";
import { useParams, useNavigate } from "react-router-dom";

export default function DialogBox() {
    const { state, dispatch } = useContext(GlobalContext);
    let messages = useMessages();
    let reversedMessages = [...messages].reverse();

    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        if (!state.mainUser.name && !params.userId) {
            navigate("/login");
        }
    }, [params.userId]);

    if (messages.length === 0) {
        return <div>загрузка сообщений...</div>;
    } else {
        return (
            <div className={styles.container}>
                <Paper className={styles.paper} zDepth={2}>
                    <Paper id="style-1" className={styles.messagesBody}>
                        {reversedMessages.map((elem) => {
                            const user = state.users.find(
                                (user) => user.name === elem.name
                            );
                            const messageAvatar = user ? user.photo : "";
                            return elem.name === state.mainUser.name ? (
                                <MessageRight
                                    message={elem.messageBody}
                                    body={elem}
                                    timestamp={elem.date}
                                />
                            ) : (
                                <MessageLeft
                                    message={elem.messageBody}
                                    timestamp={elem.date}
                                    photoURL={messageAvatar}
                                    displayName={elem.name}
                                    avatarDisp={true}
                                    body={elem}
                                />
                            );
                        })}
                    </Paper>
                    <TextInput messages={messages} mainUser={state.mainUser} />
                </Paper>
            </div>
        );
    }
}
