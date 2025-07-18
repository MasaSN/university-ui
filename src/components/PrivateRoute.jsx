import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth/auth";

const PrivateRoute = ({Children}) =>{
    return isLoggedIn() ? Children : <Navigate to="/login" />;
};
export default PrivateRoute;