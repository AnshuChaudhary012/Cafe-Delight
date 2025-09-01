function Item(props) {
    return ( 
        <div className="bg-amber-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                    <div className="h-48 bg-amber-400 dark:bg-amber-700 flex Item-center justify-center">
                    <img src={`${props.img}`} alt="Image of Food" className="w-full"/>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{props.food}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{props.info} </p>
                        <p className="text-amber-600 font-bold">From {props.price} </p>
                    </div>
         </div>
     );
}

export default Item;