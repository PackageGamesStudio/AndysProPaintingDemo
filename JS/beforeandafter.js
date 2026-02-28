const container = document.querySelector('.beforeandaftercontainer');

if(container){
    document.querySelector('.slider').addEventListener('input', (e)=>{
        container.style.setProperty('--position', `${e.target.value}%`)
    })
}