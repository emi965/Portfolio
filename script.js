const icon = document.getElementById("themeIcon");

icon.onclick = () => {//changes from light to dark mode and vice versa
  document.body.classList.toggle("dark");
  icon.src = document.body.classList.contains("dark")
    ? "dark.png"
    : "light.png";
};

function sendMail(){
  //parameters needed for EmailJs
  let data= {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  console.log(data);
  emailjs.send("service_pohx96a","template_erndast",data).then(alert("Your Email has been sent!"));//serviceID, templateID
  
};

