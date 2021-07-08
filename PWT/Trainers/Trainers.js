import React,{useState} from "react";
import "./Trainers.css";
import MuhammadAli from "../Images/ali2.jpg";
import Trainer3 from "../Images/trainer9.jpeg";
import Trainer2 from "../Images/trainer2.jpeg";
import Trainer1 from "../Images/trainer10.jpeg";
import { Container, Row, Col, Button, Card, CardGroup } from "react-bootstrap";
function Trainers() {
  const [trainers, setTrainers] = useState([
    {name:"Karon Summer",img:Trainer3},
    {name:"Samantha William",img:Trainer2},
    {name:"Jonathon Wise",img:Trainer1}])
  const [trainerHeading, setTheading] = useState("Workout Programs Made For_You");
  const [Tquote , setTquote] = useState("I hate every minute of training. But I said, do not quit.Suffer now and live the rest of your life as a champion.This area of pain divides a champion from someone who is not a champion.")
  return (
    <>
      <div className="backgroundImage">
        <Container  >
           

           
          <Row xs={1} md={2} lg={2} >
          
            <Col className="textStyling">
            <div className="animationLR">
              <p>
                <span className="linebreak">{trainerHeading}</span>
              
                {/* Workout <br />
                Programs
                <br />
                Made <br /> For You */}
              </p>
              </div>
            </Col>
           
            
            <Col className="TrainerStyles">
              <div className="animationRL">
                <p>
                  {Tquote}
                  <div className="textSpace1">
                  <img
                    src={MuhammadAli}
                    className="AliImage"
                    alt="MuhammadAliiMAGE"
                  />
                  <span>Mohammad Ali </span>
                  </div>
                  <button className="buttonStyle">Get Started</button>
                </p>

                
              </div>
            </Col>
         
            <Col className="animationLR">
              <Row>
                <Col className="animationCard">
                  <Card  className="Cardtyles">
                    <Card.Img
                      varient="top"
                      src={trainers[0].img}
                     
                      alt="trainer Image"
                    />
                   
                  </Card>
                  <p className="trainerName">{trainers[0].name} <span>(Trainer)</span></p>
                  
                </Col>
                <Col>
                  
                </Col>
              </Row>
              <Row>
                <Col>
                 
                </Col>
                <Col className="animationCard">
                  <Card  className="Cardtyles">
                    <Card.Img
                      varient="top"
                      src={trainers[1].img}
                      
                      alt="Trainer Image"
                    />
                  </Card>
                  <p className="trainerName">{trainers[1].name} <span>(Trainer)</span></p>
                   
                </Col>
              </Row>
            </Col>
            <Col className="animationRL animationCard">
              <Card  className="Cardtyles">
                <Card.Img varient="top"  src={trainers[2].img} alt="Trainer Image" />
              </Card>
              <p className="trainerName">{trainers[2].name} <span>(Trainer)</span></p>
           
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Trainers;
