import React from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput";
import { MessageLeft, MessageRight } from "./Message";
import { getDialog } from "../../FakeData/FakeDialogs";
import styles from "./DialogBox.module.css";

let dialogsArr = getDialog(100);

export default function DialogBox() {
	return (
		<div className={styles.container}>
			<Paper className={styles.paper} zDepth={2}>
				<Paper id="style-1" className={styles.messagesBody}>

					{dialogsArr.map((elem) => {
						return elem.userId ? (
							<MessageLeft
								message={elem.messageBody}
								timestamp="MM/DD 00:00"
								photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
								displayName={elem.userName}
								avatarDisp={true}
							/>
						) : (
							<MessageRight
								message={elem.messageBody}
								timestamp="MM/DD 00:00"
							/>
						);
					})}
				</Paper>
				<TextInput />
			</Paper>
		</div>
	);
}
