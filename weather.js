let main = document.getElementsByClassName(".weather-container")
let qContainer = document.querySelector(".weather-data")
let cityList = document.querySelector(".cityList")
const currentDate = new Date();

date = document.getElementsByClassName("date")


var APIKey = "e734f02834407c7708ddda37b1d497db"

const city = "udaipur"

var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=e734f02834407c7708ddda37b1d497db";
var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=e734f02834407c7708ddda37b1d497db";
var queryURL3 = "https://api.openweathermap.org/data/2.5/weather?q=Indore&appid=e734f02834407c7708ddda37b1d497db";
var queryURL4 = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=e734f02834407c7708ddda37b1d497db";
 


let weatherMumbai = []
let weatherPune = []
let weatherIndore = []
let weatherDelhi = []

async function fetchData() {
    const response1 = await fetch(queryURL1)
    const data1 = await response1.json();
    weatherMumbai = data1;
    //  console.log(weatherMumbai);

    const response2 = await fetch(queryURL2)
    const data2 = await response2.json();
    weatherPune = data2;
    //  console.log(weatherPune);

    const response3 = await fetch(queryURL3)
    const data3 = await response3.json();
    weatherIndore = data3;
     console.log(weatherIndore);

    const response4 = await fetch(queryURL4)
    const data4 = await response4.json();
    weatherDelhi = data4;
    //  console.log(weatherDelhi);

    //  qContainer.innerHTML=`<div class="date">${currentDate}</div>`
    cityList.innerHTML = `<li> <input id="radio"  type="radio" name="city" value="${weatherDelhi.name}">${weatherDelhi.name}</li>
    <li> <input id="radio"  type="radio" name="city" value="${weatherMumbai.name}">${weatherMumbai.name}</li>
    <li> <input id="radio"  type="radio" name="city" value="${weatherPune.name}">${weatherPune.name}</li>
    <li> <input id="radio"  type="radio" name="city" value="${weatherIndore.name}">${weatherIndore.name}</li>`
 
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", selectCity);
    });

    
}

