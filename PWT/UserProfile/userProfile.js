import React, { useState } from "react";
import "./userProfile.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProfileImage from "../Images/UserProfile.jpeg";
import userImage from "../Images/ali2.jpg";
function userProfile() {
    // const [userDetails , setUserDetails] = useState();
  return (
    <div>
      
          <Card className="Card-bg-image">
            <Card.Img  className="Card-Main-Image-Styleing"  src={ProfileImage} />
            <img  className="Card-user-Image-Styleing"  src={userImage} />
            <Card.ImgOverlay className="TextStyle" >
            <Card.Title className="nameStyle">Krishna Satyam </Card.Title>
            
          </Card.ImgOverlay>
            <Card.Body className="detailsStyle">
              <Card.Title> Name:Satyam</Card.Title>
              <Card.Title> Email:krishna@gmail.com</Card.Title>
              <Card.Text>
               

              </Card.Text>
            </Card.Body>
          </Card>
          
    
    </div>
  );
}
export default userProfile;
