function BookingTable() {
    const handleBookingSubmit = (e) => {
    e.preventDefault()
    alert('Table booking request received! We will contact you shortly to confirm.')
    e.target.reset()
  }
    return ( 
         <section id="booking" className="py-16 px-4 bg-white dark:bg-gray-800 dark:text-amber-50">
           <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">Book a Table</h2>
            
            <form 
            onSubmit={handleBookingSubmit}
            className="bg-amber-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 font-medium">Your Name</label>
                        <input type="text" className="w-full p-3 rounded-lg border border-amber-300 dark:bg-gray-600 dark:border-gray-500" placeholder="Rahul Kumar" />
                    </div>
                    
                    <div>
                        <label className="block mb-2 font-medium">Email Address</label>
                        <input type="email" className="w-full p-3 rounded-lg border border-amber-300 dark:bg-gray-600 dark:border-gray-500" placeholder="rahul@example.com" />
                    </div>
                    
                    <div>
                        <label className="block mb-2 font-medium">Phone Number</label>
                        <input type="tel" className="w-full p-3 rounded-lg border border-amber-300 dark:bg-gray-600 dark:border-gray-500" placeholder="+91 9784657338" />
                    </div>
                    
                    <div>
                        <label className="block mb-2 font-medium">Number of Guests</label>
                        <select className="w-full p-3 rounded-lg border border-amber-300 dark:bg-gray-600 dark:border-gray-500 dark:text-amber-50">
                            <option>1 person</option>
                            <option>2 people</option>
                            <option>3 people</option>
                            <option>4 people</option>
                            <option>5+ people</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block mb-2 font-medium">Date</label>
                        <input type="date" className="w-full p-3 rounded-lg border border-amber-300 dark:bg-gray-600 dark:border-gray-500"/>
                    </div>
                    
                    <div>
                        <label className="block mb-2 font-medium">Time</label>
                        <select className="w-full p-3 rounded-lg border border-amber-300 dark:bg-gray-600 dark:border-gray-500 ">
                            <option>9:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>1:00 PM</option>
                            <option>2:00 PM</option>
                            <option>3:00 PM</option>
                            <option>4:00 PM</option>
                            <option>5:00 PM</option>
                            <option>6:00 PM</option>
                            <option>7:00 PM</option>
                        </select>
                    </div>
                </div>
                
                <div className="mt-6">
                    <label className="block mb-2 font-medium">Special Requests</label>
                    <textarea className="w-full p-3 rounded-lg border border-amber-300 dark:bg-gray-600 dark:border-gray-500" rows="3" placeholder="Any special requests?"></textarea>
                </div>
                
                <button type="submit" className="w-full mt-8 bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors">Book Now</button>
            </form>
        </div>
    </section>
     );
}

export default BookingTable;