const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey ="dc5998b2d8f954db7dfa0466c910a707";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather (city) {
    const res = await fetch (apiUrl + city + `&appid=${apiKey}`);
    
    if (res.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await res.json() ;
        console.log(data) ;
        
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clear") {
            weatherIcon.src="clear.png";
        } else  if(data.weather[0].main == "Clouds") {
            weatherIcon.src="clouds.png";
        } else  if(data.weather[0].main == "Rain") {
            weatherIcon.src="Rain.png";
        } else  if(data.weather[0].main == "Drizzle") {
            weatherIcon.src="drizzle.png";
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src="mist.png";
        } else if(data.weather[0].main == "Smoke") {
            weatherIcon.src="smoke.png" ;
        } 
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

   
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});