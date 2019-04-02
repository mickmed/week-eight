import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Location} from 'expo';
import moment from 'moment';

export default class FiveDayForecast extends React.Component {
    state = {
        weather: ""
    }
    componentDidMount = async () => {
        let location = await Location.getCurrentPositionAsync({})

        const API_KEY = "d6c07dbfad4da83e146860314eee5233";
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}40&lon=${location.coords.longitude}&units=imperial&APPID=${API_KEY}`)
        let data = await response.json()
            console.log(data)
        this.setState({
            weather: data
        })
    }
    
    
    
    render() {

        let weather;
        if(this.state.weather !== ""){
            weather = this.state.weather.list.map((day, i) => {
                let date = day.dt_txt.slice(0, 10)
                let dayOfWeek = moment(date).format("dddd")
                    console.log(dayOfWeek)
                if(this.state.weather.list.indexOf(day) % 8 === 0){
                    return (
                        <View style={styles.week} key = {i}>
                            <Text>{dayOfWeek}-</Text>
                            <Text>Average: {Math.round(day.main.temp)}&deg;</Text>
                            <Text>High: {Math.round(day.main.temp_max)}&deg;</Text>
                            <Text>Low: {Math.round(day.main.temp_min)}&deg;</Text>
                        </View>
                    )
                }
            })
        }
        return (
            <View style={styles.container}>
                {weather}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:200,
        backgroundColor:'yellow',
        
       
    },
    week: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        backgroundColor:'lightblue',
        borderRadius: 50,
        borderColor: 'brown'
    },
});

