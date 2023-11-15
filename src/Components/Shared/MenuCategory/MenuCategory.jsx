import { Link } from "react-router-dom";
import MenuCover from "../MenuCover";

const MenuCategory = ({ item, title, coverImg , CoverDesc, coverHeight }) => {
  return (
    
<>

{ title && <MenuCover title={title} desc={CoverDesc} img={coverImg} height={coverHeight} />}
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center  justify-items-center gap-5 mt-16">
        {item.map((menu) => (
          <div key={menu._id} className="  flex flex-row items-center flex-1">
            <img
              className="w-28 h-28 mr-8"
              src={menu.image}
              alt=""
              style={{ borderRadius: "0px 200px 200px 200px" }}
            />
            <div>
              <h2 className="card-title">{menu.name}</h2>
              <p className="text-[#AAA]">${menu.recipe}</p>
            </div>
            <p className="text-[#BB8506]">${menu.price}</p>
          </div>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="uppercase btn btn-ghost border-0 border-b-4 border-black my-10"> ORDER YOUR FAVOURITE FOOD </button></Link>
    </div>
</>
  );
};

export default MenuCategory;
