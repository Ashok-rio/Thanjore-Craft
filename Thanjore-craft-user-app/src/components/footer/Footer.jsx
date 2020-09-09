import React from 'react'
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Row,Col} from 'reactstrap'
import './footer.css'
const useStyles = makeStyles((theme) => ({
  root:{

  }  ,button:{
        flex:2,
        backgroundColor:'#412828',
        color:'white',
        height:'60px'
    }
  }));
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function Footer(props) {
    const classes = useStyles();
    return (
        <div>
              
      
        <Button variant="contained" fullWidth={true} onClick={topFunction} className={classes.button}>Back To Top</Button> 
        <div className={'footer-home'}>
            <Row>
                <Col md='4'>
                    <ul className={'ul-footer'}>
                        <li className={'footer-heading'}>THE INDIA CRAFT HOUSE</li>
                        <li className={'footer-list'}>ABOUT US </li>
                        <li className={'footer-list'}>MISSION </li>
                        <li className={'footer-list'}>CONTACT US </li>
                        <li className={'footer-list'}>Sell with US</li>
                        <li className={'footer-list'}>Fair Trade</li>
                        <li className={'footer-list'}>Disclaimer </li>
                        <li className={'footer-list'}>Blog </li>
                        <li className={'footer-list'}>Site Map </li>
                    </ul>
                </Col>
                <Col  md='4'>
                <ul className={'ul-footer'}>
                        <li className={'footer-heading'}>
                            SHOP
                        </li>
                        <li className={'footer-list'}>MY ACCOUNT  </li>
                        <li className={'footer-list'}>REWARD PROGRAMS </li>
                        <li className={'footer-list'}>GIFT Orders </li>
                        <li className={'footer-list'}>Customer Orders </li>
                        <li className={'footer-list'}>Bluk Orders </li>
                    </ul>
                </Col>
                <Col  md='4'>
                <ul className={'ul-footer'}>
                        <li className={'footer-heading'}>HELP</li>
                        <li className={'footer-list'}>CUSTOMER Service </li>
                        <li className={'footer-list'}>HOW TO ORDER </li>
                        <li className={'footer-list'}>Billig &amp; PAYMENTS </li>
                        <li className={'footer-list'}>Shipping &amp; Delivery </li>
                        <li className={'footer-list'}>Refund ,Retrun &amp; Exchange </li>
                        <li className={'footer-list'}>Discount &amp; Promotions </li>
                        <li className={'footer-list'}>FAQ's</li>
                    </ul>
                </Col>
            </Row>
        </div>
          
        </div>
    )
}



export default Footer

