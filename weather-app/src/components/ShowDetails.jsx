import React from 'react'

function ShowDetails({details}) {
    const {main,name,sys,wind}=details
    const getCurrentDate=()=>{
      return new Date().toLocaleDateString('en-us',{
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
 
  return (
    <div className=' flex justify-center text-center mt-7'>
        <fieldset
        className=' border-solid border-2 border-white h-96 w-1/3 rounded-lg grid '
        >
        <h1 className=' text-6xl'>{parseInt(main.temp-273.15)}°C</h1>
        <hr />
        <div className=' flex justify-around mt-4'>
        <h1>{name},{sys.country}</h1>
        <h1>{getCurrentDate()}</h1>
        </div>
        <hr />
        <h1>Wind: {wind.speed}</h1>
        <hr />
        <h1>Humidity: {main.humidity}%</h1>
        <hr />
        <h1>Pressure: {main.pressure}</h1>
        </fieldset>


    </div>
  )
}

export default ShowDetails