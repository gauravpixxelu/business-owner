import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import BusinessOwner from './Components/BusinessOwner';
import ImplementationPartners from './Components/ImplementationPartners';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BusinessOwner />} />
          <Route path="/implementation-partners" element={<ImplementationPartners />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
