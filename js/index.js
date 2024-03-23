const slider = document.querySelector(".carrusel");
let sliderSection = document.querySelectorAll(".slider-seccion");
let sliderSectionLast = sliderSection[sliderSection.length-1];

let dots = document.querySelectorAll('.dot');

let active =0;

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast)/*Obtengo el ultimo elemento ylo ubico en el slider */

function moveRight(){
    let sliderSectionFirst =document.querySelectorAll(".slider-seccion")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition= "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft="-100%";
    },500)

    if(active==sliderSection.length-1){
        active=0;
        dots[active].className = 'dot active';
        dots[sliderSection.length-1].className = 'dot';
    }else{
        active++;
        dots[active].className = 'dot active';
        dots[active-1].className ='dot';
    }
}

function moveLeft(){
    let sliderSection = document.querySelectorAll(".slider-seccion");
    let sliderSectionLast =sliderSection[sliderSection.length-1];
    slider.style.marginLeft="0";
    slider.style.transition= "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft="-100%";
    },500)

    if(active<=0){
        active = sliderSection.length-1;
        dots[active].className = 'dot active';
        dots[0].className = 'dot';
    }else{
        active--;
        dots[active].className = 'dot active';
        dots[active+1].className ='dot';

    }
    console.log(active);
    
}


btnRight.addEventListener('click', function(){
    moveRight();
})

btnLeft.addEventListener('click', function(){
    moveLeft();
})

/*setInterval(function(){
    moveRight();
},5000);*/

/*Metodo de pago */
const carrouselCointener = document.getElementById('carrousel-pagos');
const metP = document.querySelector('.metodo');

const flechaIzquierda = document.getElementById('flechaIzq');
const flechaDerecha = document.getElementById('flechaDer');

flechaDerecha.addEventListener("click", () => {
  const slideWidth = metP.clientWidth;
  carrouselCointener.scrollLeft += slideWidth;
  console.log("derecha");
});

flechaIzquierda.addEventListener("click", () => {
  const slideWidth = metP.clientWidth;
  carrouselCointener.scrollLeft -= slideWidth;
});