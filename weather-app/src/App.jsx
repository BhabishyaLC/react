import { useEffect, useState } from 'react'
import './App.css'
import InputUser from './components/InputUser'
import Loading from './components/Loading'
import ShowDetails from './components/ShowDetails'
function App() {
  const [cityDetail, setCityDetail] = useState('Kathmandu')
  const [weatherData, setWeatherData]=useState(null)
  const [loading,setLoading]=useState(true)

  async function fetchWeatherData(param){
    try{
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=5c8c185b2c37add6d9777b12a5b4d651`)
    const data= await res.json()
    if(data){
      
      setWeatherData(data)
      setLoading(false)
    }
    }
    catch(e){
      console.log(e)
    }
  }
 
  useEffect(()=>{
    fetchWeatherData('Kathmandu')
  },[])

  
 if(loading){
    return <Loading/>
  }
  function handleSearch(){
    fetchWeatherData(cityDetail)
  }
  return (
    <div className=' h-screen w-full bg-yellow-700 text-white'>
      <div className=' flex justify-center gap-3 items-center bg-amber-700'>
      <InputUser
      cityName={cityDetail}
      onCityNameChange={(cityDetail)=>setCityDetail(cityDetail)}
      
      />
      <button
      onClick={handleSearch}
      className=' border-2 border-solid border-black rounded-lg p-2 bg-green-600'
      >Search</button>
    </div>
    
    {
     weatherData!==null?<ShowDetails details={weatherData}/>:null
    }
    </div>
   
  )
}

export default App
