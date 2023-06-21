// (
//     ()=>{

//     }
// )();

const listadoDeCarousels = document.querySelectorAll('.project__list');

let taimer = 1;
listadoDeCarousels.forEach((carousel)=>{

    if(window.screen.width <= 750){
        new Glider(carousel,{
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: false,
            arrows: {
                prev: `#btn--left-${taimer}`,
                next: `#btn--right-${taimer}`,
            },
        })
    }else{
        new Glider(carousel,{
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            dots: false,
            arrows: {
                prev: `#btn--left-${taimer}`,
                next: `#btn--right-${taimer}`,
            },
        })
    };
    taimer++;
});