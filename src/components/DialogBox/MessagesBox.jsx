import React, { useContext, useEffect } from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput";
import { MessageLeft, MessageRight } from "./Message";
import styles from "./DialogBox.module.css";

export default function MessagesBox({messages, state, dialogs}) {
    let reversedMessages = [...messages].reverse();
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
                    <TextInput messages={messages} mainUser={state.mainUser} dialogs={dialogs}/>
                </Paper>
            </div>
        );
    }

