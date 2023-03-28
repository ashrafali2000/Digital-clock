setInterval(function(){
    var date = new Date();
    var hour = date.getHours();
    var minut = date.getMinutes();
    var second = date.getSeconds();
    var am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    document.getElementById("hour").innerText = hour;
    document.getElementById("minut").innerText = minut;
    document.getElementById("second").innerText= second;
    document.getElementById("am-pm").innerText = am_pm;
    }, 1000);