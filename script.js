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

  emailjs.send("service_pohx96a","template_erndast",data).then(alert("Your Email has been sent!"));//serviceID, templateID
  
};

const projects = [
  {
    title: "E-commerce Website",
    category: "Web Dev",
    image: "project0.png",
    link: "https://eowellnessessentials.com",
    description: "I designed and created a fully functional website for startup brand to get orders for its customers"
  },
  {
    title: "Personal Portfolio",
    category: "Web Dev",
    image: "project.png",
    link: "https://emi965.github.io/Portfolio/",
    description: "I developed my personal portfolio using HTML. CSS, JavaScript and EmailJs."
  },
  {
    title: "Front End Shopping Website",
    category: "Web Dev",
    image: "project1.png",
    link: "2406/a1/order.html",
    description: "I developed a fully client-side JavaScript web application that allows users to browse multiple vendors, dynamically display categorized office supplies, and build an order in real time. I implemented vendor switching, stock validation, order calculations (subtotal, tax, delivery, minimum order logic), and a responsive three-column layout using plain JavaScript without external libraries."
  },
  {
    title: "Full Stack Art Exhibition Database",
    category: "Web Dev",
    image: "project3.png",
    link: "https://www.youtube.com/watch?v=qdZJyUoLh1M",
    description: "Analytics dashboard UI design."
  },
  {
    title: "",
    category: "Graphic",
    image: "graphic/logo.jpg",
    link: "",
    description: "Fun landing page for toy brand."
  },
  {
    title: "",
    category: "Graphic",
    image: "graphic/e.png",
    link: "",
    description: "Fun landing page for toy brand."
  },
  {
    title: "",
    category: "Graphic",
    image: "graphic/everyday1.png",
    link: "",
    description: "Fun landing page for toy brand."
  },
  {
    title: "",
    category: "Graphic",
    image: "graphic/pink.png",
    link: "",
    description: "Fun landing page for toy brand."
  },
  {
    title: "",
    category: "Graphic",
    image: "graphic/summer_12345.png",
    link: "",
    description: "Fun landing page for toy brand."
  },
  {
    title: "",
    category: "Graphic",
    image: "graphic/summer.png",
    link: "",
    description: "Fun landing page for toy brand."
  },
  {
    title: "",
    category: "Graphic",
    image: "graphic/christmas.png",
    link: "",
    description: "Fun landing page for toy brand."
  },
  {
    title: "",
    category: "Graphic",
    image: "graphic/bestsellers.png",
    link: "",
    description: "Fun landing page for toy brand."
  },
];

function filterProjects(category) {
  if (category === "All") {
    displayProjects(projects);
  } else {
    const filtered = projects.filter(project => project.category === category);
    displayProjects(filtered);
  }
}

const grid = document.getElementById("projectsGrid");

function displayProjects(list) {
  grid.innerHTML = "";

  list.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" />
      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}">View Project →</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

displayProjects(projects);

