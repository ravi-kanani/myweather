(this.webpackJsonplab9=this.webpackJsonplab9||[]).push([[0],{40:function(e,t,a){e.exports=a(69)},45:function(e,t,a){},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),c=(a(45),a(13)),i=a(11),s=(a(46),a(15)),h=a(16),m=a(22),u=a(17),p=a(23),d=a(71),b=a(72),E=a(73),w=a(74),f=a(38),g=a.n(f),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hasLocation:!1,weather:null,zoom:10,latlng:{lat:42.301063,lng:-83.020527}},a.mapRef=Object(n.createRef)(),a.handleClick=function(e){a.setState({hasLocation:!0,latlng:e.latlng}),g.a.get("https://api.openweathermap.org/data/2.5/weather?lat="+e.latlng.lat+"&lon="+e.latlng.lng+"&appid=0742b2f15e28ac07bd5c21cc892a584d&units=Metric").then((function(e){a.setState({weather:e.data})}))},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.hasLocation?l.a.createElement(d.a,{position:this.state.latlng},l.a.createElement(b.a,{permanent:!0},"It's"," ",l.a.createElement("b",null,this.state.weather?this.state.weather.name+", "+this.state.weather.sys.country:"")," ",l.a.createElement("br",null)," ",l.a.createElement("b",null,"Weather:")," ",this.state.weather?this.state.weather.weather[0].main:"",l.a.createElement("br",null)," ",l.a.createElement("b",null,"Temperature:")," ",this.state.weather?this.state.weather.main.temp+" Celsius":"",l.a.createElement("br",null)," ",l.a.createElement("b",null,"Temperature feels like:")," ",this.state.weather?this.state.weather.main.feels_like+" Celsius":"",l.a.createElement("br",null)," ",l.a.createElement("b",null,"Wind speed:")," ",this.state.weather?this.state.weather.wind.speed+" meter/sec":"",l.a.createElement("br",null),l.a.createElement("b",null,"Latitude")," ",this.state.latlng.lat,",",l.a.createElement("br",null)," ",l.a.createElement("b",null,"Longitude")," ",this.state.latlng.lng)):null;return l.a.createElement(E.a,{center:this.state.latlng,length:4,onClick:this.handleClick,onLocationfound:this.handleLocationFound,ref:this.mapRef,zoom:13},l.a.createElement(w.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e)}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container pt-2"},l.a.createElement("div",{className:"row pt-5"},l.a.createElement("div",{className:"col"}),l.a.createElement("div",{className:"card col-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",null,"Introduction"),l.a.createElement("p",{className:"text-left"},"MyWeather lets you know the weather of any location across the globe. It not only tells you the current weather (cloudy, humid, rain, etc.) and temperature, but also gives you the information about what the temperature feels like, what the windspeed is, the region you are looking at and its latitude and longitude. All it needs to fetch this information for you is a click on the map.",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h4",null,"About the APIs"),l.a.createElement("p",{className:"text-left"}," ","Application Programming Interface (API), allows the applications to communicate with each other. It is a kind of intermediate software. It allows the third party to use the functionality of a software application. Below are the 2 APIs we have used for this project:",l.a.createElement("br",null),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.openstreetmap.org/#map=3/71.34/-96.82"},"https://www.openstreetmap.org/#map=3/71.34/-96.82"),l.a.createElement("br",null),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://openweathermap.org/api"},"https://openweathermap.org/api")," ",l.a.createElement("br",null),"Using the map API, we fetch the latitude and longitude from the user\u2019s click action. The latitude-longitude pair is then used to fetch the weather information using the weather API and that is displayed as a tooltip."),l.a.createElement("br",null))),l.a.createElement("div",{className:"col"})))}}]),t}(l.a.Component);var k=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement(c.b,{className:"navbar-brand",to:"/"},"MyWeather"),l.a.createElement("div",{className:"",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(c.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/doc"},"Documentation"))))),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(v,null)),l.a.createElement(i.a,{path:"/doc"},l.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.dc95df9f.chunk.js.map