import React, { useEffect, useContext } from "react";
import {
    collection,
    onSnapshot,
    query,
    orderBy,
    limit,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { GlobalContext } from "../App";
import { SET_MESSAGE } from "../state/reducers";

const useMessages = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const messagesCollectionRef = collection(db, "messages");
    const q = query(messagesCollectionRef, orderBy("date"), limit(30));

    useEffect(() => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const updatedData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch({ type: SET_MESSAGE, payload: updatedData });
        });
        return () => unsubscribe(); // Отписываемся от подписки при размонтировании компонента
    }, []);

    return state.messages;
};
export default useMessages;
