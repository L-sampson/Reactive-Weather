import React from 'react';
// Import data and WeatherCard here
import cities from './data.js'
//import WeatherCard from './components/WeatherCard.js'
import  {useState} from 'react';
import Location from './components/Location.js'
import Form from './components/Form.js'

function App() {
    const[location, setLocation] = useState("New York City")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <Form location ={location} setLocation={setLocation}/>
            <h3 className='subtitle'>Your Location's Weather</h3>
            <div className = "app">
                <Location data ={cities} location={location} setLocation ={setLocation} />
                {/*cities.map((citiesInfo)=><WeatherCard data ={citiesInfo} />)*/}
            </div>
            
        </>
    )
}

export default App;