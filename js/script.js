var btnBanner = document.querySelector('input#btn-banner')
var btnCurios = document.querySelector('input#btn-curios')
var btnGal = document.querySelector('input#btn-gal')
var btnAzulAula = document.querySelector('input.btn-azul')
var btnLaranTorn = document.querySelector('input.btn-laranja')

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
/*Botão do banner pequeno, curiosidades*/
btnCurios.addEventListener('mouseenter',function(){
    btnCurios.style.backgroundColor = '#863524'
})
btnCurios.addEventListener('mouseout',function(){
    btnCurios.style.backgroundColor = '#f06244'
})
btnCurios.addEventListener('click',function(){
    btnCurios.style.backgroundColor = '#42180f'
})
/*Botão laranja, aula teste*/
btnLaranTorn.addEventListener('mouseenter',function(){
    btnLaranTorn.style.backgroundColor = '#863524'
})
btnLaranTorn.addEventListener('mouseout',function(){
    btnLaranTorn.style.backgroundColor = '#f06244'
})
btnLaranTorn.addEventListener('click',function(){
    btnLaranTorn.style.backgroundColor = '#42180f'
})
/*Botão azul, torneio*/
btnAzulAula.addEventListener('mouseenter',function(){
    btnAzulAula.style.backgroundColor = '#0f1c31'
})
btnAzulAula.addEventListener('mouseout',function(){
    btnAzulAula.style.backgroundColor = '#16294a'
})
btnAzulAula.addEventListener('click',function(){
    btnAzulAula.style.backgroundColor = '#080f1a'
})
/*Botão da geleria*/
btnGal.addEventListener('mouseenter',function(){
    btnGal.style.backgroundColor = '#863524'
})
btnGal.addEventListener('mouseout',function(){
    btnGal.style.backgroundColor = '#f06244'
})
btnGal.addEventListener('click',function(){
    btnGal.style.backgroundColor = '#42180f'
})
