function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const lien = document.createElement("a");
    lien.setAttribute("href", `./photographer.html?id=` + id);
    const article = document.createElement("article");
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const paragrapheCity = document.createElement("p");
    paragrapheCity.textContent = city + ", " + country;
    const paragraphePhrase = document.createElement("span");
    paragraphePhrase.textContent = tagline;
    const paragraphePrice = document.createElement("div");
    paragraphePrice.textContent = price + "€/jour";
    article.appendChild(div);
    article.appendChild(lien);
    lien.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    article.appendChild(paragrapheCity);
    article.appendChild(paragraphePhrase);
    article.appendChild(paragraphePrice);
    return article;
  }

  function getUserCardDOMPage() {
    const articlePage = document.createElement("section");
    const divProfil = document.createElement("div");
    const h1Page = document.createElement("h1");
    h1Page.textContent = name;
    const cityPage = document.createElement("p");
    cityPage.textContent = city + ", " + country;
    const phrasePage = document.createElement("span");
    phrasePage.textContent = tagline;
    const btnContact = document.querySelector(".contact_button");
    const imgPage = document.createElement("img");
    imgPage.setAttribute("src", picture);
    articlePage.appendChild(divProfil);
    divProfil.appendChild(h1Page);
    divProfil.appendChild(cityPage);
    divProfil.appendChild(phrasePage);
    articlePage.appendChild(btnContact);
    articlePage.appendChild(imgPage);
    return articlePage;
  }

  function getUserContactDOM() {
    const contactName = document.createElement("span");
    contactName.textContent = name;
    return contactName;
  }

  return {
    getUserCardDOM,
    getUserCardDOMPage,
    getUserContactDOM,
  };
}
