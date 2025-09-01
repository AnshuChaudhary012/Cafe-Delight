import ModeBtn from "./theme/ModeBtn";

function NavBar() {

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md dark:text-amber-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-600">Cafe Delight</h1>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-amber-600 transition-colors">Home</a>
          <a href="#menu" className="hover:text-amber-600 transition-colors">Menu</a>
          <a href="#hours" className="hover:text-amber-600 transition-colors">Hours</a>
          <a href="#booking" className="hover:text-amber-600 transition-colors">Book Table</a>
        </nav>

        <ModeBtn />
      </div>
    </header>
  );
}

export default NavBar;
