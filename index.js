let fetchData;
const mainContainer = document.querySelector(".main-container");

fetch("/data.json")
  .then((response) => {
    if (!response.ok) return "failed to fetch";
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => {
      appendItem(item);
    });
  });

const appendItem = (item) => {
  const itemTitle = item.title.toLowerCase().split(" ").join("-");

  mainContainer.innerHTML += `
                <div class="time-box">
      <div class="time-box__image-container time-box__image-container--${itemTitle}">
        <img src="/images/icon-${itemTitle}.svg" alt="">
      </div>


      <div class="time-box__time">
        <div class="time-box__title-and-dots">
          <p class="time-box__title">${item.title}</p>
          <img class="time-box__dots" src="/images/icon-ellipsis.svg" alt="">
        </div>
        <div class="time-box__hours-and-prev">
          <p class="time-box__hours">${item.timeframes.daily.current}hrs</p>
          <p class="time-box__prev"> Previous - ${item.timeframes.daily.previous}hrs</p>
        </div>
      </div>

    </div>
        `;
};

console.log(fetchData);
