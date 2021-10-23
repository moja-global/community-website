import React from 'react';
import JsonData from './all-contributors-data.json';
import './teamcard.css';
import Card from 'react-bootstrap/Card';

const JsonDataDisplay = () => {
  const DisplayData = JsonData.map((info) => {
    return (
      <div className="card-list" key={info.name}>
        <div className="card-container">
          <Card>
            <Card.Img className="avatar__photo avatar__photo--xl" src={info.avatar_url} />
            <Card.Body>
              <Card.Title>{info.name}</Card.Title>
              <Card.Subtitle>
                Profile: <a href={info.profile}>{info.github_username}</a>
              </Card.Subtitle>
              <Card.Text>Projects Contributed to:</Card.Text>

              {info.projects.map((item) => (
                <label className="btn" key={info.name}>
                  {item}
                </label>
              ))}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  });

  return <div className="card-list">{DisplayData}</div>;
};

export default JsonDataDisplay;
