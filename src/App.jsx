import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherContainer from './components/WeatherContainer'


const weatherBackgrounds = {
  "01d": "/bg01d.webp",
  "01n": "/bg01n.webp",
  "02d": "/bg02d.webp",
  "02n": "/bg02n.webp",
  "03d": "/bg03d.webp",
  "03n": "/bg03n.webp",
  "04d": "/bg04d.webp",
  "04n": "/bg04n.webp",
  "09d": "/bg09d.webp",
  "09n": "/bg09n.webp",
  "10d": "/bg10d.webp",
  "10n": "/bg10n.webp",
  "11d": "/bg11d.webp",
  "11n": "/bg11n.webp",
  "13d": "/bg13d.webp",
  "13n": "/bg13n.webp",
  "50d": "/bg50d.webp",
  "50n": "/bg50n.webp"
}

function App() {
  const [theme, setTheme] = useState('light')

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const [weather, setWeather] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "8fe86384bcb1f5f14d14de7329929239"
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      setTheme('dark')
  }, [])


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)

  }, [])

  

  return (
    <main className='font-["Lato"] min-h-screen text-black p-6 flex flex-col items-center justify-center gap-10 '>

      {
        weather == null ? (<section className={`bg-[url("/loaderBg.svg")] bg-cover bg-center fixed top-0 left-0 w-full h-full ${weather ? 'hidden' : ''}`}></section>
        ) : (
          <>
            <img src={weatherBackgrounds[weather?.weather[0]?.icon]} alt="" className="w-full h-full object-cover fixed top-0 left-0  dark:brightness-50" />

            <section className='w-full flex items-center justify-between p-6 z-10'>
              <span className='text-white text-[19px] font-semibold'>Weather App</span>

              <label className="relative inline-flex items-center cursor-pointer ">
                <input type="checkbox" value="" className="sr-only peer" onClick={handleThemeSwitch} />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[rgba(224,_224,_224,_0.8)]"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>
            </section>

            <section className='flex justify-center items-center gap-6 z-10'>
              <WeatherContainer weather={weather} />
            </section>
          </>
        )}

    </main>
  )
}

export default App
