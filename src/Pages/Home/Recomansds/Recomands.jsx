import SectionTitle from "../../../Components/Shared/SectionTitle";
import { useState, useEffect } from "react";
const Recomands = () => {

    const [data , setData ] = useState([])

    useEffect(() => {
     fetch('menus.json')
     .then(res=> res.json())
     .then(data=> {
        const slicedData= data.slice(0,3)
        setData(slicedData)
     })
    }, [])
    
  return (
    <div className="mb-20">
      <SectionTitle heading={" CHEF RECOMMENDS"} subHeading={"shuld try "} />

      {/* CARD  */}
<div className=" md:flex  justify-evenly  ">
    {
        data.map((item , index)=> {
            return(
<div key={item._id} className=" w-96 bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={item.image}
            alt="Shoes"
            className="w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          <p> {item.recipe} </p>
          <div className="card-actions">
            <button className={` ${index === 1 ? 'bg-black' : 'bg-slate-200 '} btn btn-ghost  border-0 text-[#BB8506] border-b-4 border-[#BB8506] mt-5 `}>Add to card</button>
          </div>
        </div>
      </div>
            )
        })
    }
</div>




      
    </div>
  );
};

export default Recomands;
