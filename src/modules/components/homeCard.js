const card = (txt, num, color) => {
    const card = document.createElement("div");
    const cardTxt = document.createElement("p");
    const cardNum = document.createElement("p");

    card.classList.add("home-card");
    cardTxt.classList.add("home-card-txt");
    cardNum.classList.add("home-card-num");
    card.style.borderColor = color;
    cardNum.style.color = color;

    card.style.setProperty("--hover-color", color + "1F");

    cardTxt.textContent = txt;
    cardNum.textContent = num;

    card.appendChild(cardTxt);
    card.appendChild(cardNum);
    return card;
};

export default card;
