import { useCallback, useEffect } from "react";
import "./styles.scss";

const UserManagement = () => {
  // const [data, setData] = useState([]);
  // const [params, setParams] = useState("");

  const fetchData = useCallback(() => {}, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div></div>;
};

export default UserManagement;
