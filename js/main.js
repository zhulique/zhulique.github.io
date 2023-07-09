const whoami = document.querySelector("#whoami");
const qualification = document.querySelector("#qualification");
const projects = document.querySelector("#projects");

const whoamiContent = document.querySelector("#whoami-content");
const qualificationContent = document.querySelector("#qualification-content");
const projectsContent = document.querySelector("#projects-content");

// Whoami Section
whoami.addEventListener("click", () => {
  const whoamiBox = new WinBox({
    title: "WHOAMI 👨‍💻",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: whoamiContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

// Qualification Section
qualification.addEventListener("click", () => {
  const qualificationtBox = new WinBox({
    title: "QUALIFICATION 🎓",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 60,
    mount: qualificationContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

// Projects Section
projects.addEventListener("click", () => {
  const projectBox = new WinBox({
    title: "PROJECTS 🏗️",
    width: "400px",
    height: "400px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 50,
    mount: projectsContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

