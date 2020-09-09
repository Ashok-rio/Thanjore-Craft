import React from 'react'
import { Container, Row } from 'reactstrap'
import { useParams } from "react-router-dom";
import SideNav from './SideNav'
import Profile from '../Admin/Profile/Profile';
import Header from "../Header/Header";
import Products from '../Product/Products';
import ProductOne from '../Product/ProductOne';
import Addproduct from '../Product/Addproduct';
import Orders from '../Orders/Orders';


const HomePage = () => {

    let { id } = useParams();

    // console.log(window.location.pathname.includes('/product'));


    const pathRender = () => {
        let path = window.location.pathname;
        if (path === '/profile') {
            return <Profile />
        }
        else if (path === '/') {
            return <Products />
        }
        else if (path === `/product/${id}`) {
            return <ProductOne />
        }
        else if (path === '/add/product') {
            return <Addproduct />
        }
        else if (path === '/orders') {
            return <Orders />
        }
        else {
            return <p>No found !</p>
        }
    }

    return (
        <React.Fragment>
            <Header />
            <Container fluid={true} style={{padding:'3%',backgroundColor:'#0163b2',height:'1000px'}}>
                <Row>
                    <SideNav />
                    {pathRender()}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default HomePage
