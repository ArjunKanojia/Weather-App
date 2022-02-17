let weather = {
      
    apiKey: "eada0527d1645f7b126ecdb3fefe7053",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
          )
           .then((response)=> response.json()) 
           .then((data)=> this.displayweather(data))
           ;
      },
      displayweather : function(data){
          const{ name } = data;
          const{ icon,description } = data.weather[0];
          const { temp , temp_min ,temp_max } = data.main ;
          console.log(name,icon,description,temp)
          document.querySelector(".city").innerHTML = name
          let today = new Date()
          document.querySelector(".date").innerHTML = `${today.getDate()} /${today.getMonth()}/${today.getFullYear()} `
          document.querySelector(".min-max").innerHTML = temp_min + "(min)&deg;c /" + temp_max +"(max)&deg;c"      
          document.querySelector(".weatherdes").innerHTML = description  
          document.querySelector('.temp').innerHTML = temp 
      },
      search: function()
      {
        this.fetchWeather(document.querySelector('.inputbox').value)
      }
    };
    document.querySelector('.searchinputbox').addEventListener('keypress',function(){
        weather.search();

    })

    
    