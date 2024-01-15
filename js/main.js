import { createCard } from "./functions.js"
const wrapper = document.getElementById('wrapper')
const button = document.getElementById('admin')



document.addEventListener('DOMContentLoaded', function() {
    fetch('https://auth-rg69.onrender.com/api/products/all',{
        method:'GET'
    })
    .then(res => res.json())
    .then(data => {
        if(data.length) {
            data.forEach(phone => {
                 let card = createCard(phone);
                 wrapper.innerHTML += card;
            });
            console.log(data);

            let idButton = document.querySelectorAll('button.more-info')
            
            idButton.forEach(button => {
                button.addEventListener('click', function() {
                    let elementId = this.getAttribute('id').substring(8);
                    if(elementId) {
                        window.location.assign(`http://127.0.0.1:5500/pages/application.html?id=${elementId}`)
                    }
                })
            })
        }
    })
    .catch(err => {
        console.log(err);
    })  

})

button && button.addEventListener("click", function() {
    window.location.assign('http://127.0.0.1:5500/pages/admin.html')
})