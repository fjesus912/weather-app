import { useState } from "react"
import WeatherStat from "./WeatherStat"

const WeatherContainer = ({ weather }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeUnitTemp = (temp) => {
    if (isCelsius) {
      // Transformación a Celsius
      const celsiusTemp = (temp - 273.15).toFixed(0) // Se puede dejar .toFixed(0) para quedarnos sin decimales
      return `${celsiusTemp} ºC`
    } else {
      // Transformación a Fahrenheit
      const farenheitTemp = (((temp - 273.15) * 9 / 5) + 32).toFixed(0)
      return `${farenheitTemp} ºF`
    }
  }

  const weatherIcons = {
    "01d": "/01d.svg",
    "01n": "/01n.svg",
    "02d": "/02d.svg",
    "02n": "/02n.svg",
    "03d": "/03.svg",
    "03n": "/03.svg",
    "04d": "/04.svg",
    "04n": "/04.svg",
    "09d": "/09d.svg",
    "09n": "/09n.svg",
    "10d": "/10.svg",
    "10n": "/10.svg",
    "11d": "/11.svg",
    "11n": "/11.svg",
    "13d": "/13.svg",
    "13n": "/13.svg",
    "50d": "/50.svg",
    "50n": "/50.svg",
  }

  const handleChangeUnit = () => {
    setIsCelsius(!isCelsius)
  }

  const handleButtonUnit = (unit) => {
    if (unit) {
      return 'Convert to ºF'
    }else
      return 'Convert to ºC'
  } 

  return (
    <section className="text-center gap-8 grid">
      <h3 className="bg-[rgba(224,_224,_224,_0.8)] rounded-[50px] px-6 py-4 text-xl sm:text-[32px] font-bold dark:bg-[rgba(55,_55,_55,_0.80)] dark:text-white">{weather.name}, {weather.sys.country}</h3>

      <div className="grid gap-5 sm:grid-cols-[1fr_auto]">

        {/* Seccion superior */}
        <article className="bg-[rgba(224,_224,_224,_0.8)] rounded-[50px] grid grid-cols-2 items-center p-6 dark:bg-[rgba(55,_55,_55,_0.80)]">
          <h4 className="col-span-2 text-2xl capitalize text-[#3E3E3E] dark:text-white">{weather.weather[0].description}</h4>
          <span className="text-5xl flex sm:text-[115px] text-[80px] font-light dark:text-white">{changeUnitTemp(weather.main.temp)}</span>
          <picture className="p-6">
            <img className="w-full h-auto" src={weatherIcons[weather.weather[0].icon]} alt="" />
          </picture>
        </article>

        {/* Seccion inferior */}
        <article className="grid grid-cols-3 justify-items-center items-center bg-[rgba(224,_224,_224,_0.8)] rounded-[30px] p-2 py-4 sm:grid-cols-1 dark:bg-[rgba(55,_55,_55,_0.80)] dark:text-white">
          <WeatherStat icon={"/wind.svg"} unit=" m/s" value={weather.wind.speed} />
          <WeatherStat icon="/humidity.svg" unit=" m/s" value={weather.main.humidity} />
          <WeatherStat icon="/pressure.svg" unit=" m/s" value={weather.main.pressure} />
        </article>
      </div>

      <button onClick={handleChangeUnit} className="text-[#4580BA] mx-auto rounded-[21px] bg-white shadow-[0px_4.8546px_4.8546px_0px_rgba(0,_0,_0,_0.25)] w-[178.407px] h-[38.837px] dark:bg-[#4580BA] dark:text-white">
        {handleButtonUnit(isCelsius)}
      </button>
    </section>
  )
}

export default WeatherContainer
