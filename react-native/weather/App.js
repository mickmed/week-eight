import {createSwitchNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Home from "./Components/Home"
import CurrentWeather from './Components/CurrentWeather'
import FiveDayForecast from './Components/FiveDayForecast'
const MainNavigator = createSwitchNavigator(
  {
    Home: Home,
    Weather: {
      screen: createBottomTabNavigator({
        "Today's Forecast": CurrentWeather,
        "5 Day Forecast": FiveDayForecast,
        "Home": Home
      })
    }
  },
  {
    initialRouteName: "Home"
  }
)
const App = createAppContainer(MainNavigator)
export default App
