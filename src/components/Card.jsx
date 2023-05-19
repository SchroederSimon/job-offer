import { useEffect, useState } from 'react'
import '../components/Card.css'
import { db } from '../services/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Cards() {

    const [users, setUsers] = useState([])
    const userCollectionRef = collection(db, "users")


    useEffect(() => {

        const getUsers = async () => {
            const dataUser = await getDocs(userCollectionRef)
            setUsers(dataUser.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()
    }, [])

    return (
        <>
            <div className="card">
                {
                    users.map((user) => {
                        const cardClass = `card-container card-${user.level}`;
                        return (
                            
                            <div className={cardClass} key={user.id}>
                                <div className="card-header">
                                    <img src="src/assets/unnamed.png" alt="" />
                                    <div className="card-header-information">
                                        <h2>{user.name}</h2>
                                        <p>{user.profesion}</p>
                                        <p>{user.headline}</p>
                                    </div>
                                </div>
                                <div className="card-extra-information">
                                    <strong>Level: {user.level}</strong>
                                    <strong>Experience</strong>
                                    <strong>Education</strong>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}