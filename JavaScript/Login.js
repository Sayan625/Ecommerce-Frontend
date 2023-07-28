// reference of input form
const form = document.getElementById('loginForm');
//reference of password visibility toggler
const togglePassword = document.getElementById('toggle')
//reference of input an password field
const emailInput =document.getElementById("InputEmail")
const passwordInput=document.getElementById("InputPassword")
//password visibility eye open and close html template
const eyeClose=`<i class="fa-regular fa-eye-slash"></i>`
const eyeOpen=`<i class="fa-regular fa-eye"></i>`

//submit event listener
form.addEventListener('submit', (e) => {
    //preventing default behaviour
    e.preventDefault()

    // creating new form data
    const formData = new FormData(form);
    const email = formData.get("email")
    const password = formData.get("password")

    //Login Validation
    if (email === "admin@admin.com" && password === "123456")
        alert("Login Successful");
    else
        alert("Incorrect Username or Password");

    //Form Field Clearing
    emailInput.value=""
    passwordInput.value=""

});

//password visibility toggler click event listener
togglePassword.addEventListener('click', () => {
    const prevSibling=togglePassword.previousElementSibling
    //toggling the input type
    prevSibling.type === "password"? prevSibling.type = "text" : prevSibling.type = "password"
    //toggling the visibility button icon
    togglePassword.innerHTML===eyeClose? togglePassword.innerHTML=eyeOpen: togglePassword.innerHTML=eyeClose
})
