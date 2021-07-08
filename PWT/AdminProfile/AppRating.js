import React,{useState} from "react";
import "./AppRating.css";
import {FaTwitter,star,FaBeer} from "react-icons/fa";
// import {IconRating} from "react-icon-rating";
import { Card, Row, Col ,ListGroup,ProgressBar,Container} from "react-bootstrap";

function Rating() {
    const [ratingData , setRdata] = useState([5,4,3,2,1,5,4,5,4,3,2,12,5,5,5,4,4,4,4,4,5]);
    let totalcount = ratingData.length;
    let starsCount = [0,0,0,0,0];
    let x = ratingData.map((num,i)=>{
        console.log(num);
        switch(num){
            case 5:
                return starsCount[0]+=1;
            case 4:
                return starsCount[1]+=1;
            case 3:
                return starsCount[2]+=1;
            case 2:
               return  starsCount[3]+=1;
            case 1:
                return starsCount[4]+=1;
            default:
                return("");
        }
    })
    let starsAvg = starsCount.map((ele,i) => {
    return (ele/totalcount)*100;
    });
    let avg = starsCount.reduce((prev,next,i) =>{
        return ((5-i)*next+prev)
    })
    let actualAvg = (((avg)/(totalcount*5))*5).toFixed(1);

  return (
    <div>
    <Container>
      <Card  className="text-center" id="Rating-CardStyle">
        {/* <Card.Img variant="top" src="holder.js/100px180" />className="Rating-CardStyle" */}
        <Card.Body>
          <Card.Title as="h3">Rating Overview</Card.Title>
          <Card.Title  className="Rating-titleStyle">{actualAvg}<sub>/5</sub></Card.Title>
          <Card.Text>{totalcount} ratings</Card.Text>
          {starsAvg.map((avg,i)=>{
              return(
          <Row xs={5} md={5} lg={5} className="spaceing">
          
                <Col xs={2} md={2} lg={2}></Col>
                <Col xs={2} md={2} lg={2}>{5-i} &#9733;</Col>
                 
                <Col xs={4} md={4} lg={4}>
                 <ProgressBar
                  className="barSpaceing"
                  variant={(i==0)?"success":(i==1) ?'warning':'danger'}
                  now={avg}
                  visuallyHidden
                  />
                  </Col>
                <Col xs={2} md={2} lg={2}>{starsCount[i]}</Col>
                <Col xs={2} md={2} lg={2}></Col>
            
            </Row>
              )
            })}
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
}
export default Rating;
 {/* <FaTwitter className="iconStyling"></FaTwitter> */}