const about = document.querySelector("#about");
const experience = document.querySelector("#experience");
const qualification = document.querySelector("#qualification");
const skillset = document.querySelector("#skillset");

const aboutContent = document.querySelector("#about-content");
const experienceContent = document.querySelector("#experience-content");
const qualificationContent = document.querySelector("#qualification-content");
const skillsetContent = document.querySelector("#skillset-content");

// About Section
about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "ABOUT 📜",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

// Experience Section
experience.addEventListener("click", () => {
  const experienceBox = new WinBox({
    title: "EXPERIENCE 💼",
    width: "400px",
    height: "400px",
    top: 80,
    right: 50,
    bottom: 50,
    left: 50,
    mount: experienceContent,
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

// Skillset Section
skillset.addEventListener("click", () => {
  const skillsetBox = new WinBox({
    title: "SKILLSET 🛠",
    width: "400px",
    height: "400px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 50,
    mount: skillsetContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

