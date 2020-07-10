var startPos;

var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
};
var geoError = function(error) {
    switch(error.code) {
        case error.TIMEOUT:
            break;
    }
};

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
