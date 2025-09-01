function Footer() {
    return ( 
         <footer class="bg-gray-800 text-white py-12 px-4">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Cafe Delight</h3>
                    <p class="text-amber-200">The perfect place to enjoy premium coffee and delicious food.</p>
                </div>
                
                <div>
                    <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                    <p class="mb-2"><i class="fas fa-map-marker-alt mr-2 text-amber-400"></i> Sector 17, Chandigarh</p>
                    <p class="mb-2"><i class="fas fa-phone mr-2 text-amber-400"></i>  98456-79890</p>
                    <p><i class="fas fa-envelope mr-2 text-amber-400"></i> cafedelight@gmail.com</p>
                </div>
                
                <div>
                    <h3 class="text-xl font-bold mb-4">Follow Us</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-2xl text-amber-400 hover:text-amber-300"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-2xl text-amber-400 hover:text-amber-300"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-2xl text-amber-400 hover:text-amber-300"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                <p>&copy; 2025 Cafe Delight. All rights reserved.</p>
            </div>
        </div>
    </footer>
     );
}

export default Footer;