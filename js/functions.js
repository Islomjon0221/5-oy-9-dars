function createTable(phone, index) {
    return `<tr>
    <td>${index}.</td>
    <td>${phone.name}</td>
    <td>${phone.price}</td>
    <td>${phone.description}</td>
    <td>${phone.status}</td>
    <td>${phone.category_id}</td>
    <td data-id = '${phone.id}'><i role="button" class="bi bi-trash text-danger"></i><i role="button" class="bi bi-pencil-square text-success mx-4"></i></td>
    </tr>`;
}

function createCard(phone) {
    return `<div class="card">
    <h3>${phone.name}</h3>
    <h3>${phone.price}$</h3>
    <p>${phone.description}</p>
    <button class="more-info" id="element_${phone.id}">Batafsil</button>
    </div>`
}

function createCardTwo(phone) {
    return `<div class="cards">
    <h3>Name: ${phone.name}</h3>
    <h3>Price: ${phone.price}$</h3>
    <h3>Description: ${phone.description}</h3>
    <h3>Generation-id: ${phone.category_id}</h3>
    
    <button id="btn">Orqaga qaytish</button>
    </div>`
}



export {createCard, createTable, createCardTwo}