const certificateNormal = [
    {data: './files/c-html-css.pdf'},
    {data: './files/fundamentos.pdf'},
    {data: './files/c-git.pdf'},
    {data: './files/c-productividad.pdf'},
];

const certificateFormal = [
    {data: './files/cf-html-css.pdf'},
    {data: './files/cf-git.pdf'},
    {data: './files/cf-productividad.pdf'},
]

const btnCertifyNormal = document.querySelectorAll('.certify-normal');
const btnCertifyFormal = document.querySelectorAll('.certify-formal');

btnCertifyNormal.forEach((boton, index)=>{
    boton.addEventListener('click', ()=>{
        window.open('./view.html?certificate=' + encodeURIComponent(certificateNormal[index].data), '_blank');
    });
});

btnCertifyFormal.forEach((boton, index)=>{
    boton.addEventListener('click', ()=>{
        window.open('./view.html?certificate=' + encodeURIComponent(certificateFormal[index].data), '_blank');
    });
});