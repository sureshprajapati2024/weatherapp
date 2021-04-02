
import './App.css';
import React ,{useState} from 'react';


const api={
  key:"3e2e60b5f93ad0fa1a3d813c78efe64a",
  base:"https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});


  const search=evt=>{
    if(evt.key==="ENTER"){
      fetch(`${api.base}weather?=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result => {  setWeather(result); setQuery(''); console.log(weather);});
    }
  }

  const dateBuilder=(d)=>{
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day= days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app warm ">
      <main>

      <div className="search-box">
      <input type="text" className="search-bar" placeholder="Search..."  onChange={e=>setQuery(e.target.value)}   value={query} onKeyPress={search} />

      </div>
     {(typeof weather.main !="undefined")?(

      <div>
        <div className="location-box">
        <div className="location">{weather.name},{weather.sys.country}  </div>
        <div className="date">{dateBuilder(new Date())} </div>


        </div>
        <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)} c </div>
        <div className="weather">sunny</div>

</div>
        </div>
     ):('')}
      </main>




    </div>
  );
}

export default App;
