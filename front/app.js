fetch("http://localhost:3000/").then((students) => {
    let body = document.querySelector("body")
    body.append(students)
})