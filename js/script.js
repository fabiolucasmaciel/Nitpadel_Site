var btnBanner = document.querySelector('input#btn-banner')
var btnCurios = document.querySelector('input#btn-curios')
var btnGal = document.querySelector('input#btn-gal')

/*Botão do banner grande*/
btnBanner.addEventListener('mouseenter',function(){
    btnBanner.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
})
btnBanner.addEventListener('mouseout',function(){
    btnBanner.style.backgroundColor = 'rgba(0, 0, 0, 0)'
})
btnBanner.addEventListener('click',function(){
    btnBanner.style.backgroundColor = '#1b1b1b'
})
/*Botão do banner pequeno, aula teste*/
btnCurios.addEventListener('mouseenter',function(){
    btnCurios.style.backgroundColor = '#863524'
})
btnCurios.addEventListener('mouseout',function(){
    btnCurios.style.backgroundColor = '#f06244'
})
btnCurios.addEventListener('click',function(){
    btnCurios.style.backgroundColor = '#42180f'
})
/*Botão da gelria*/
btnGal.addEventListener('mouseenter',function(){
    btnGal.style.backgroundColor = '#863524'
})
btnGal.addEventListener('mouseout',function(){
    btnGal.style.backgroundColor = '#f06244'
})
btnGal.addEventListener('click',function(){
    btnGal.style.backgroundColor = '#42180f'
})
