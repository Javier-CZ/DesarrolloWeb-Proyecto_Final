function changeSlide() {

    var imagenes=[
        {
            "imgDsk":"./img/slider-index/slide-1.jpg",
            "imgMb":"./img/slider-index/slide-3.jpg",
            "title":"Titulo 1",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquam et aspernatur quasi enim ratione."
        },
        {
            "imgDsk":"./img/slider-index/slide-2.jpg",
            "imgMb":"./img/slider-index/slide-4.jpg",
            "title":"Titulo 2",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nam perspiciatis odio, fugit vel sequi. Dicta quisquam ducimus ut animi?"
        },
        {
            "imgDsk":"./img/slider-index/slide-1.jpg",
            "imgMb":"./img/slider-index/slide-3.jpg",
            "title":"Titulo 3",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, repellendus. Expedita, veritatis."
        },
        {
            "imgDsk":"./img/slider-index/slide-2.jpg",
            "imgMb":"./img/slider-index/slide-4.jpg",
            "title":"Titulo 4",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fuga, quis dicta qui nam saepe maxime tempore vero dolores hic, repudiandae impedit ut doloremque ipsam."
        }

    ];

    // console.log(imagenes)

    var i = 0;
    var time = 5000;
    var deviceWidth = window.innerWidth;
    
    function changeData(){

        if (deviceWidth > 780){
            document.sliderIndexImg.src = imagenes[i].imgMb;
            document.getElementById("sliderDescriptionTitle").innerHTML = imagenes[i].title;
            document.getElementById("sliderDescriptionText").innerHTML = imagenes[i].description;
        }else {
            document.sliderIndexImg.src = imagenes[i].imgDsk;
            document.getElementById("sliderDescriptionTitle").innerHTML = imagenes[i].title;
            document.getElementById("sliderDescriptionText").innerHTML = imagenes[i].description;
        }
        

        if ( i < 3 ) {
            i++;
        } else {
            i = 0;
        }
    }

    changeData();
    setInterval(changeData, time);
}

