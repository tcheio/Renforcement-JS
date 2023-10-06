function test() {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        const random = Math.floor(Math.random() * 100);

        const user = json.results[random];

        alert(user.cell + "\n" +
            user.name.title + " " + user.name.first + " " + user.name.last + "\n"
        );
    })
}
