import bg from '../../../assets/home/chef-service.jpg'
const BoosSection = () => {

    return (
        <div className='h-[400px] my-20  flex justify-center items-center bg-fixed bg-cover bg-center bg-opacity-40' style={{ backgroundImage: `url(${bg})` }}>
            <div className=' flex flex-col justify-center items-center  text-center w-[600px] bg-white py-10 px-10'>

                <h1 className='text-5xl mb-10'>Bistro Boss</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fugiat officiis, architecto, dolorem voluptatum sapiente ea id natus eligendi reiciendis laudantium et error vitae. Eius omnis ab quis optio. Ipsa.</p>
            </div>
        </div>
    );
};

export default BoosSection;