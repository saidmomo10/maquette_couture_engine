const menu = document.querySelectorAll(".choose__menu button")

if(menu){
    console.log(menu)
    menu.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault()
            menu.forEach(m => m.classList.remove('active'))
            item.classList.add('active') 
            
        })
    })
}

const arrival = document.querySelectorAll(".arrival_menu a")

if(arrival){
    console.log(arrival)
    arrival.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault()
            arrival.forEach(m => m.classList.remove('active'))
            item.classList.add('active') 
            
        })
    })
}



const btnMenu = document.querySelector('a.btn-menu')
if(btnMenu){
    btnMenu.addEventListener('click', e=>{
        e.preventDefault()
        const headerMenu = document.querySelector('ul.header__menu')
        if(btnMenu.classList.contains('active')){
            btnMenu.classList.remove('active')
        }else{
            btnMenu.classList.add('active')
        }
        if(headerMenu.classList.contains('active')){
            headerMenu.classList.remove('active')
        }else{
            headerMenu.classList.add('active')
        }
    })
}