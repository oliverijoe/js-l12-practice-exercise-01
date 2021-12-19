const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    //console.log(data);
    const userResults = data.results;
    //console.log(userResults);
    displayUsers(userResults);
};

getData();

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    for (let user of userResult) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
    const userDiv = document.createElement();
    userDiv.innerHTML = `
        <h3>${this.name}<h3><p>${this.country}</p><img src=${this.imageUrl} alt="User avatar" />
    `;
    randomFolks.append(userDiv);
    }
};