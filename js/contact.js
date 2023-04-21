// Selectam elementele HTML
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const form = document.getElementsByTagName("form")[0];

// mailto:ceva@gmail.com?subject=subject&body=mesaj

const emailLink = "mailto:adresa@gmail.com";

form.addEventListener("submit", sendMsg);

function sendMsg(event) {
   event.preventDefault();

   const url = emailLink + "?subject=" + subject.value + "&body="
    + `New message from ${name.value}` + message.value;

    console.log(url);
    window.location.href = url;
}