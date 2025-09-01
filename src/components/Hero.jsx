import React from 'react';

function Hero() {
    return ( 
         <section id="home" className="py-20 px-4 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Cafe Delight</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">The perfect place to enjoy premium coffee, delicious food, and good company.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#menu" className="bg-white text-amber-600 px-6 py-3 rounded-lg font-bold hover:bg-amber-100 transition-colors">View Menu</a>
                <a href="#booking" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-amber-600 transition-colors">Book a Table</a>
            </div>
        </div>
    </section>
     );
}

export default Hero;