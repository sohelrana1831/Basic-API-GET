const loadeUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(Response => Response.json())
        .then(users => dispalyUsers(users))
}

loadeUser();
const dispalyUsers = users => {
    console.log(users)
    const userId = document.getElementById('user-id');
    for (const user of users.results) {
        console.log()
        const p = document.createElement('p');
        p.innerText = `
        Name: ${user.name.title, user.name.first, user.name.last}
        Gender: ${user.gender}
        Email: ${user.email}
        `;
        userId.appendChild(p)
        
    }
}