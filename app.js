const Api_key = `075f9499e7acc8983424c9d4b981e751
`
const searchTemp = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}

const displayTemp = info =>{
   const cityName = document.getElementById('city');
   cityName.innerText = info.name;
    console.log(info)

   const temperature = document.getElementById('temp');
   temperature.innerText = info.main.temp;

   const weather = document.getElementById('weather');
   weather.innerText = info.weather[0].main;
//    set weather icon
const url = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
   const icon= document.getElementById('icon');
         icon.setAttribute('src', url)


}
