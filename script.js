// const a= document.getElementById('city_name')
// const b=document.getElementById('output')
// const a= document.getElementById('city_name')
// const b= document.getElementById('output')
// const city="Udaipurwati"
async function getdata(){ 
    const a= document.getElementById('city_name')
    // const a="Udaipurwati"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${a.value}&appid=b13bf4fe9abb334161758c365a0ba45`
    const b= document.getElementById('output1')
    const c= document.getElementById('output2')
    const d= document.getElementById('temp')
    const e= document.getElementById('Wind_speed')
    const f= document.getElementById('sun_Rise')
    const g= document.getElementById('sun_Set')
     document.getElementById('middle').style.display="block"
    const result = await fetch(url)
    const data= await result.json()
//  console.log(data)
   
    b.textContent="Lon :" + data.coord.lon +" Lat :"+data.coord.lon
    c.textContent="Place:"+ data.name
    d.textContent="Temp In F :"+data.main.temp;
    e.textContent="Wind Speed :"+data.wind.speed;
    f.textContent="Sunrise :"+data.sys.sunrise;
    g.textContent="Sunset :"+data.sys.sunset;
}