const mainContainer = document.querySelector(".main-container");

fetch("/data.json")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
  })
  .then((data) => {
    populateDOM(data);
  })
  .catch((error) => console.error(error));

const populateDOM = (data) => {
  const fragment = document.createDocumentFragment();
  
  data.forEach((item) => {
    const newItem = createItemElement(item);
    fragment.appendChild(newItem);
  });

  mainContainer.appendChild(fragment);
};

const createItemElement = (item) => {
  const itemTitle = item.title.toLowerCase().split(" ").join("-");

  const timeBox = document.createElement("div");
  timeBox.classList.add("time-box");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("time-box__image-container", `time-box__image-container--${itemTitle}`);
  const image = document.createElement("img");
  image.src = `/images/icon-${itemTitle}.svg`;
  image.alt = `${item.title} icon`;
  imageContainer.appendChild(image);

  const timeInfo = document.createElement("div");
  timeInfo.classList.add("time-box__time");

  const titleAndDots = document.createElement("div");
  titleAndDots.classList.add("time-box__title-and-dots");
  titleAndDots.innerHTML = `
    <p class="time-box__title">${item.title}</p>
    <img class="time-box__dots" src="/images/icon-ellipsis.svg" alt="ellipsis icon">
  `;

  const hoursAndPrev = document.createElement("div");
  hoursAndPrev.classList.add("time-box__hours-and-prev");
  hoursAndPrev.innerHTML = `
    <p class="time-box__hours">${item.timeframes.daily.current}hrs</p>
    <p class="time-box__prev">Previous - ${item.timeframes.daily.previous}hrs</p>
  `;

  timeInfo.appendChild(titleAndDots);
  timeInfo.appendChild(hoursAndPrev);
  timeBox.appendChild(imageContainer);
  timeBox.appendChild(timeInfo);

  return timeBox;
};

document.addEventListener("click", (event) => {
  if (event.target.matches(".user-box__button")) {
    console.log(`Se hizo clic en: ${event.target.textContent}`);
  }
});