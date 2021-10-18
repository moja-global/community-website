import React from 'react'
import ReactDOM from 'react-dom'
import JsonData from './all-contributors-data.json';
import styles from './teamcard.css';
import Card from "react-bootstrap/Card";


 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
      (info)=>{
        return(
        <div className="card-list">
          <div className="card-container">
            <Card style={{ width: "20rem" }}>
              <Card.Img className="avatar__photo avatar__photo--xl" src={info.avatar_url}/>
              <Card.Body>
                <Card.Title><h3>{info.name}</h3></Card.Title>
                <Card.Subtitle>
                  Profile: <a href={info.profile}>{info.login}</a>
                </Card.Subtitle>
                <Card.Text>
                  <h6 className="label label-success">Project Contributed to:</h6>
                  <a href="#" class="btn">{info.contributions}</a>
                </Card.Text>
                </Card.Body>
            </Card>
          </div>
        </div>
              )
              }
                )
 
    return(
    <div className="card-list">
      {DisplayData}
      </div>
      )
    }
 
 export default JsonDataDisplay;
