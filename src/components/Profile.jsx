import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../components/Profile.css'
import { db } from '../services/firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function Profile() {
    const [user, setUser] = useState({})
    const { userId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const userDocRef = doc(db, 'users', userId)
            const userDocSnap = await getDoc(userDocRef)
            if (userDocSnap.exists()) {
                setUser(userDocSnap.data())
            }
        }

        fetchData()
    }, [userId])

    const colorClass = `left-profile-container color-level-${user.level}`;
    return (
        <div className="profile-container">
            <div className="left-profile">
                <div className={colorClass}>
                    <img src="/src/assets/unnamed.png" alt="" />
                    <div className="left-profile-information">
                        <h2>{user.name}</h2>
                        <p>{user.profession}</p>
                        <p>{user.skills}</p>
                    </div>
                </div>
                <div className="left-profile-extra-information">
                    <ul>
                        <li><span>Level</span>: {user.level}</li>
                        <li><span>Education</span>: {user?.education}</li>
                        <li><span>Experience</span>: {user?.experience}</li>
                        <li><span>Language</span>: {user?.language}</li>
                        <li><span>Website</span>: {user?.website}</li>
                    </ul>
                </div>
            </div>
            <div className="right-profile">
                <div className="right-profile-container">
                    <h1>Right</h1>
                </div>
            </div>
        </div>
    )
}