import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./Message.module.css";
import { deepOrange } from "@mui/material/colors";

const date = (time = 0) => {
    const dt = new Date(time * 1000);

    const hours = dt.getHours().toString().padStart(2, "0");
    const minutes = dt.getMinutes().toString().padStart(2, "0");
    const seconds = dt.getSeconds().toString().padStart(2, "0");

    const day = dt.getDate().toString().padStart(2, "0");
    const month = (dt.getMonth() + 1).toString().padStart(2, "0");
    const year = dt.getFullYear();

    return `${hours}:${minutes}:${seconds} ${day}.${month}.${year}г`;
};

export const MessageLeft = (props) => {
    const message = props.message ? props.message : "no message";
    const photoURL = props.photoURL ? props.photoURL : "";
    const displayName = props.displayName ? props.displayName : "гость";
    const timestamp =
        props.timestamp === null
            ? "сейчас"
            : date(+props.timestamp.seconds);

    return (
        <>
            <div className={styles.messageRow}>
                {displayName != "гость" ? (
                    <Avatar
                        alt={displayName}
                        className={styles.orange}
                        src={photoURL}
                    ></Avatar>
                ) : (
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>Г</Avatar>
                )}

                <div>
                    <div className={styles.displayName}>
                        {displayName.charAt(0).toUpperCase() +
                            displayName.slice(1)}
                    </div>
                    <div className={styles.messageBlue}>
                        <div>
                            <p className={styles.messageContent}>{message}</p>
                        </div>
                        <div className={styles.messageTimeStampRight}>
                            {timestamp}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const MessageRight = (props) => {
    const message = props.message ? props.message : "no message";
    const timestamp =
        props.timestamp === null
            ? "сейчас"
            : date(+props.timestamp.seconds);
    return (
        <div className={styles.messageRowRight}>
            <div className={styles.messageOrange}>
                <p className={styles.messageContent}>{message}</p>
                <div className={styles.messageTimeStampRight}>{timestamp}</div>
            </div>
        </div>
    );
};
