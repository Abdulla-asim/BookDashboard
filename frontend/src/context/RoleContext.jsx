import { createContext, useState } from "react";

export const RoleContext = createContext({
    role: "user"
});


const RoleContextProvider = ({children}) => {
    const [role, setRole] = useState("user")

    const toggleRole = () => {
        setRole(prevRole => prevRole === "user" ? "admin" : "user");
    }

    return (
        <RoleContext.Provider value={{role, toggleRole}}>
            {children}
        </RoleContext.Provider>
    )
};

export default RoleContextProvider;