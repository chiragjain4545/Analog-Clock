setInterval(() => {
    time=new Date();
    hour1=time.getHours();
    minutes=time.getMinutes();
    seconds=time.getSeconds();

    hrotation=30*hour1+minutes/2;
    mrotation=6*minutes;
    srotation=6*seconds;

    hour.style.transform= `rotate(${hrotation}deg)`;
    min.style.transform= `rotate(${mrotation}deg)`;
    sec.style.transform= `rotate(${srotation}deg)`;
}, 1000);