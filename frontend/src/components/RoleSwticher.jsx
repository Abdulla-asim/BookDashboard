import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";

const RoleSwticher = () => {
    const {role, toggleRole} = useContext(RoleContext);

    return (
        <div className="role-switcher">
            <div className="container">
                <div className="role">
                    <span>Current Role: {role} </span>
                    <button onClick={toggleRole}>Switch to {role === "user"? "admin": "user" }</button>
                </div>
            </div>
        </div>
    )
}

export default RoleSwticher