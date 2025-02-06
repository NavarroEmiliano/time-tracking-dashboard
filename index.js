const mainContainer = document.querySelector(".main-container");
const buttonsContainer = document.querySelector(".user-box__actions");
let currentData = [];

fetch("/data.json")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
  })
  .then((data) => {
    currentData = data;
    updateDOM("daily");
  })
  .catch((error) => console.error(error));

const updateDOM = (timeframe) => {
  clearMainContainer();
  const fragment = document.createDocumentFragment();

  currentData.forEach((item) => {
    const newItem = createItemElement(item, timeframe);
    fragment.appendChild(newItem);
  });

  mainContainer.appendChild(fragment);
};

const clearMainContainer = () => {
  document
    .querySelectorAll(".main-container > *:not(.user-box)")
    .forEach((element) => element.remove());
};

const createItemElement = (item, timeframe) => {
  const itemTitle = item.title.toLowerCase().split(" ").join("-");
  const { current, previous } = item.timeframes[timeframe];

  const period =
    timeframe === "daily" ? "Day" : timeframe === "weekly" ? "Week" : "Month";

  const timeBox = document.createElement("div");
  timeBox.classList.add("time-box");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add(
    "time-box__image-container",
    `time-box__image-container--${itemTitle}`
  );
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
    <p class="time-box__hours">${current}hrs</p>
    <p class="time-box__prev">Last ${period} - ${previous}hrs</p>
  `;

  timeInfo.appendChild(titleAndDots);
  timeInfo.appendChild(hoursAndPrev);
  timeBox.appendChild(imageContainer);
  timeBox.appendChild(timeInfo);

  return timeBox;
};

buttonsContainer.addEventListener("click", (e) => {
  if (e.target.matches(".user-box__button")) {
    const selectedTimeframe = e.target.textContent.toLowerCase();
    updateDOM(selectedTimeframe);
    highlightActiveButton(e.target);
  }
});

const highlightActiveButton = (activeButton) => {
  document.querySelectorAll(".user-box__button").forEach((button) => {
    button.classList.remove("active");
  });
  activeButton.classList.add("active");
};
