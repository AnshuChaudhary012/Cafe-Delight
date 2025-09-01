import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Menu from './components/menu-section/Menu';
import Time from './components/opening-hour-section/time';
import BookingTable from './components/BookTable';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme/ThemeContext';





function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Hero />
      <Menu />
      <Time />
      <BookingTable />
      <Footer />
    </ThemeProvider>
  )
}

export default App
