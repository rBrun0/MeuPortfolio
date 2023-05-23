function menuShow(){
   
    let navMenu = document.getElementById('navMenu')

    navMenu.classList.toggle("hide")

  
}



const form = document.getElementById('form');

form.addEventListener("submit", (event) =>{
    event.preventDefault.preventDefault;

    const email = document.getElementById('email');
    const name = document.getElementById('name');

    if(name.value === ""){
        alert('Por favor, preencha o nome!')
    }

    if(email.value === "" || !isEmailValid(email.value)){
        alert('email vazio ou incompleto!')
    }


    form.submit()
})


function isEmailValid(email){
    const emailRegex = RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true;
    }

    else {
        return false
    }
}





//scroll



const menuItems = document.querySelectorAll('.cabecalho a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener("click", scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault()
    const element = event.target;

    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 100,
        behavior: "smooth"
    });

}
