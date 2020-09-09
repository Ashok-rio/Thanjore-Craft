import React from "react";
import Header from "../Header/Header";
import Slick from '../slider/Slider';
import Banner from '../Banners/Banners';
import Gallery from '../grid-home/Grid';
import Footer from '../footer/Footer';


const Home = () => {
  return (
    <div style={{width:'97%' ,marginLeft:'1%'}}>
      <Header />
      <Slick />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
