import { Outlet } from 'react-router-dom';
import './App.css';
import Home from "./Component/Home/Home"
import Header from "./Component/Header/Header";
import Footer from './Component/Footer/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const disHome = location.pathname=="/"
  return (
    <div className="bg-custom-dark text-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {
          disHome?<Home/> :<Outlet/>
       
        }
      

      </div>
      <Footer />
    </div>
  );
}

export default App;
