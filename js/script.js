var btnBanner = document.querySelector('input#btn-banner')
var btnAula = document.querySelector('input#btn-teste')
var btnGal = document.querySelector('input#btn-gal')
var btnImg1 = document.getElementsByClassName('btn-img')[0]
var btnImg2 = document.getElementsByClassName('btn-img')[1]
var btnImg3 = document.getElementsByClassName('btn-img')[2]

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
btnAula.addEventListener('mouseenter',function(){
    btnAula.style.backgroundColor = '#863524'
})
btnAula.addEventListener('mouseout',function(){
    btnAula.style.backgroundColor = '#f06244'
})
btnAula.addEventListener('click',function(){
    btnAula.style.backgroundColor = '#42180f'
})
/*Primeiro botão das imagens*/
btnImg1.addEventListener('mouseenter',function(){
    btnImg1.style.backgroundColor = '#863524'
})
btnImg1.addEventListener('mouseout',function(){
    btnImg1.style.backgroundColor = '#f06244'
})
btnImg1.addEventListener('click',function(){
    btnImg1.style.backgroundColor = '#42180f'
})
/*Segundo botão das imagens*/
btnImg2.addEventListener('mouseenter',function(){
    btnImg2.style.backgroundColor = '#863524'
})
btnImg2.addEventListener('mouseout',function(){
    btnImg2.style.backgroundColor = '#f06244'
})
btnImg2.addEventListener('click',function(){
    btnImg2.style.backgroundColor = '#42180f'
})
/*Segundo botão das imagens*/
btnImg3.addEventListener('mouseenter',function(){
    btnImg3.style.backgroundColor = '#863524'
})
btnImg3.addEventListener('mouseout',function(){
    btnImg3.style.backgroundColor = '#f06244'
})
btnImg3.addEventListener('click',function(){
    btnImg3.style.backgroundColor = '#42180f'
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
