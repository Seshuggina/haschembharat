import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import HeaderNavbar from "components/Navbars/Header";
import Footer from "components/Footers/CardsFooter";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

import ContactUs from "pages/Contact/ContactUs.js";
import { Products } from "./pages/Products/Products.js";
import { AboutUs } from "pages/About/AboutUs.js";
import { Services } from "pages/Services/Services.js";
import Home from "pages/index.js";
import { Career } from "pages/career/Career.js";
import { ProductDetails } from "pages/ProductDetails/ProductDetails.js";
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <BrowserRouter>
    <HeaderNavbar />
    <main className="position-relative">
      <section>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/haschembharat" exact element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/products/:type?" exact element={<Products />} />
          <Route path="/productDetails/:id" exact element={<ProductDetails />} />
          <Route path="/career" exact element={<Career />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} />8 */}
          
        </Routes>
      </section>
    </main>

    <ScrollToTop />
    <Footer />
  </BrowserRouter>
);
