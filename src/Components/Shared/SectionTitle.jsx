
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" text-center w-6/12 mx-auto mb-12 mt-30">
            <p className="italic text-sm uppercase  text-[#D99904] font-semibold  mb-2">--- {subHeading} ---</p>
            <h2 className="text-4xl font-bold uppercase border-y-4 py-5">{heading}</h2>
        </div>
    );
};

export default SectionTitle;