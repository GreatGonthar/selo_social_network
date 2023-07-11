import React, { useContext, useEffect, useState } from "react";
import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query, orderBy,
    serverTimestamp
} from "firebase/firestore";
import { db } from "../../firebaseConfig/firebaseConfig";
import { useCollectionData} from "react-firebase-hooks/firestore"

export default function Firebase() {
    const usersCollectionRef = collection(db, "users");

    const [users, setUsers] = useState([]);
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, age: +newAge, createdAt: serverTimestamp() });       
    };
    const updateAge = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFiels = { age: age + 1 };
        await updateDoc(userDoc, newFiels);
    };
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };
   
    
    const q = query(
        usersCollectionRef,
        orderBy("createdAt"), // Сортировка по убыванию даты создания

      );
      
    
    const [messages, loading] = useCollectionData(
        // usersCollectionRef.orderBy('createdAt')
        q
        )
     

    console.log("messages, loading",messages, loading)


    useEffect(() => {
        const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
            const updatedData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(updatedData);
        });
        console.log("messages, loading",messages, loading)
        // Отписываемся от подписки при размонтировании компонента
        return () => unsubscribe();
    }, []);

    if (users.length === 0) {
        return <p>загрузка из Firebase...</p>;
    } else {
        return (
            <div>
                <input
                    placeholder="Name"
                    onChange={(e) => setNewName(e.target.value)}
                ></input>
                <input
                    placeholder="Age"
                    type="number"
                    onChange={(e) => setNewAge(e.target.value)}
                ></input>
                <button onClick={createUser}>create user</button>
                {users.map((elem) => {
                    return (
                        <div>
                            <p>{elem.id}</p>
                            <p>{elem.name}</p>
                            <p>{elem.age}</p>
                            <button
                                onClick={() => {
                                    updateAge(elem.id, elem.age);
                                }}
                            >
                                изменить возраст
                            </button>
                            <button
                                onClick={() => {
                                    deleteUser(elem.id);
                                }}
                            >
                                delete user
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }
}
