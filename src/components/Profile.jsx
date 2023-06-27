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
            const userDocRef = doc(db, 'users', userId);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                setUser(userData);
            }
        };

        fetchData();
    }, [userId]);

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
                    <div className="right-profile-container-about">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec ultricies libero et odio pretium efficitur. Nullam
                            euismod aliquet sollicitudin. Sed tincidunt malesuada nisi, ut
                            dictum quam vulputate eu. Quisque finibus augue ut leo dignissim
                            accumsan. Maecenas nec sem lacus. Proin tempor quis lorem quis
                            volutpat. Nam ex eros, consequat ac turpis vitae, molestie
                            posuere sapien. Mauris massa leo, feugiat convallis diam nec,
                            dignissim luctus nibh. Quisque ornare sollicitudin porttitor.
                            Vestibulum auctor ultrices tellus a tempor. Sed vitae sapien
                            lacinia, bibendum tortor vel, vehicula ipsum. Nulla mauris nulla,
                            dignissim at efficitur sit amet, rhoncus id nisi. Sed faucibus
                            urna nec diam facilisis imperdiet. Vivamus sodales venenatis
                            neque, eget hendrerit nulla pretium eu. Nulla semper non justo
                            nec posuere. Fusce sem nunc, venenatis sed dui ut, viverra
                            dictum sem.
                            Mauris ut justo pharetra nisi cursus rhoncus in nec dui. Integer
                            vel laoreet mi. Aenean elementum velit non fermentum sodales.
                            Duis vitae lacus vitae velit vestibulum condimentum. Vivamus ac
                            luctus justo. Sed ac convallis tellus. Pellentesque efficitur
                            massa a lobortis sagittis. Orci varius natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                    <div className="right-profile-container-projects">
                        <h2>Projects</h2>
                        <div className="projects-details-container">
                            <div className="projects-details">
                                <h1>
                                    {user?.project1?.description}
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}