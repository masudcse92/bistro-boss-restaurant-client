import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Features.css';
import featured from '../../../assets/home/featured.jpg'

const Features = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-12">
            <SectionTitle 
                subHeading={'Check it out'}
                heading={'Features Item'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 py-20 pt-12 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <h3 className="uppercase">Where can i get some</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste itaque exercitationem magnam, incidunt alias corrupti beatae voluptatum iure voluptate tempora dolor nostrum ad repudiandae quas ut accusantium. Dolores, dignissimos numquam?.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Features;