const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-navegacion');

/*console.log(menunav)
console.log(menu)*/


menu.addEventListener('click', ()=>{
    menunav.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menunav.classList.contains('spread')
        && e.target != menunav && e.target != menu ){
        
            menunav.classList.toggle("spread")
    }
})