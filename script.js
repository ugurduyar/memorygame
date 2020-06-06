document.addEventListener("DOMContentLoaded", () => {
  // Card options
  const cardArray = [
    {
      name: "dog",
      img: "images/dog.png",
    },
    {
      name: "dog",
      img: "images/dog.png",
    },
    {
      name: "dog2",
      img: "images/dog2.png",
    },
    {
      name: "dog2",
      img: "images/dog2.png",
    },
    {
      name: "bee",
      img: "images/bee.png",
    },
    {
      name: "bee",
      img: "images/bee.png",
    },
    {
      name: "cat",
      img: "images/cat.png",
    },
    {
      name: "cat",
      img: "images/cat.png",
    },
    {
      name: "cow",
      img: "images/cow.png",
    },
    {
      name: "cow",
      img: "images/cow.png",
    },
    {
      name: "deer",
      img: "images/deer.png",
    },
    {
      name: "deer",
      img: "images/deer.png",
    },
    {
      name: "black",
      img: "images/black.png",
    },
    {
      name: "black",
      img: "images/black.png",
    },
    {
      name: "blank",
      img: "images/blank.png",
    },
    {
      name: "blank",
      img: "images/blank.png",
    },
  ];

  const grid = document.querySelector(".grid");

  // Creating the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      //   card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }

  createBoard();
});
