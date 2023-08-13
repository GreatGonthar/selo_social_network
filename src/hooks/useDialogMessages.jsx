import React, { useEffect, useContext } from "react";
import {
    collection,
    onSnapshot,
    query,
    orderBy,
    limit,
    doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { GlobalContext } from "../App";
import { SET_MESSAGE } from "../state/reducers";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const useDialogMessages = () => {
    const params = useParams();
    const userId = params.userId;
    const { state, dispatch } = useContext(GlobalContext);
    const messagesCollection = doc(
        db,
        "users",
        state.mainUser.id,
        "messages",
        userId
    );
    const subscriberMessagesCollection = doc(
        db,
        "users",
        userId,
        "messages",
        state.mainUser.id
    );

    useEffect(() => {
        const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
            let data = snapshot.data();
            let userSubscriberIndex = state.users.findIndex(item => item.id === userId)          
            const updatedData = data.body.map((elem) => ({
                id: state.mainUser.id,
                name: state.mainUser.name,
                date: elem.date,
                messageBody: elem.messageBody,
            }));

            const unsubscribe2 = onSnapshot(
                subscriberMessagesCollection,
                (snapshot) => {
                    let data = snapshot.data();                 
                    const updatedData2 = data.body.map((elem) => ({
                        id: userId,
                        name: state.users[userSubscriberIndex].name,
                        date: elem.date,
                        messageBody: elem.messageBody,
                    }));
                    const finishData = [...updatedData, ...updatedData2];
                    finishData.sort((a, b) => a.date - b.date);

                    if (finishData.length === 0) {
                        dispatch({
                            type: SET_MESSAGE,
                            payload: [
                                {
                                    id: 0,
                                    name: "Система",
                                    date: {seconds: Date.now() / 1000},
                                    messageBody: "пока нет сообщений",
                                },
                            ],
                        });
                    } else dispatch({ type: SET_MESSAGE, payload: finishData });
                }
            );
            return () => unsubscribe2();
        });
        return () => unsubscribe(); // Отписываемся от подписки при размонтировании компонента
    }, []);

    return state.messages;
};
export default useDialogMessages;

