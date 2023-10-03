const WeatherStat = ( {icon, value, unit} ) => {
    return (
        <div className="flex gap-2 items-center">
            <img src={icon} alt="" />
            <span className="font-bold">{value}{unit}</span>
        </div>
    )
}
export default WeatherStat