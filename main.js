let login = document.getElementById("login");
let search = document.getElementById("search");
let info = document.getElementById("info");
let end = document.getElementById('end')

search.addEventListener("click", searchUser);

async function searchUser() {
  const rest = await fetch(`https://api.github.com/users/${login.value}`);
  const obj = await rest.json();
  console.log(info)
  info.innerHTML = `
        <img src="${obj.avatar_url}" alt="logo">
        <h2>Логин: ${obj.login}</h2>
        <h2>Локация: ${obj.location}</h2>
        <h2>Дата создания: ${obj.created_at}</h2>
        <h2>Кол-во репозиториев: ${obj.public_repos}</h2>
        <h2>Кол-во подписчиков: ${obj.followers}</h2>`;
  console.log(obj);
}

search.addEventListener("click", theEnd)
end.addEventListener("click", start)

function theEnd() {
    login.classList.add('d-none')
    search.classList.add('d-none')
    info.classList.remove('d-none')
    end.classList.remove('d-none')
}

function start() {
    login.classList.remove('d-none')
    search.classList.remove('d-none')
    info.classList.add('d-none')
    end.classList.add('d-none')
}
