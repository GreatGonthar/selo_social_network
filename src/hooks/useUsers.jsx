import React, { useEffect, useContext } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { GlobalContext } from "../App";
import { SET_USERS } from "../state/reducers";

const useUsers = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const usersCollectionRef = collection(db, "users");
    window.state = state;
    useEffect(() => {
        // if (state.mainUser.id) {
        const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
            const updatedData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
           
                let userSubscriberIndex = updatedData.findIndex(
                    (item) => item.id === state.mainUser.id
                );
                console.log(userSubscriberIndex)
                if(userSubscriberIndex !== -1){updatedData.splice(userSubscriberIndex, 1)};
                dispatch({ type: SET_USERS, payload: updatedData });
            });
            return () => unsubscribe(); // Отписываемся от подписки при размонтировании компонента
        // }
        // }
    }, []);

    return state.users;
};
export default useUsers;
