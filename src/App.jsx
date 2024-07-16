import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Work from './components/work/Work';


function App() {
  return (
    <>
      

        <Header />

        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Work />
          <Testimonials />
          <Contact />
          
        </main>
        
        
        
        <Footer />
        <ScrollUp />

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      
      </>
  );
}

export default App;
