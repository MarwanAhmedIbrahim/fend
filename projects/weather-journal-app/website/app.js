/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=f11ba4e0af9967b387b4430f62c0124d';
const unit ='&units=metric';

document.getElementById('generate').addEventListener('click', performAction);
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'/'+ d.getDate()+'/'+ d.getFullYear();

// GET ROUTE
function performAction(event) {
    const newZip = document.getElementById('zip').value;
    const userRes = document.getElementById('feelings').value;
    getData(baseURL, newZip, unit, apiKey)
    .then(function(data) {
        // console.log(data);
        postData('/addWeatherData', {temp: data.temp, date: newDate, feelings: userRes});
        
        showData()
    })
}
const getData = async (baseURL, zip, unit, key)=>{
    const res = await fetch(baseURL+zip+unit+key);
    try{
        const data = await res.json();
        console.log(data);
        return data.main;
    }catch(error){
        console.log("error", error);
        window.alert(error);
    }
}

// POST ROUTE
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

// Update UI
const showData = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = 'Date: ' + allData.date;
        document.getElementById('temp').innerHTML = 'Temp: ' + allData.temp + '&#8451;';
        document.getElementById('content').innerHTML = 'Feels Like: ' + allData.feelings;
    } catch (error) {
        console.log("error", error);
    }
}

