// Forma de hacer una petición AJAX, consumir una API con JavaScript Vanilla.

const API_URL = 'https://jsonplaceholder.typicode.com'

const HTMLResponse = document.querySelector('#app')
const tpl = document.createDocumentFragment('tpl')


fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            let elem = document.createElement('li')
            elem.appendChild(
                document.createTextNode(
                    `${user.name} (${user.username}) ✉️ ${user.email} 🌐 ${user.address.city} 📞 ${user.phone}`)
            )
            tpl.appendChild(elem)
        })

    HTMLResponse.appendChild(tpl)
    console.log(users);

    // Forma de consumir una API usando Strings para formatear el HTML.
    // const tpl = users.map((user) => `<li>${user.name} ✉️ ${user.email}</li>`)
    // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    // console.log(response)
})


// Como se hacía antes del ECMA 6
//const xhr = new XMLHttpRequest()

// function onRequestHandler() {
//     if (this.readyState === 4 && this.status === 200) {
//         // 0 = Unset, no se ha llamado al método Open.
//         // 1 = Opened, se ha llamado al método Open.
//         // 2 = Headers_received, se está llamando al método Send.
//         // 3 = Loading, se está cargando, es decir, está recibiendo la respuesta.
//         // 4 = Done, se ha completado la operación.
//         const data = JSON.parse(this.response)
//         const HTMLResponse = document.querySelector("#app")

//         const tpl = data.map(user => `<li>${user.name} ✉️ ${user.email}</li>`)
//         HTMLResponse.innerHTML= `<ul>${tpl}</ul>`

//     }
// }

// xhr.addEventListener('load', onRequestHandler)
// xhr.open("GET", `${API_URL}/users`)
// xhr.send()