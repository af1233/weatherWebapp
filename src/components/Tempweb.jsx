import React, { useEffect, useState } from 'react'
import './css/style.css';

const Tempweb = () => {
    const [city , setCity]=useState(null);
    const [search, setSearch]=useState("lahore");

    useEffect(()=>{

         const fetchApi= async()=>{
            // const apikey="57bdc6292b4fe80f734fc6278ac759b4";
             const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=57bdc6292b4fe80f734fc6278ac759b4`;

             const response=await fetch(url);
            //  console.log(response);
            const data=await response.json();


            // console.log(data)
          
            setCity(data.main);

         }


        fetchApi();
    },[search])
  return (
    <>
      <div className='container'>
            <div className='input-data'>
                    <input type='search' className='inputfield' 
                    value={search}
                    onChange={(event)=>{
                        setSearch(event.target.value);
                    }}
                     />
            </div>
{
    !city ?   " data not found ":(  <div className='info'>
                <h2 className='location'><i className="fa-solid fa-street-view"></i>
                {search}
                </h2>
                <h1 className='temp'>{city.temp} 	°C</h1>
                <h3 className='temp-max'>min-temp: {city.temp_min}	°C | max-temp: {city.temp_max}	°C</h3>
            </div>)
}
          
      </div>
    </>
  )
}

export default Tempweb
