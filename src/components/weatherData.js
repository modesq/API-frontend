import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class WeatherData extends React.Component {

  render() {
    return (
      <div>
        <h3>Forecast:</h3>
        <div style={{ width: "90%", margin: "auto" }}>
          <Row xs={1} md={3} className="g-4">
            {this.props.weather.slice(0, 6).map((item) => {
              return (
                <Col>
                  <Card className="c" style={{ width: "90%"}}>
                    <Card.Body>
                      <Card.Title style={{ color: "black" }}>
                        {item.date}
                      </Card.Title>
                      <Card.Text style={{ color: "black" }}>
                        <p>highTemp: {item.highTemp}</p>
                        <p>lowTemp: {item.lowTemp}</p>
                        <p>description: {item.description}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    )
  }
}

export default WeatherData;