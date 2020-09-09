import React from 'react'
import { Col, Card, CardBody, Row } from 'reactstrap'
import { FaHome , FaDolly, FaTruck ,FaUserTie} from 'react-icons/fa'

const  SideNav = () => {
    return (
        <React.Fragment>
            <Col lg={3}>
                <Card style={{height:'750px'}}>
                    <Card style={{padding:'15%' ,border:'none'}}>
                        <CardBody>
                            <Row onClick={() => window.location = '/'} style={{cursor:'pointer'}}>
                                <Col lg={3}><FaHome size={'2rem'} /></Col>
                                <Col lg={6}><h4>Home</h4></Col>
                            </Row>
                            <br />
                            <br />
                            <Row onClick={() => window.location = '/profile'} style={{cursor:'pointer'}}>
                                <Col lg={3}><FaUserTie size={'2rem'} /></Col>
                                <Col lg={6}><h4>Profile</h4></Col>
                            </Row>
                            <br />
                            <br />
                            <Row onClick={() => window.location = '/'} style={{cursor:'pointer'}}>
                                <Col lg={3}><FaDolly size={'2rem'} /></Col>
                                <Col lg={6}><h4>Product</h4></Col>
                            </Row>
                            <br />
                            <br />
                            <Row onClick={() => window.location = '/orders'} style={{cursor:'pointer'}}>
                                <Col lg={3}><FaTruck size={'2rem'} /></Col>
                                <Col lg={6}><h4>Orders</h4></Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default SideNav
