import React,{useState} from "react";
import "./AdminProfile.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProfileImage from "../Images/UserProfile.jpeg";
import userImage from "../Images/ali2.jpg";
import {Button} from "react-bootstrap";
// import SampleProfile from "../UserProfile/userProfile.js";
function AdminProfile(){
    const [adminData, setData] = useState(
        {
            Name:"Admin",
            Email:"admin@gmail.com"
        }
    );
    return (
        <div>
          
              <Card className="Card-bg-image" id="admin-CardStyle">
                <Card.Img  className="Card-Main-Image-Styleing"  src={ProfileImage} />
                <img  className="Card-user-Image-Styleing"  src={userImage} />
                <Card.ImgOverlay className="TextStyle" >
                <Card.Title className="nameStyle">Krishna Satyam </Card.Title>
                
              </Card.ImgOverlay>
                <Card.Body className="detailsStyle">
                  <Card.Title> Name:{adminData.Name}</Card.Title>
                  <Card.Title> Email:{adminData.Email}</Card.Title>
                 <Button variant="secondary">View Workouts</Button>
                 <Button variant="secondary">View Users</Button>
                </Card.Body>
              </Card>
              
        
        </div>
      );
}
export default AdminProfile;