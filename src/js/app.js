import "../style/index.css";

function render(variables = {}) {
  console.log("Variables actuales: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name ? variables.name : "Nombre"} ${variables.lastName ? variables.lastName : "Apellido"}</h1>
          <h2>${variables.role ? variables.role : "Rol profesional"}</h2>
          <h3>${variables.city ? variables.city : "Ciudad"}</h3>
          <h3>${variables.country ? variables.country : "País"}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://x.com/${variables.twitter ? variables.twitter : ''}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github ? variables.github : ''}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${variables.linkedin ? variables.linkedin : ''}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram ? variables.instagram : ''}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function () {
  window.variables = {
    includeCover: true,
    background:
      "https://diadelaprovincia.dipusevilla.es/export/sites/diadelaprovincia/.galleries/IMAGENES-Galardonados/IMG-20190524-WA0004.jpg",
    avatarURL:
      "https://www.cdeportiva.com/wp-content/uploads/2022/04/Joaquin-Betis-1200x774.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null,
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function (elm) {
    elm.addEventListener("change", function (e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
