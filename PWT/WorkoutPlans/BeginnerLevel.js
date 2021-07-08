import React, { useState, useEffect } from "react";
import "./BeginnerLevel.css";
import menubar from "../Images/menu.png";
import CardImg from "../Images/beginner18-1.jpeg";
import CardImg2 from "../Images/beginner17-1.jpeg";
import CardImg3 from "../Images/beginner17-2.jpeg";
import pushUp from "../Animation/pushUp.gif";
import kneePushUp from "../Animation/kneePushUps.gif";
import legRaises from "../Animation/legRaises.gif";
import mountainClaimb from "../Animation/mountainClaimber.gif";
import twist from "../Animation/RussianTwist.gif";
import basicImage from "../Images/jumping-Jacks2.jpeg";
import standOn from "../Images/standOn.jpeg";
import armSwing from "../Animation/ArmSwings.gif";
import jumpingJacks1 from "../Animation/Jumping Jacks.gif";
import  {BrowserRouter as Router, Switch,
  Route,Link
  } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Container,
  Image,
  Button,
  Toast,
  Alert
} from "react-bootstrap";
var imageTimer = 0;
function Level1() {
  const [MainImage, setMainImage] = useState(standOn);
  const [time, setTime] = useState([10, 0]);
  const [start, setStart] = useState(true);
  const [stop, setStop] = useState(false);
  const [cont, setContinue] = useState(false);
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(0);
  const [finish, setFinish] = useState(false);
  const [workout, setWorkout] = useState("JUMPING JACKS");
  const [show, setShow] = useState(false);
  const [toast , setToast] = useState(false);

  const [pageHeader, setHeader] = useState({
    img: CardImg,
    img1: CardImg2,
    img2: CardImg3,
    heading: "Beginner Workouts",
    text: "IT IS NEVER TOO LATE AND YOU ARE NEVER TOO OLD TO BECOME BETTER LET US START FROM NOW.",
    workoutHeading: "09 Mins - 10 Workouts",
  });
  const [title, setTitle] = useState([
    {
      title: "JUMPING JACKS",
      text: "01:00 sec",
      img: jumpingJacks1,
      id: 1,
    },
    {
      title: "KNEE PUSH-UPS",
      text: "x 10",
      img: kneePushUp,
      id: 2,
    },
    {
      title: "PUSH-UPS",
      text: "x 10",
      img: pushUp,
      id: 3,
    },
    {
      title: "ARM-SWING",
      text: "01:00 sec",
      img: armSwing,
      id: 4,
    },
    {
      title: "LEG-RAISES",
      text: "01:00 sec",
      img: legRaises,
      id: 5,
    },
    {
      title: "CLAIMB",
      text: "x 10",
      img: mountainClaimb,
      id: 6,
    },
    {
      title: "TWIST",
      text: "01:00 sec",
      img: twist,
      id: 7,
    },
    {
      title: "CHEST STRETCH",
      text: "01:00 sec",
      img: jumpingJacks1,
      id: 8,
    },
    {
      title: "LEG-RAISES",
      text: "01:00 sec",
      img: legRaises,
      id: 9,
    },
    {
      title: "CHEST STRETCH",
      text: "01:00 sec",
      img: jumpingJacks1,
      id: 10,
    },
  ]);

  useEffect(() => {
    let timer = setInterval(() => {
      if (!start && sec > 0) {
        setSec((prevSec) => prevSec - 1);
      } else if (!start && min > 0) {
        setMin((prevMin) => prevMin - 1);
        console.log(imageTimer);
        // setMainImage(title[imageTimer++].img || basicImage)
        setMainImage(title[10 - min].img || standOn);
        setWorkout(title[10 - min].title || standOn);
        setSec(59);
      } else if (start) {
        console.log(imageTimer);
        // if(imageTimer>1){imageTimer--;}
        // else{
        //   imageTimer=0;
        // }

        setMainImage(standOn);
        setSec(0);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [sec, min, start, stop]);

  const startHandler = () => {
    setStart(!start);
    setStop(!stop);
    setContinue(false);
    setMin(10);
    setSec(0);
  };
  const stopHandler = () => {
    setStart(!start);
    setStop(!stop);
    setContinue(true);
    setTime([min, sec]);
  };
  const continueHandler = () => {
    setStart(!start);
    setStop(!stop);
    setContinue(false);
    setMin(time[0] + 1);
    // setSec(time[1]);
  };
  const finishHandler = () => {
    setFinish(!finish);
  };
  const showHandler = () => {
    setShow(!show);
  };
  const toastHandler=()=>{
    setToast(!toast);
  }
  return (
    <>
      <div >
        <Card className="bg-dark  text-white">
         
          <picture>
            <source media="(max-width: 500px)" srcSet={pageHeader.img2} />
            <source media="(max-width: 700px)" srcSet={pageHeader.img1} />

            <Card.Img
              src={pageHeader.img}
              className="cardStyle"
              alt="WORKOUT IMAGE"
            />
          </picture>
          {/* <Card.Img src="small.jpg" srcset={`${pageHeader.img} 1000w, ${pageHeader.img1} 600w`}  className="cardStyle" alt="Beginner Workouts"/> */}
          <Card.ImgOverlay className="ImagetextStyle">
            <Card.Title className="ImageHeaderStyle">
              {pageHeader.heading}
            </Card.Title>
            <Card.Text className="textStyle">{pageHeader.text}</Card.Text>
          </Card.ImgOverlay>
          <Card.Text className="WorkoutHeading">
            {pageHeader.workoutHeading}
          </Card.Text>
        </Card>

        <Container id="Container">
          <Row xs={1} md={1} lg={2}>
            <Col
              lg={8}
              className={start ? "workoutsScroll" : "workoutsScroll toggle"}
            >
            {/* <Toast className="toast_style" show={toast} onClose={toastHandler}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Workouts Instructions</strong>
            
          </Toast.Header>
          <Toast.Body> User login succesfull .................................................................</Toast.Body>
         
          <Button>GO TO WORKOUTS DETAILS</Button>
        </Toast> */}
        
              {title.map((obj, i) => {
                return (
                  <Row xs={3} md={3} lg={3} key={i} className="bgColorworkouts">
                    <Col xs={2} md={3} lg={3}>
                      <Image
                        src={menubar}
                        className="menuSize"
                        alt="menu bar"
                        onClick={toastHandler}
                      />
                    </Col>
                    <Col xs={4} md={4} lg={4}>
                      <Image
                        src={obj.img}
                        className="imageSize"
                        alt="Jumping Jacks"
                      />
                    </Col>
                    <Col xs={6} md={5} lg={5}>
                      <p className="JJtext">{obj.title}</p>
                      <p className="JJtime">{obj.text}</p>
                    </Col>
                  </Row>
                );
              })}
            </Col>

            <Col xs={12} md={12} lg={4}>
              <Row>
                <Image
                  src={MainImage}
                  className={start ? "MainImageStyle toggle" : "MainImageStyle"}
                  alt="Jumping Jacks"
                />
              </Row>
              <Row xs={1} md={1} lg={1}>
                <p className="workoutName">
                  <span>READY </span>
                  <span>TO GO!</span>{" "}
                </p>
              </Row>
              <Row xs={1} md={1} lg={1}>
                <p className="workoutName1">{workout}</p>
              </Row>
              <div className="timer">
                <Row xs={1} md={1} lg={1}>
                  {start ? (
                    <button className="timerStyle">
                      {time[0]}m:{time[1]}s
                    </button>
                  ) : (
                    <button className="timerStyle">
                      {min}m:{sec}s
                    </button>
                  )}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="buttonAlign">
          {start ? (
            <Button onClick={startHandler} className="startButton">
              {cont ? "Re-Start" : "Start"}
            </Button>
          ) : (
            ""
          )}
          {stop ? (
            <Button onClick={stopHandler} className="startButton">
              Pause
            </Button>
          ) : (
            ""
          )}
          {cont ? (
            <Button onClick={continueHandler} className="startButton">
              Continue
            </Button>
          ) : (
            ""
          )}
          {finish ? (
            <Alert show={show} variant="success">
              <Alert.Heading>Congratulations Satyam(userName)</Alert.Heading>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => {
                    finishHandler();
                    showHandler();
                  }}
                  variant="outline-success"
                >
                  Progress
                </Button>
              </div>
            </Alert>
          ) : (
            <Button
              className="startButton"
              onClick={() => {
                finishHandler();
                showHandler();
              }}
            >
              Finish
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
export default Level1;
