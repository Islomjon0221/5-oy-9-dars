import { createCardTwo } from "./functions.js";
let wrapper = document.getElementById('wrapper');

document.addEventListener('DOMContentLoaded', function() {
    let elementId = window.location.href.substring(window.location.href.search('id=') +  3);
    if(elementId && elementId.length == 36) {
        fetch(`https://auth-rg69.onrender.com/api/products/${elementId}`)
        .then(res => res.json())
        .then(data => {
            let element = createCardTwo(data);
            wrapper.innerHTML = element
            let button = document.getElementById('btn');
            button && button.addEventListener('click', function() {
                window.location.assign('http://127.0.0.1:5500/index.html')
            })
        })
        .catch(err => {
            console.log(err);
        })
    } else {
        window.location.assign('http://127.0.0.1:5500/index.html')
    }
});

