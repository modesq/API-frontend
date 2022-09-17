import React from "react";
import axios from 'axios';
import UserForm from "./userForm";
import MapData from "./mapData";
import WeatherData from "./weatherData"
import MoviesData from "./MoviesData"
import NewsData from "./NewsData"

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            lat: '',
            lon: '',
            weather: [],
            movies: [],
            news: [],
            showFlag: false,
            errFlag: false,
            mapFlag: false,
            weatherFlag: false
        }
        
    }

    getData = async (event) => {
        event.preventDefault();
        const reqCityName = event.target.city.value;
        //send request to the locationiq.com
        const URL = `http://localhost:3001/data?cityName=${encodeURIComponent(reqCityName)}`
        try {
            let resResult = await axios.get(URL);
            console.log(resResult);
            this.setState({
                cityName: resResult.data.location.cityName,
                lat: resResult.data.location.lat,
                lon: resResult.data.location.lon,
                weather: resResult.data.weather,
                movies: resResult.data.movies,
                news: resResult.data.news,
                showFlag: true,
                mapFlag: true,
                errFlag: false
            })
        }
        catch (error) {
            console.error(error)
            this.setState({
                errFlag: true,
                showFlag: false
            })
        }
    }

    render() {
        return (
            <div>
                <UserForm
                    getData={this.getData}
                />
                {this.state.showFlag && (
                    <div>
                        <MapData
                            cityName={this.state.cityName}
                            lat={this.state.lat}
                            lon={this.state.lon}
                            errFlag={this.state.errFlag}
                            mapFlag={this.state.mapFlag}
                        />
                        <WeatherData
                            weather={this.state.weather}
                            mapFlag={this.state.mapFlag}
                        />
                        <MoviesData
                            movies={this.state.movies}
                        />
                        <NewsData
                            news={this.state.news}
                        />
                    </div>
                )}

            </div>
        )
    }
}
export default Main;