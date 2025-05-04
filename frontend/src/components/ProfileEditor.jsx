import { useEffect, useState } from "react";

const ProfileEditor = () => {

    const [profile, setProfile] = useState({
        name: "Abdullah Asim",
        age: 20
    });

    const [newProfile, setNewProfile] = useState({
        name: "Abdullah Asim",
        age: 20
    });

    return (
        <div className="profile-editor">
            <div className="container">
                <div className="profile-info">
                    <span>Profile</span>
                    <div className="name">
                        <span>Name: </span>
                        {profile.name}
                    </div>
                    <div className="age">
                        <span>Age: </span>
                        {profile.age}
                    </div>
                </div>
                <hr />

                <div className="update">
                    <span>Editor</span>
                    <div className="name-edit">
                        <span>New Name: </span>                        
                        <input type="text" id="name" onChange={(e)=> setNewProfile((prev)=> ({
                            ...prev,
                            name: e.target.value
                        }))}/>
                        <button onClick={(e)=> setProfile(newProfile)}>Update</button>
                    </div>
                    <div className="age-edit">
                        <span>New Age: </span>
                        <input type="number" id="age" onChange={(e)=> setNewProfile( (prev) => (
                            {
                                ...prev,
                                age: e.target.value
                            }
                        ))}/>
                        <button onClick={(e) => setProfile(newProfile)}>Update</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ProfileEditor