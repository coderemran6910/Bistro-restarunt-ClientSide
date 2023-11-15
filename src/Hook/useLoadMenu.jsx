import { useEffect, useState } from "react";

const useLoadMenu = () => {


    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("http://localhost:5000/api/v1/foods")
        .then((res) => res.json())
        .then((data) => {
          setMenus(data);
          setLoading(false);
        });
    }, []);




    return [menus, loading]
};

export default useLoadMenu;