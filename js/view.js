const certificateNormal = [
    {data: './files/c-html-css.pdf'},
    {data: './files/fundamentos.pdf'},
    {data: './files/c-git.pdf'},
    {data: './files/c-productividad.pdf'},
];

const btnCertifyNormal = document.querySelectorAll('.certify-normal');

btnCertifyNormal.forEach((boton, index)=>{
    boton.addEventListener('click', ()=>{
        window.open('./view.html?certificateNormal=' + encodeURIComponent(certificateNormal[index].data), '_blank');
    });
});