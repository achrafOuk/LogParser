import { useDispatch } from "react-redux";
import { LogoutAction } from "./LogoutAction";
export function Logout(){
    let dispatch = useDispatch();
    let state = useDispatch(state => state);
    dispatch(LogoutAction());
    console.log(state);
    console.log('you are logout .........');
    return(
            <div class="container">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="text-center">
                    <p class="lead text-gray-800 mb-5"> you are in logout page </p>
                </div>
            </div>
            </div>

    )
}