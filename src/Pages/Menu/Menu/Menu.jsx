import MenuCategory from "../../../Components/Shared/MenuCategory/MenuCategory";
import MenuCover from "../../../Components/Shared/MenuCover";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useLoadMenu from "../../../Hook/useLoadMenu";

// Import Img
import headerImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menus, loading] = useLoadMenu();
  const salad = menus?.filter((item) => item?.category === "salad");
  const pizza = menus?.filter((item) => item?.category === "pizza");
  const dessert = menus?.filter((item) => item?.category === "dessert");
  const offered = menus?.filter((item) => item?.category === "offered");
  const drinks = menus?.filter((item) => item?.category === "drinks");
  const soup = menus?.filter((item) => item?.category === "soup");
console.log(menus);
  return (
    <>
    {/* Main Cover  */}
      <MenuCover title={"Our Menu"} desc={"Check it out"} img={headerImg} height={400} />
      <SectionTitle heading={"TODAY'S OFFER"  } subHeading={"Don't miss"}></SectionTitle>
      <MenuCategory item={offered}></MenuCategory>


      {/*DESSERTS  */}
      {/* <MenuCover title={"DESSERTS"} desc={"Check it out"} img={dessertImg} height={400} /> */}
      <MenuCategory item={dessert} title={"deserts"} CoverDesc={"Check it out"} coverImg={dessertImg} coverHeight={400} />

      {/* PIZZA */}
      <MenuCategory item={pizza} title={"pizza"} CoverDesc={"Check it out"} coverImg={dessertImg} coverHeight={400} />

      {/* Salad */}
      <MenuCategory item={salad} title={"salad"} CoverDesc={"Check it out"} coverImg={dessertImg} coverHeight={400} />

      {/* Soup */}
      <MenuCategory item={soup} title={"soup"} CoverDesc={"Check it out"} coverImg={dessertImg} coverHeight={400} />
    </>
  );
};

export default Menu;
