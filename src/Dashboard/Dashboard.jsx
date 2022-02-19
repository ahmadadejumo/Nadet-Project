import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { useNavigate, useLocation } from "react-router-dom";
import useLogOut from "../hooks/useLogOut";
import useRefreshToken from "../hooks/useRefreshToken";

const Dashboard = () => {
  const [user, setUser] = useState();
  const useAxiosPrivate = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useLogOut();
  const refresh = useRefreshToken();

  const signOut = async () => {
    await logout();
    navigate("/signin");
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await useAxiosPrivate.get("/auth/user/", {
          signal: controller.signal,
        });
        // console.log(response.data.username);
        isMounted && setUser(response.data);
      } catch (err) {
        console.error(err);
        navigate("/signin", { state: { from: location }, replace: true });
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  });

  return (
    <div>
      <h2>User List</h2>
      <ul>
        <li key={user?.pk}>{user?.username}</li>
      </ul>
      <button onClick={signOut}>LogOut</button>
      <br />
      <button onClick={refresh}>LogOut</button>
    </div>
  );
};

export default Dashboard;