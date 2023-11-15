import { Parallax   } from 'react-parallax';
const MenuCover = ({title , img, desc, height}) => {

    return (

        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-300}
    >
        <div className={`h-[${height}px] mb-20  flex justify-center items-center bg-fixed bg-cover bg-center bg-opacity-40`} >
            <div className=' flex flex-col justify-center items-center  text-center w-[600px] text-white bg-black bg-opacity-40 py-10 px-10'>

                <h1 className='text-5xl mb-10 uppercase'>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    </Parallax>       
    );
};

export default MenuCover;