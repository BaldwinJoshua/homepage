// Months of the year for getTime()
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Search on enter key event
// function search(e) {
//   if (e.keyCode == 13) {
//     var val = document.getElementById("search-field").value;
//     window.open("https://duckduckgo.com/?q=" + val);
//     // window.open("https://google.com/search?q=" + val);
//   }
// }
// Get current time and format
function getTime(boolmonthday, boolsec) {
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours(),
        month = monthNames[date.getMonth()],
        day = date.getDate(),
        strout = "",
        nth = "";

    if (boolmonthday) {
        strout += month + " " + day;
        // switch (day) {
        //     case 1:
        //     case 21:
        //     case 31:
        //         nth = "st";
        //         break;
        //     case 2:
        //     case 22:
        //         nth = "nd";
        //         break;
        //     case 3:
        //     case 23:
        //         nth = "rd";
        //         break;
        //     default:
        //         nth = "th";
        //         break;
        // }

        // strout += nth;

    }

    strout += " "
    strout += (hour < 10 ? ("0" + hour) : hour) + ":" +
        (min < 10 ? ("0" + min) : min);

    if (boolsec) {
        strout += +":" +
            (sec < 10 ? ("0" + sec) : sec);
    }

    return strout;
}

window.onload = () => {
    let xhr = new XMLHttpRequest();
    // Request to open weather map
    xhr.open('GET',
        'http://api.openweathermap.org/data/2.5/weather?zip=83642,us&units=imperial&appid=e5b292ae2f9dae5f29e11499c2d82ece'
    );
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.responseText);
                console.log(json);
                document.getElementById("temp").innerHTML = json.main.temp.toFixed(0) + "°";
                document.getElementById("weather-description").innerHTML = json.weather[0].description;
            } else {
                console.log('error msg: ' + xhr.status);
            }
        }
    }
    xhr.send();
    // Set up the clock
    document.getElementById("clock").innerHTML = getTime(true, false);
    // Set clock interval to tick clock
    setInterval(() => {
        document.getElementById("clock").innerHTML = getTime(true, false);
    }, 100);
}

// document.addEventListener("keydown", event => {
//   if (event.keyCode == 32) { // Spacebar code to open search
//     document.getElementById('search').style.display = 'flex';
//     document.getElementById('search-field').focus();
//   } else if (event.keyCode == 27) { // Esc to close search
//     document.getElementById('search-field').value = '';
//     document.getElementById('search-field').blur();
//     document.getElementById('search').style.display = 'none';
//   }
// })
;