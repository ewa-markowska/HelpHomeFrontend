import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./actions";
import { isLoggedInSelector } from "./reducers";

function Logout({ logout, onLogout}) {
  console.log("Logout component", logout);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isLoggedInSelector);

  const handleLogout = () => {
    dispatch(logoutUser());
    onLogout(); // call onLogout function here
    logout();
    alert("You have been logged out");
    console.log("You have been logged out");
  };

  return (
    <div className="logout">
       <button onClick={handleLogout}>Wyloguj</button>
    </div>
  );
}

export default Logout;