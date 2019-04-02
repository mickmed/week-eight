import React from 'react';
import * as RN from 'react-native';
import {Permissions, Location} from 'expo';

export default class CurrentWeather extends React.Component {
    state = {
        weather: '',
        errorMessage: ''
    }

    componentDidMount = async () => {
        let status = await Permissions.askAsync(Permissions.LOCATION)
        if (status !== 'granted'){
            this.setState({
                errorMessage: "Permissions were denied"
            })
        }
        let location = await Location.getCurrentPositionAsync({})

        const API_KEY = "d6c07dbfad4da83e146860314eee5233";
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}40&lon=${location.coords.longitude}&units=imperial&APPID=${API_KEY}`)
        let data = await response.json()
            // console.log(data)
        this.setState({
            weather: data
        })
    }

    render() {
        let weather;
            if (this.state.weather !== "") {

        weather = <RN.View style={styles.container}>
            <RN.Text >{this.state.weather.name}</RN.Text>
                <RN.Image style={styles.imageStyle} source={{ uri: `http://openweathermap.org/img/w/${this.state.weather.weather[0].icon}.png` }} />
                <RN.Text >
            Current: {Math.round(this.state.weather.main.temp)}˚
            </RN.Text>
            <RN.Text>
                High: {Math.round(this.state.weather.main.temp_max)}˚
             </RN.Text>
             <RN.Text>
               Low: {Math.round(this.state.weather.main.temp_min)}˚
             </RN.Text>
           <RN.Text>Humidity: {this.state.weather.main.humidity}%</RN.Text>
           <RN.Text>Wind Speed: {Math.round(this.state.weather.wind.speed)}mph</RN.Text>
           </RN.View>;
       }
    return ( <RN.View style = {styles.container} >
        {weather}
      </RN.View>
    );
  }}


const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  imageStyle: {
    height: 75,
    width: 75
  },
  background: {
    width: RN.Dimensions.get("window").width,
    height: RN.Dimensions.get("window").height,
    justifyContent: "center"
  }
});