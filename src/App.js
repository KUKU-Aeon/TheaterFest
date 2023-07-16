import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Header from './Header';
import Footer from './Footer';
import Billboard from "./Billboard";
import AdminMenu from "./AdminPage";
import CreateBillboard from "./CreateBillborad";

function App() {
  return (
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage/>}>

            </Route>

              <Route path="/billboard" element={<Billboard/>}>

              </Route>

              <Route path="/contact" element={<ContactPage/>}>

              </Route>

            <Route path="/about" element={<AboutPage/>}>

            </Route>

            <Route path="/admin" element={<AdminMenu/>}>

            </Route>

            <Route path="/make-bill" element={<CreateBillboard/>}>

            </Route>
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;