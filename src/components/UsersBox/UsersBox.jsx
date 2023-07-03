import React, { useContext, useEffect, useState } from "react";
import { Paper, Pagination } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import OneUserBox from "./OneUserBox";
import { GlobalContext } from "../../App";
import { LoremIpsum } from "lorem-ipsum";
import styles from "./UsersBox.module.css";
import PaginationPanel from "./PaginationPanel";
import useUsers from "../../hooks/useUsers";

export default function UsersBox() {
  let [page, setPage] = useState(0);
  let state = useUsers(page);

  if (state.length === 0) {
    console.log(state);
    return <div>загрузка...</div>;
  } else {
    return (
      <div className={styles.container}>
        <Paper className={styles.paper} zDepth={2}>
          <PaginationPanel setPage={setPage} count={state.info.pages} />
          <Paper id="style-1" className={styles.messagesBody}>
            <section className={styles.barb} id="biryani">
              {state.results.map((item, index) => {
                return (
                  <OneUserBox
                    imgUrl={state.results[index].image}
                    content={state.results[index].type}
                    userName={state.results[index].name}
                    id={state.results[index].id}
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
