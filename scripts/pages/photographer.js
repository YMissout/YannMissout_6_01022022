//Mettre le code JavaScript lié à la page photographer.html
const getPhotographers = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  return {
    photographers: [...photographers],
  };
};

const photographerProfilContainer =
  document.querySelector(".photograph-header");

let params = new URL(document.location).searchParams;
let id = params.get("id");

const photographerProfilDisplay = () => {
  photographers.forEach((photographer) => {
    if (photographer.id == id) {
      const photographerModelPage = photographerFactory(photographer);
      const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
      photographerProfilContainer.appendChild(userCardDOMPage);
    }
  });
};

async function initPage() {
  // Récupère datas des photographes
  const { photographers } = await getPhotographers();
  photographerProfilDisplay(photographers);
}

initPage();
