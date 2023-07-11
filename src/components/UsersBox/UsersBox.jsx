import React, { useState, useEffect, useContext } from "react";
import { Paper } from "@mui/material";
import OneUserBox from "./OneUserBox";
import styles from "./UsersBox.module.css";
import useUsers from "../../hooks/useUsers";

export default function UsersBox() {

    let users = useUsers();

    if (users.length === 0) {
        return <div>загрузка...</div>;
    } else {
        return (
            <div className={styles.container}>
                <Paper className={styles.paper} zDepth={2}>
                    <Paper id="style-1" className={styles.messagesBody}>
                        <section className={styles.barb} id="biryani">                           
                            {users.map((item, index) => {
                                return (
                                    <OneUserBox
                                        imgUrl={item.photo}
                                        content={item.email}
                                        userName={item.name}
                                        id={item.id}
                                    />
                                );
                            })}
                        </section>
                    </Paper>
                </Paper>
            </div>
        );
    }
}
