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

    return (
        <>
            <h1>User: {user?.email}</h1>
            {/* Aquí puedes mostrar otros detalles del usuario */}
        </>
    )
}