function changeSlide() {

    var imagenes=[
        {
            "imgDsk":"./img/index/design-dsk.png",
            "imgMb":"./img/index/design-mb.png",
            "title":"Graphic design",
            "description": "Con una marcada trayectoria como diseñador gráfico, ofrezco una amplia y variada gama de soluciones."
        },
        {
            "imgDsk":"./img/index/branding-dsk.png",
            "imgMb":"./img/index/branding-mb.png",
            "title":"Branding",
            "description": "Varias marcas ya confiaron en mi para el desarrollo de sus marcas e identidades visuales, qué esperas?"
        },
        {
            "imgDsk":"./img/index/development-dsk.png",
            "imgMb":"./img/index/development-mb.png",
            "title":"Web development",
            "description": "Hace años desarrollo sitio con Wordpress y desde hace algunos menos que los realizo de cero en código."
        },
        {
            "imgDsk":"./img/index/digital-dsk.png",
            "imgMb":"./img/index/digital-mb.png",
            "title":"Digital",
            "description": "En reiteradas ocasiones y para diferentes clientes realicé campañas de email marketing, RRSS y apps."
        }

    ];

    var i = 0;
    var time = 5000;
    var deviceWidth = window.innerWidth;
    
    function changeData(){

        if (deviceWidth > 780){
            document.sliderIndexImg.src = imagenes[i].imgDsk;
            document.getElementById("sliderDescriptionTitle").innerHTML = imagenes[i].title;
            document.getElementById("sliderDescriptionText").innerHTML = imagenes[i].description;
        }else {
            document.sliderIndexImg.src = imagenes[i].imgMb;
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

