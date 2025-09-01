function Time() {
    return ( 
        <section id="hours" class="py-16 px-4 bg-amber-100 dark:bg-gray-900 dark:text-amber-50">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">Opening Hours</h2>
            
            <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div class="space-y-4">
                    <div class="flex justify-between">
                        <span class="font-medium">Monday - Friday</span>
                        <span>7:00 AM - 8:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="font-medium">Saturday</span>
                        <span>8:00 AM - 9:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="font-medium">Sunday</span>
                        <span>9:00 AM - 6:00 PM</span>
                    </div>
                </div>
                
                <div class="mt-8 p-4 bg-amber-50 dark:bg-gray-700 rounded-lg">
                    <p class="text-center text-amber-600 font-bold">We're open on holidays with special hours!</p>
                </div>
            </div>
        </div>
    </section>
     );
}

export default Time;