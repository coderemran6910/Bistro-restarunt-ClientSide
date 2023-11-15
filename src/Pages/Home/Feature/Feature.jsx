import SectionTitle from "../../../Components/Shared/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
const Feature = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-screen bg-fixed bg-black  bg-opacity-40 mb-20"
      style={{ backgroundImage: `url(${featureImg})` }}
    >
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check It Out"} />

      <div className="flex justify-center items-center text-white gap-10 bg-black bg-opacity-40  ">
        <img src={featureImg} alt="" className="w-[400px] " />

        <div className=" w-[600px]">
          <h3> {new Date().toDateString()} </h3>

          <h2> WHERE CAN I GET SOME? </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            tenetur dolorem, eum dolores veritatis totam repudiandae. Rerum,
            minus doloremque iste perferendis quibusdam nihil eveniet obcaecati
            culpa ipsum repellendus accusamus commodi?
          </p>
          <button className="btn btn-ghost bg-slate-300 mt-5 border-0 border-b-4 border-black">Order Now </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
