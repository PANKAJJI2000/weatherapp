import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1690522330763-7cdc0f1eecc4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D";
    
    const HOT_URL= "https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg";
    const COLD_URL= "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2019/01/30/USATODAY/usatsports/247WallSt.com-247WS-524923-winter-weather.jpg?width=3200&height=1680&fit=crop";
    const RAIN_URL= "https://www.vmcdn.ca/f/files/via/images/weather/rain-umbrella-vancouver-weather.jpg;w=960";
    
    return(
        <div className="InfoBox">
            {/* <h2>WeatherInfo-{info.weather}</h2> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80 
          ? RAIN_URL
          : info.temp > 15 
          ? HOT_URL 
          : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{" "}
             { info.humidity>80 ? (
               <ThunderstormIcon />
              ): info.temp > 15 ?(
              <WbSunnyIcon /> 
            ):( <AcUnitIcon />
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature: {info.temp}&deg;C</div>
         <div>Humidity: {info.humidity}</div>
         <div>Min Temp: {info.tempMin}</div>
         <div>Max Temp: {info.tempMax}</div>
        <p>The weather can be described as <i>{info.weather}</i> and feels like{" "}
            {info.feelslike}&deg;C
        </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}