import {useHistory} from "react-router-dom";

export default function Logout({setAuthenticated}) {
    const history = useHistory();
    setAuthenticated(false);
    history.push("/");

    return null;
}
