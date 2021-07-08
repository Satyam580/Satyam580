import React from "react";
import "./Profile.css";
import { Col,Row,Container } from "react-bootstrap";
import AdminProfile from "./AdminProfile";
import AppRating from "./AppRating";
function Profile(){
    return(
        <div>
           <Container>
            <Row xs={1} md={1} lg={2}>
                <Col lg={6} className="admin-containers">
                <AdminProfile></AdminProfile> 
                </Col>
                <Col lg={6} className="admin-containers">
                <AppRating></AppRating>
                </Col>
            </Row>
            </Container>
            
        </div>
    )
}
export default Profile;