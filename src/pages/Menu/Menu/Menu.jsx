import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const offered = menu.filter(item=> item.category === 'offered');
    
    return (
        <div className=''>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our menu"} ></Cover>
            {/* main cover */}
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert menu items */}
            <MenuCategory
                items= {dessert}
                title = {"dessert"}
                img={dessertImg}
            ></MenuCategory>
                {/* Pizza */}
            <MenuCategory
                items= {pizza}
                title = {"pizza"}
                img={pizzaImg}
            ></MenuCategory>
            {/* Salad */}
            <MenuCategory
                items={salad}
                title = {"salad"}
                img = {saladImg}
            
            ></MenuCategory>
           
            {/* Salad */}

            
             <MenuCategory
                items={soup}
                title = {"soup"}
                img = {soupImg}
            
            ></MenuCategory>

        </div>
    );
};

export default Menu;