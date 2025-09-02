import Item from './Item';


function Menu() {
    return ( 
        <>
        <section id="menu" className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-amber-50">Our Menu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
                
                <Item food="Coffee" img = "../../src/assets/coffee.avif"  info="All types of Coffee" price = "₹99"/>
                <Item food="Burger" img = "../../src/assets/Burger.jpg" info="Best quality of Burgers" price = "₹149"/>
                <Item food="Shakes"img = "../../src/assets/shakes.avif"  info="We care about your health" price = "₹249"/>
                
            </div>
            
            <div className="text-center mt-12">
                <a href="#" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors">View Full Menu</a>
            </div>
        </div>
    </section>
        </>
     );
}

export default Menu;