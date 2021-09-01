let button = document.getElementById('bttn')

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: `Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="https://github.com/ivancda">Ivan Coelho</a>. | ` + 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

button.addEventListener('click', function(){
  let locAll = {}

  //DOM
  let inpt = document.getElementById('inpt').value
  let adres = document.getElementById('address')
  let locat = document.getElementById('location')
  let timez = document.getElementById('timezone')
  let isp = document.getElementById('isp')
  //DOM END
  
  const fetchIP = () => {
    const url = `https://geo.ipify.org/api/v1?apiKey=at_WkjMR2MQLlRvQW4YNrpMpEjaohOoL&ipAddress=${inpt}&domain=${inpt}`

    fetch(url)
      .then(response => response.json())
      .then(loc => {
        locAll = loc
        adres.innerText = locAll.ip
        locat.innerText = `${locAll.location.city}, ${locAll.location.region}, ${locAll.location.country}`
        timez.innerText = locAll.location.timezone      
        isp.innerText = locAll.isp
        let latLangV = L.latLng(locAll.location.lat, locAll.location.lng)
        mymap.setView(latLangV, 14)
      })
  }

  fetchIP()
})