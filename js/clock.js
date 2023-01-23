let userName = prompt("Adınızı Yazınız")
    if(userName != null){
        document.querySelector("#myName").innerHTML +=userName;
    }
currentTime = () =>{
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
     let text;
    if(date.getDay()==1){
        text="Pazartesi";
    }else if(date.getDay()==2){
        text="Salı";
    }else if(date.getDay()==3){
        text="Çarşamba" 
    }else if(date.getDay()==4){
        text="Perşembe" ;
    }else if(date.getDay()==5){
        text="Cuma";
    }else if(date.getDay()==6){
        text="Cumartesi";
    }else {
        text="Pazar";
    }
    document.querySelector("#myClock>#clock").innerHTML = `${time} ${text}`; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
currentTime();

  