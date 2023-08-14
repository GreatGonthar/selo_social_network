import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import useDialogMessages from "../../hooks/useDialogMessages";
import MessagesBox from "./MessagesBox";

export default function DialogBox({dialogs = true }) {
    const { state, dispatch } = useContext(GlobalContext);
    let messages = useDialogMessages();
    if (messages.length === 0) {
        return <div>загрузка сообщений...</div>;
    } else {
        return <MessagesBox messages={messages} state={state} dialogs={dialogs} />;
    }
}
