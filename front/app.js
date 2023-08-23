fetch("http://localhost:3001/").then((students) => {
    let body = document.querySelector("body")
    students.json().then((data) => {
        data.rows.forEach(stu => {
            body.innerHTML += stu.student_name + "<br>"
        });
    })
})