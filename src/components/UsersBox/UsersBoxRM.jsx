import React, { useState, useEffect, useReducer } from "react";
import { Paper } from "@mui/material";
import OneUserBox from "./OneUserBox";
import styles from "./UsersBox.module.css";
import PaginationPanel from "./PaginationPanel";
import useUsers from "../../hooks/useUsers";
import {reducer, GET_USERS} from "../../state/reducers";
import {GetUsers} from "../../utils/FirebaseCRUD"
import FakeUsers from "../../FakeData/FakeUsers"

export default function UsersBox() {

    const initialState = {FakeUsers}
    
    // const [state, dispatch] = useReducer(reducer, initialState);
    // const [users, setUsers] = useState(GetUsers())
    let [stateRM, status, Urlpage] = useUsers();
    // useEffect(()=>{
    //     setUsers(GetUsers())
    // },[])
                {/* <button onClick={() => dispatch({type: GET_USERS, payload: users })}>Click</button>
                <button onClick={() => console.log(state)}>State</button> */}
    

    if (status) {
        return <div>загрузка...</div>;
    } else {
        return (
            <div className={styles.container}>

                <Paper className={styles.paper} zDepth={2}>
                    <PaginationPanel count={stateRM.info.pages} page={Urlpage} />
                    <Paper id="style-1" className={styles.messagesBody}>
                        <section className={styles.barb} id="biryani">
                            {stateRM.results.map((item, index) => {
                                return (
                                    <OneUserBox
                                        imgUrl={stateRM.results[index].image}
                                        content={stateRM.results[index].type}
                                        userName={stateRM.results[index].name}
                                        id={stateRM.results[index].id}
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
