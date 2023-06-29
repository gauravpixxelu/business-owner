import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/mobile.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import BusinessOwner from './Components/BusinessOwner';
import ImplementationPartners from './Components/ImplementationPartners';
import Blogs from './Components/Blogs';
import BlogDetail from './Components/BlogDetail';
import NotFound from './Components/NotFound';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BusinessOwner />} />
          <Route path="/implementation-partners" element={<ImplementationPartners />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} /> 
          <Route path="/*" element={<NotFound />} /> 
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
