
const SectionTitle = ({heading, subHeading}) => {

    return (
        <div className="md:w-3/12 mx-auto text-center my-8">
            <p className="text-yellow-500 ">--- {subHeading} ---</p>
            <h3 className="text-4xl border-y-2 py-4 mt-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;