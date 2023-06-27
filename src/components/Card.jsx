import { useEffect, useState, } from 'react'
import '../components/Card.css'
import { db } from '../services/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom';


export default function Cards() {

    const [users, setUsers] = useState([])
    const userCollectionRef = collection(db, "users")


    useEffect(() => {
        const getUsers = async () => {
            const dataUser = await getDocs(userCollectionRef)
            setUsers(dataUser.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()
    }, [userCollectionRef])

    return (
        <>
            <div className="card">
                {
                    users.map((user) => {
                        const cardClass = `card-container card-${user.level}`;
                        const profileLink = `/profile/${user.id}`;
                        return (
                            <Link to={profileLink} key={user.id}>
                                <div className={cardClass}>
                                    <div className="card-header">
                                        <img src="src/assets/unnamed.png" alt="" />
                                        <div className="card-header-information">
                                            <h2>{user.name}</h2>
                                            <p>{user.profession}</p>
                                            <p>{user.skills}</p>
                                        </div>
                                    </div>
                                    <div className="card-extra-information">
                                        <p><span>Level</span>: {user.level}</p>
                                        <p><span>Experience</span>: 2 years</p>
                                        <p><span>Education</span>: Bootcamp, Self taught</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>

    )
}