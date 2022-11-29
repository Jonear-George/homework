const objPeople = [
    {
        user: "admin",
        password: "admin"
    },
    {
        user: "user",
        password: "user"


    }
]

function getinfo() {
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value


    for (i = 0; i < objPeople.length; i++) {
        if (name == objPeople[i].user && password == objPeople[i].password) {
            if (name == "admin" && password == "admin") {
                window.open('admin.html')
                return false
            }

            else if (name == "user" && password == "user") {
                window.open('user.html')
                return false
            }

        }
    }

    alert("Failed please try again")


}