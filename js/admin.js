import { createTable } from "./functions.js";
const tbody = document.getElementById("tbody");
const mainButton = document.getElementById("main");
const name = document.getElementById("name");
const price = document.getElementById("price");
const category = document.getElementById("category");
const description = document.getElementById("description");
const button = document.getElementById("btn");
const form = document.getElementById("form")

let backList = 0;

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://auth-rg69.onrender.com/api/products/all", {
        method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.length) {
            backList = data.length;
            data.forEach((phone, index) => {
                let tr = createTable(phone, index + 1);
                tbody.innerHTML += tr
            });

            const deleteIcon = document.querySelectorAll('td i.bi-trash');
            deleteIcon.forEach(del => {
                del.addEventListener('click', function() {
                    let isDel = confirm("Rostan ham o'chirmoqchimisiz?")
                    if(isDel) {
                        let delEl = this.parentNode.getAttribute('data-id')
                        if(delEl) {
                            fetch(`https://auth-rg69.onrender.com/api/products/${delEl}`, {
                            method: "DELETE"
                        })
                        .then(res => res.json())
                        .then(data => {
                            if(data.message) {
                                window.location.reload();
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                        }
                        
                    }
                })
            })

            const updButton = document.querySelectorAll('td i.bi-pencil-square');
            updButton.length && updButton.forEach(upd => {
                upd.addEventListener('click', function() {
                    let updId = this.parentNode.getAttribute('data-id');
                    if(upd) {
                        window.location.assign(`http://127.0.0.1:5500/pages/update.html?id=${updId}`)
                
                    }
                    })
            })
        }
    })
    .catch((err) => {
        console.log(err);
    });
});
mainButton &&
mainButton.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/index.html");
});

function validate() {
    if(!name.value) {
        alert("Nomi kiritilishi shart")
        name.focus();
        return false
    }

    if(!price.value) {
        alert("Summa kiritilishi shart")
        price.focus();
        return false
    }

    if(!category.value) {
        alert("Katigoriya kiritilishi shart")
        category.focus();
        return false
    }

    if(price.value <= 0) {
        alert("Summa 0 dan kichik bo'maydi")
        price.focus();
        return false
    }

    if(!Number(price.value)) {
        alert("Summa raqamda kiritilishi shart")
        price.focus();
        return false
    }
    

    return true
}


button && button.addEventListener('click', function(e) {
    e.preventDefault();
    if(validate()) {
        let phone = {
            name: name.value,
            price: price.value,
            description: description.value,
            status: 'active',
            category_id: category.value
        }

        fetch('https://auth-rg69.onrender.com/api/products', {
            method:"POST",
            body: JSON.stringify(phone),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.id) {
                let ok = createTable(data,backList);
                backList++;
                tbody.innerHTML += ok;
            }
            form.reset()
        })
        .catch(err => {
            console.log(err);
        })
    }

})