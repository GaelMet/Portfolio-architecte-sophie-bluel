document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector("#portfolio .gallery");
  if (!gallery) {
    console.error("Élément gallery introuvable dans le DOM.");
    return;
  }
  console.log("DOM chargé, élément gallery trouvé :", gallery);

  // Fonction pour récupérer les travaux
  function fetchWorks(categoryId = null) {
    fetch("http://localhost:5678/api/works")
      .then((response) => {
        console.log("Réponse reçue de l'API :", response);
        return response.json();
      })
      .then((workData) => {
        console.log("Données des travaux reçues :", workData);
        gallery.innerHTML = ""; // Réinitialise la galerie

        // Filtre les travaux si une catégorie est spécifiée
        const buttonWorks = categoryId
          ? workData.filter((work) => work.categoryId === categoryId)
          : workData;

        buttonWorks.forEach((work) => {
          console.log("Traitement du travail :", work.imageUrl);

          const figure = document.createElement("figure");

          const img = document.createElement("img");
          img.src = work.imageUrl;
          img.alt = work.title;

          const figcaption = document.createElement("figcaption");
          figcaption.innerText = work.title;

          figure.appendChild(img);
          figure.appendChild(figcaption);

          gallery.appendChild(figure);
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des projets :", error);
        gallery.innerHTML = "<p>Impossible de charger les projets pour le moment.</p>";
      });
  }

  // Appeler fetchWorks sans filtre de catégorie pour charger tout
  fetchWorks();

  function fetchCategories(categoryId = null) {
 fetch("http://localhost:5678/api/categories")
    .then((response) =>{
      console.log("reponse recu de l'api :", response);
      return response.json();
    })
     .then((categoryData) => {
        console.log("Données des travaux reçues :", categoryData);

        const portfolio = document.querySelector("#portfolio");
        if (!portfolio) {
          console.error("le contenue n'existe pas dans le DOM");
          return;
        }
        //cree une div pour englober l'api//
        const mainFiltres = document.createElement("div");
        mainFiltres.classList.add("main__filtres");

      //creation du button restant //
      const allButton = document.createElement("button");
          allButton.classList.add("all__Button");

          //creation du texte du button restant//
           const texte = document.createElement("p");
           texte.classList.add("tous");//cree sa class//
           texte.textContent = ("Tous");//mettre le texte dans le bouton//

           allButton.appendChild(texte);
           mainFiltres.appendChild(allButton);

       



        // Ajouter le foreach//

          categoryData.forEach((category) => {
          console.log("traitement du travail :", category);
//creation de toutes les div pour les trois fitres//
          const filtres = document.createElement("button");
          filtres.classList.add("filter-item");

//creation "p" pour les names des filtres//
          const name = document.createElement ("p");
          name.textContent = category.name;

          filtres.addEventListener("click", () => {
 fetchWorks(category.id);

})

allButton.addEventListener("click", () => {
  fetchWorks();
})

          filtres.appendChild(name);
        portfolio.appendChild(filtres);
        mainFiltres.appendChild(filtres);

       mainFiltres.appendChild(allButton);
       allButton.appendChild(texte);


        gallery.before(mainFiltres);


        })   

  });


}
fetchCategories();

})
//****PAGE ESPACE_PERSO.HTML****/
document.addEventListener("DOMContentLoaded", () => {
  const pageDifferente = window.location.pathname;

  if (pageDifferente.includes("espace_perso.html")) {
    console.log ("page detectee");

    //selection l'élément desirer//
    const login = document.querySelector(".my-login");

if (login) {

      const logout = document.createElement("a");
      logout.classList.add("my-login");
      logout.textContent = "Logout";
      logout.href = "./index.html";

      //pour remplacer login par logout une fois connecter//
      login.replaceWith(logout);

      logout.addEventListener("click", () => {
        console.log("deconnexion reussie !");
      })
}
    
  
   
  }
})