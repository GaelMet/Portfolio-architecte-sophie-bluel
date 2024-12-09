document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#form-login");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (email === "" || password === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (email === "sophie.bluel@test.tld" && password === "S0phie") {
      alert("Connexion réussie !");
      window.location.href = "/espace_perso.html"; 
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  });
});

const loginButton = document.querySelector("#button-login");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    console.log("Bouton cliqué !");
  });
} else {
  console.error("Élément #login-button introuvable");
}
