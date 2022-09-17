import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



class MoviesData extends React.Component {

    render() {
        console.log(this.props.movies);
        return (
            <>
            <h1>Movies:</h1>
                <div style={{ width: "90%", margin: "auto" }}>
                    <Row xs={1} md={3} className="g-4">
                        {this.props.movies.slice(0, 6).map((item) => {
                            return (
                                <Col>
                                    <Card className="c" style={{ width: "90%" }}>
                                        <Card.Img variant="top" src={item.poster_path} alt="" />
                                        <Card.Body>
                                            <Card.Title style={{ color: "black" }}>
                                                {item.title}
                                            </Card.Title>
                                            <Card.Text style={{ color: "black" }}>
                                                <p>overview: {item.overview}</p>
                                                <p>release_date: {item.release_date}</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </>
        )
    }
}

export default MoviesData;