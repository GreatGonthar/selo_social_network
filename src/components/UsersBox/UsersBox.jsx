import React from "react";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import styles from "./UsersBox.module.css";
import OneUserBox from "./OneUserBox"

export default function UsersBox() {
  return (
    <div className={styles.container}>
      <Paper className={styles.paper} zDepth={2}>
        <Paper id="style-1" className={styles.messagesBody}>
          <section className={styles.barb} id="biryani">
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			 <OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/>
			<OneUserBox/> 



           
          </section>
        </Paper>
      </Paper>
    </div>
  );
}
