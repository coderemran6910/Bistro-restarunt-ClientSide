import SectionTitle from "../../../Components/Shared/SectionTitle";
import { useEffect, useState } from "react";

const OurMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menus.json")
      .then((res) => res.json())

      .then((data) => {
        const filterdData = data.filter((menu) => menu.category === "popular");
        setMenus(filterdData);
      });
  }, [menus]);

  return (
    <div className="mb-20 flex justify-center items-center flex-col gap-5">
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check It Out"} />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center  justify-items-center gap-5">
      
        {
                menus.map(menu => <div key={menu._id} className="  flex flex-row items-center flex-1">
                    <img className="w-28 h-28 mr-8"  src={menu.image} alt="" style={{borderRadius:"0px 200px 200px 200px"}} />
                    <div>
                        <h2 className="card-title">{menu.name}</h2>
                        <p className="text-[#AAA]">${menu.recipe}</p>
                    </div>
                    <p className="text-[#BB8506]">${menu.price}</p>

                </div>
            )}
      </div>
      <button className="uppercase btn btn-ghost border-0 border-b-4 border-black">View full menu </button>
    </div>
  );
};

export default OurMenu;
