let header= document.querySelector("header");

window.addEventListener("scroll", ()=>
    {
        header.classList.toggle("shadow", window.scrollY > 0)
    })


    const toggleBtn =document.querySelector('.lat');
    const toggleBtnIcon =document.querySelector('.lat i');
    const dropdown =document.querySelector('.dropdown-menu');


    toggleBtn.onclick = function()
    {
        dropdown.classList.toggle('open')
        const isOpen=dropdown.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }
