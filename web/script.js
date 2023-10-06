
function affichage(users) {
    const userListElement = document.getElementById('userList');

    users.forEach(user => {
        const userItem = document.createElement('div'); 
        const userImage = document.createElement('img'); 
        userImage.src = user.picture.large; 

        const userInfo = document.createElement('p'); 
        userInfo.textContent = `Cell: ${user.cell}, First: ${user.name.first}, Last: ${user.name.last}`;

        
        userItem.appendChild(userImage);
        userItem.appendChild(userInfo);

        userListElement.appendChild(userItem);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(json => {
            const users = json.results;
            affichage(users);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
});


function test() {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(json => {
        const random = Math.floor(Math.random() * 100);
        const user = json.results[random];

        alert(`${user.cell}\n${user.name.title} ${user.name.first} ${user.name.last}`);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });
}


