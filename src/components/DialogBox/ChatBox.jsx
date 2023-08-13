import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import useChatMessages from "../../hooks/useChatMessages";
import { useParams, useNavigate } from "react-router-dom";
import MessagesBox from "./MessagesBox";

export default function ChatBox() {
    const { state, dispatch } = useContext(GlobalContext);   
    let messages = useChatMessages();
    if (messages.length === 0) {
        return <div>загрузка сообщений...</div>;
    } else {
        return <MessagesBox messages={messages} state={state} />;
    }
}
