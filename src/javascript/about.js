document.addEventListener('DOMContentLoaded', ()=>{

    const name = document.getElementById('name')
    console.log(name)
    const password = document.getElementById('password')
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')
    let send = document.getElementById('submit')
    
    send.addEventListener('click', () =>{
        if (name.value === "") {
           alert("name has no value") 
        }

        if (subject.value === "") {
            alert("subject has no value")
        }

        if (phone.value === "") {
            alert("phone has no value")
        }

        if (email.value === "") {
            alert("email has no value")
        }
    })
})

