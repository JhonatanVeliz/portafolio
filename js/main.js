// obtener valores
const active = document.querySelector('#open');
const clouse = document.querySelector('#clouse');
const appear = document.querySelector('#appear');
const nav = document.querySelector('#nav');
const link_1 = document.querySelector('#link-1');
const link_2 = document.querySelector('#link-2');
const link_3 = document.querySelector('#link-3');

const links = [link_1, link_2, link_3];

const visibeld = () => {
    nav.style.right = '0';
    nav.style.transform = 'scale(1)'
    appear.style.left = '0';
    appear.style.transform = 'scale(1)'

    links.forEach((link)=> {
        link.addEventListener('click', invisibeld);
    });
};

const invisibeld = () => {
    nav.style.right = '-100%';
    nav.style.transform = 'scale(0)'
    appear.style.left = '-100%'
    appear.style.transform = 'scale(0)'
};

// Invocación de funciones

active.addEventListener('click', visibeld);
clouse.addEventListener('click', invisibeld);
appear.addEventListener('click', invisibeld);

// ********************************************************************************
// INTERSECTION OBSERVER JS 
// En esta parte hare la funcion de que cada seccion nueva vaya apareciendo según vaya entrando a la pantalla

const historyTitle = document.querySelector('#historyTit');
const historySub = document.querySelector('#historySub');
const historyText = document.querySelector('#historyText');
// *****************************************************************************************

const skillsTit  = document.querySelector('#skillsTit');
const skillsLayout = document.querySelector('#skillsLayout');

// ******************************************************************************************
const projects = document.querySelector('#projects'); 
// ******************************************************************************************
// DECLARANDO LA FUNCION

const charge = (open)=>{
    open.forEach((e)=>{
        if(e.isIntersecting){
            e.target.classList.add('scroll--active');
        }else{
            e.target.classList.remove('scroll--active');
        }
    })
};

const observer = new IntersectionObserver(charge, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .2
});

observer.observe(historyTitle);
observer.observe(historySub);
observer.observe(historyText);
observer.observe(skillsTit);
observer.observe(skillsLayout);
// observer.observe(projects);