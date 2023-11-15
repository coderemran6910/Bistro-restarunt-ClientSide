
const FoodCard = ({item}) => {
    return (

        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  justify-items-center gap-5 mt-16">
            {
                item.map((item)=>{
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
                            <button className={`bg-slate-200 btn btn-ghost  border-0 text-[#BB8506] border-b-4 border-[#BB8506] mt-5 `}>Add to card</button>
                          </div>
                        </div>
                      </div>
                    )
                })
            }
        </div>
        </>




    //     <div className=" w-96 bg-base-100 shadow-xl">
    //     <figure className="">
    //       <img
    //         src={item.image}
    //         alt="Shoes"
    //         className="w-full"
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">{item.name}</h2>
    //       <p> {item.recipe} </p>
    //       <div className="card-actions">
    //         <button className={`bg-slate-200 btn btn-ghost  border-0 text-[#BB8506] border-b-4 border-[#BB8506] mt-5 `}>Add to card</button>
    //       </div>
    //     </div>
    //   </div>
    );
};

export default FoodCard;