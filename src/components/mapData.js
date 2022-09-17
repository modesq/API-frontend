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


            // <div>
            //     <h3>city name : {this.props.cityName}</h3>
            //     <p>Lon : {this.props.lon}</p>
            //     <p>Lat : {this.props.lat}</p>

            //     {this.props.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.bf868f2123453ea99fec1e16c3a67189&center=${this.props.lat},${this.props.lon}`} alt="map" ></img>}
            //     {this.props.errFlag && <h4>Error : sorry something went wrong!</h4>}
            // </div>
        );
    }
}

export default MapData;