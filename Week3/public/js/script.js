$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#clickMeButton").click(() => {
    clickMe();
  });
});

const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];
const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};
const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium" style="border-radius: 20px"><div class="card-image waves-effect waves-block waves-light" style="border-radius: 20px"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};
$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#clickMeButton").click(() => {
    clickMe();
  });

  addCards(cardList);
});

$(document).ready(function () {
  $(".fixed-action-btn").floatingActionButton();
});

$(document).ready(function () {
  $(".tooltipped").tooltip();
});