function selectCity() {
    let selectedCity;

    // let x = document.getElementById("radio").checked;

    var ele = document.getElementsByTagName('input');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].type = "radio") {

            if (ele[i].checked) {
                selectedCity = ele[i].value.toLowerCase()
            }
        }
    }

    console.log("city"+selectedCity);

    switch (selectedCity) {
        case "delhi":
            
            const tempD = Math.round((weatherDelhi.main.temp -273.15));  
            const minTempD=   Math.round((weatherDelhi.main.temp_min -273.15));  
            const maxTempD =   Math.round((weatherDelhi.main.temp_max -273.15));  
            const feelsLikeD=  Math.round((weatherDelhi.main.feels_like -273.15));  
              
             let backgroundColorD="#97c5f7";

            if(tempD>26){
                 backgroundColorD ="orange"
            }

           


            qContainer.innerHTML = `
            <h1>${weatherDelhi.name}</h1>
            <h5>${currentDate}</h5>
            <table>
                 <tr>
                     <td class="part1">
                     
                      <h4 style="background-color:${backgroundColorD}">Temperature ${tempD}&deg;C</h4>
                      <h4>${weatherDelhi.weather[0].description} </h4>
                      <h4>Wind  ${weatherDelhi.wind.speed}</h4>
                      <h4>Forecast : ${maxTempD}/${minTempD} &deg;C </h4>
                      <h4>Feels Like : ${feelsLikeD}  &deg;C </h4>
                     </td>
                     <td class="part1">
                         <img src="https://openweathermap.org/img/wn/${weatherDelhi.weather[0].icon}@4x.png";>
                     </td>

                     <td>
                         <ul class="part3">
                             <li>Location: ${weatherDelhi.name}</li>
                             <li>Visibility: ${weatherDelhi.visibility}</li>
                             <li>Sea-level: ${weatherDelhi.main.sea_level}</li>
                             <li>Latest Report: ${currentDate.toDateString()}</li>
                             <li>Pressure: ${weatherDelhi.main.pressure}</li>
                             <li>Humidity: ${weatherDelhi.main.humidity}%</li>
                           
                         </ul>
                     </td>
                 </tr>
                 <tr><td>
                     
                   </td>
                 </tr>
            </table>`
            
        break;
        case "mumbai":
            const tempM = Math.round((weatherMumbai.main.temp -273.15));  
            const minTempM=   Math.round((weatherMumbai.main.temp_min -273.15));  
            const maxTempM =   Math.round((weatherMumbai.main.temp_max -273.15));  
            const feelsLikeM=  Math.round((weatherMumbai.main.feels_like -273.15));  
              
             let backgroundColorM="#97c5f7";
            
            if(tempM>26){
                 backgroundColorM ="orange"
            }
            
            
            
            
            qContainer.innerHTML = `
            <h1>${weatherMumbai.name}</h1>
            <h5>${currentDate}</h5>
            <table>
                 <tr>
                     <td class="part1">
                     
                      <h4 style="background-color:${backgroundColorM}">Temperature ${tempM}&deg;C</h4>
                      <h4>${weatherMumbai.weather[0].description} </h4>
                      <h4>Wind  ${weatherMumbai.wind.speed}</h4>
                      <h4>Forecast : ${maxTempM}/${minTempM} &deg;C </h4>
                      <h4>Feels Like : ${feelsLikeM}  &deg;C </h4>
                     </td>
                     <td class="part1">
                         <img src="https://openweathermap.org/img/wn/${weatherMumbai.weather[0].icon}@4x.png";>
                     </td>
            
                     <td>
                         <ul class="part3">
                             <li>Location: ${weatherMumbai.name}</li>
                             <li>Visibility: ${weatherMumbai.visibility}</li>
                             <li>sea-level: ${weatherMumbai.main.sea_level}</li>
                             <li>Latest Report: ${currentDate.toDateString()}</li>
                             <li>Pressure: ${weatherMumbai.main.pressure}</li>
                             <li>Humidity: ${weatherMumbai.main.humidity}%</li>
                           
                         </ul>
                     </td>
                 </tr>
                 <tr><td>
                     
                   </td>
                 </tr>
            </table>`
            
        break;
        case "pune":
            const tempP = Math.round((weatherPune.main.temp -273.15));  
            const minTempP=   Math.round((weatherPune.main.temp_min -273.15));  
            const maxTempP =   Math.round((weatherPune.main.temp_max -273.15));  
            const feelsLikeP=  Math.round((weatherPune.main.feels_like -273.15));  
            
            let backgroundColorP="#97c5f7";

            if(tempP>26){
                backgroundColorP ="orange"
            }




            qContainer.innerHTML = `
            <h1>${weatherPune.name}</h1>
            <h5>${currentDate}</h5>
            <table>
                <tr>
                    <td class="part1">
                    
                    <h4 style="background-color:${backgroundColorP}">Temperature ${tempP}&deg;C</h4>
                    <h4>${weatherPune.weather[0].description} </h4>
                    <h4>Wind  ${weatherPune.wind.speed}</h4>
                    <h4>Forecast : ${maxTempP}/${minTempP} &deg;C </h4>
                    <h4>Feels Like : ${feelsLikeP}  &deg;C </h4>
                    </td>
                    <td class="part1">
                        <img src="https://openweathermap.org/img/wn/${weatherPune.weather[0].icon}@4x.png";>
                    </td>

                    <td>
                        <ul class="part3">
                            <li>Location: ${weatherPune.name}</li>
                            <li>Visibility: ${weatherPune.visibility}</li>
                            <li>sea-level: ${weatherPune.main.sea_level}</li>
                            <li>Latest Report: ${currentDate.toDateString()}</li>
                            <li>Pressure: ${weatherPune.main.pressure}</li>
                            <li>Humidity: ${weatherPune.main.humidity}%</li>
                        
                        </ul>
                    </td>
                </tr>
                <tr><td>
                    
                </td>
                </tr>
            </table>`

        break;
        case "indore":
            const tempI = Math.round((weatherIndore.main.temp -273.15));  
            const minTempI=   Math.round((weatherIndore.main.temp_min -273.15));  
            const maxTempI =   Math.round((weatherIndore.main.temp_max -273.15));  
            const feelsLikeI=  Math.round((weatherIndore.main.feels_like -273.15));  
              
             let backgroundColorI="#97c5f7";
            
            if(tempI>26){
                 backgroundColorI ="orange"
            }
            
            
            
            
            qContainer.innerHTML = `
            <h1>${weatherIndore.name}</h1>
            <h5>${currentDate}</h5>
            <table>
                 <tr>
                     <td class="part1">
                     
                      <h4 style="background-color:${backgroundColorI}">Temperature ${tempI}&deg;C</h4>
                      <h4>${weatherIndore.weather[0].description} </h4>
                      <h4>Wind  ${weatherIndore.wind.speed}</h4>
                      <h4>Forecast : ${maxTempI}/${minTempI} &deg;C </h4>
                      <h4>Feels Like : ${feelsLikeI}  &deg;C </h4>
                     </td>
                     <td class="part1">
                         <img src="https://openweathermap.org/img/wn/${weatherIndore.weather[0].icon}@4x.png";>
                     </td>
            
                     <td>
                         <ul class="part3">
                             <li>Location: ${weatherIndore.name}</li>
                             <li>Visibility: ${weatherIndore.visibility}</li>
                             <li>sea-level: ${weatherIndore.main.sea_level}</li>
                             <li>Latest Report: ${currentDate.toDateString()}</li>
                             <li>Pressure: ${weatherIndore.main.pressure}</li>
                             <li>Humidity: ${weatherIndore.main.humidity}%</li>
                           
                         </ul>
                     </td>
                 </tr>
                 <tr><td>
                     
                   </td>
                 </tr>
            </table>`
            
        break;

        default:

        console.log("kkj");
        break;
    }

}



    // const len = data.length;

    // const randomNo = Math.floor(Math.random()*len)

    // console.log(data.name);

    // const temp = Math.round((data.main.temp -273.15));   // main presssure

    // const wind = data.wind      //speed ,gust, deg

    // console.log(wind.speed);


    // if(temp<22){
    //     qContainer.innerHTML = `   <ul>
    //     <li>Name : ${data.name}</li>
    //     <li style="background-color: gray">Temperature :${temp} celsius</li>
    //     <li>Wind Speed :${wind.speed}</li>
    // </ul>`
    
    // }
    // else if (temp>22 && temp<40 )
    // {
    //     qContainer.innerHTML = `  
        
    //     <ul>
    //     <li> Cordinates are : Lon :${data.coord.lon} Lat :${data.coord.lat}
    //     <li>Name : ${data.name}</li>
    //     <li style="background-color: orange">Temperature :${temp} celsius</li>
    //     <li>Wind Speed :${wind.speed}</li>
    // </ul>`
    // }




