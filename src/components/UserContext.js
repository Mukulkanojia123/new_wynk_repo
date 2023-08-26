import { createContext } from "react";

const UserContext = createContext({
    userSearchText : "",
    isLogin : false,
    user : ""
})
export default UserContext;