import React from "react";
import Card from 'react-bootstrap/Card';


class MapData extends React.Component {

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.bf868f2123453ea99fec1e16c3a67189&center=${this.props.lat},${this.props.lon}`} alt="map" />
                    <Card.Body>
                        <Card.Title>{this.props.cityName}</Card.Title>
                        <Card.Text>
                            <p>Lon: {this.props.lon}</p>
                            <p>Lat: {this.props.lat}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MapData;