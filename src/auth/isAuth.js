import {Outlet,Navigate} from "react-router-dom";

let ProtectedRoutes=()=>
{
    let AuthToken=sessionStorage.getItem("authToken");
    console.log("token is",AuthToken);
    return AuthToken?<Outlet/>:<Navigate to="/login-page"/>
}


export default ProtectedRoutes;