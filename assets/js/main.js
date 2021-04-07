// ==== Show Menu ==========
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)


    // Validate the variable exits
    if(toggleId && nav){
        toggle.addEventListener('click',()=>{
            // We add the show-menu class to the div tag
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')