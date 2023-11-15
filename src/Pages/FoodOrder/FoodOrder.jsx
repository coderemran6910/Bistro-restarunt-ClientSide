import { useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";
import MenuCover from "../../Components/Shared/MenuCover";
import useLoadMenu from "../../Hook/useLoadMenu";
import pageCover from "../../assets/shop/banner2.jpg";
// Tab related import
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const FoodOrder = () => {
  const cetagories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const {category} = useParams()
  const initialIndex = cetagories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus, loading] = useLoadMenu();
  const salad = menus.filter((item) => item.category === "salad");
  const pizza = menus.filter((item) => item.category === "pizza");
  const dessert = menus.filter((item) => item.category === "dessert");
  const drinks = menus.filter((item) => item.category === "drinks");
  const soup = menus.filter((item) => item.category === "soup");

  console.log(menus);

  return (
    <div>
      <MenuCover
        title={"Food Order"}
        desc={"Would you like to try a dish?"}
        img={pageCover}
        height={400}
      />

      {/* Tabs Section */}
      <div className="my-20 flex items-center justify-center">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"flex gap-4 items-center justify-center font-bold uppercase "}>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <FoodCard item={salad} />
          </TabPanel>
          <TabPanel>
          <FoodCard item={pizza} />
          </TabPanel>
          <TabPanel>
          <FoodCard item={soup} />
          </TabPanel>
          <TabPanel>
          <FoodCard item={dessert} />
          </TabPanel>
          <TabPanel>
          <FoodCard item={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default FoodOrder;
