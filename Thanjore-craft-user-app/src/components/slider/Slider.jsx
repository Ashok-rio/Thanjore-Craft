import React,{useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getSlickImgs } from '../../service/ApiService';
import './slide.css'

var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
const Sliders = props =>{

    const [Imgs, setImgs] = useState([])
    useEffect( () => {
        async function fetchData() {
        try{
            let result = await getSlickImgs()
            console.log(result);
            if(result.success === true){
               setImgs(result.img)
              }
            
        }
       catch (e){
            console.log(e.message);
            
       }}
       fetchData();
    }, [])

    const images = () =>{
        return Imgs.map(data =>(
            <div key={data._id}>  
                 <img  src={data.url} className={'Slick-img'} alt={''} />
            </div>
        ))
    }
  
    return(
        <div className={'slick-cont'}>
            <Slider {...settings}>
           
           { images()}
        
        </Slider>
        </div>
        
    )
}

export default Sliders