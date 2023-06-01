const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

let offcanvasOpen = false;

onresize = () => {
  if (offcanvasOpen && innerWidth > 800) {
    openOffCanvas();
  }
};

function openOffCanvas() {
  if (offcanvasOpen) {
    offcanvasOpen = false;
  } else {
    offcanvasOpen = true;
  }
  let html = document.getElementById("html");
  let burger = document.getElementsByClassName("navbar-burger")[0];
  let offcanvas = document.getElementById("navbar-offcanvas");
  burger.classList.toggle("change");
  offcanvas.classList.toggle("navbar-offcanvas-open");
  html.classList.toggle("body-overflow-hidden");
}

function showAllItems() {
  var allButton = document.getElementById("button-all");
  var generalButton = document.getElementById("button-general");
  var infoButton = document.getElementById("button-info");
  var moderationButton = document.getElementById("button-moderation");

  allButton.classList.remove("unselected");
  allButton.classList.add("selected");

  generalButton.classList.remove("selected");
  generalButton.classList.add("unselected");

  infoButton.classList.remove("selected");
  infoButton.classList.add("unselected");

  moderationButton.classList.remove("selected");
  moderationButton.classList.add("unselected");

  var listItems = document.querySelectorAll(".command");
  listItems.forEach(function (item) {
    item.style.display = "flex";
  });
}

function showGeneralItems() {
  var allButton = document.getElementById("button-all");
  var generalButton = document.getElementById("button-general");
  var infoButton = document.getElementById("button-info");
  var moderationButton = document.getElementById("button-moderation");

  allButton.classList.remove("selected");
  allButton.classList.add("unselected");

  generalButton.classList.remove("unselected");
  generalButton.classList.add("selected");

  infoButton.classList.remove("selected");
  infoButton.classList.add("unselected");

  moderationButton.classList.remove("selected");
  moderationButton.classList.add("unselected");

  var listItems = document.querySelectorAll(".command");
  listItems.forEach(function (item) {
    console.log(item.getAttribute("data-command-type"));
    if (item.getAttribute("data-command-type") === "general") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function showInfoItems() {
  var allButton = document.getElementById("button-all");
  var generalButton = document.getElementById("button-general");
  var infoButton = document.getElementById("button-info");
  var moderationButton = document.getElementById("button-moderation");

  allButton.classList.remove("selected");
  allButton.classList.add("unselected");

  generalButton.classList.remove("selected");
  generalButton.classList.add("unselected");

  infoButton.classList.remove("unselected");
  infoButton.classList.add("selected");

  moderationButton.classList.remove("selected");
  moderationButton.classList.add("unselected");

  var listItems = document.querySelectorAll(".command");
  listItems.forEach(function (item) {
    if (item.getAttribute("data-command-type") === "info") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function showModerationItems() {
  var allButton = document.getElementById("button-all");
  var generalButton = document.getElementById("button-general");
  var infoButton = document.getElementById("button-info");
  var moderationButton = document.getElementById("button-moderation");

  allButton.classList.remove("selected");
  allButton.classList.add("unselected");

  generalButton.classList.remove("selected");
  generalButton.classList.add("unselected");

  infoButton.classList.remove("selected");
  infoButton.classList.add("unselected");

  moderationButton.classList.remove("unselected");
  moderationButton.classList.add("selected");

  var listItems = document.querySelectorAll(".command");
  listItems.forEach(function (item) {
    if (item.getAttribute("data-command-type") === "moderation") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

var listItems = document.querySelectorAll(".command");
function handleItemClick(item) {
  var clickedChild = item.target;
  var clickedItem = clickedChild.closest(".command");
  var clickedItemExpansionButton = clickedItem.querySelector(
    ".command-expansion-button"
  );

  if (clickedItem.getAttribute("data-selected") !== "selected") {
    listItems.forEach(function (item) {
      if (item !== clickedItem) {
        if (item.getAttribute("data-selected") === "selected") {
          var itemExpansionButton = item.querySelector(
            ".command-expansion-button"
          );
          itemExpansionButton.classList.remove("rotate-button");
          itemExpansionButton.classList.add("unrotate-button");

          setTimeout(function () {
            itemExpansionButton.classList.remove("unrotate-button");
          }, 300);
        }
        item.setAttribute("data-selected", "unselected");
      }
    });

    clickedItemExpansionButton.classList.add("rotate-button");
    clickedItem.setAttribute("data-selected", "selected");
  } else {
    clickedItemExpansionButton.classList.remove("rotate-button");
    clickedItemExpansionButton.classList.add("unrotate-button");

    setTimeout(function () {
      clickedItemExpansionButton.classList.remove("unrotate-button");
    }, 300);
    clickedItem.setAttribute("data-selected", "unselected");
  }
}

listItems.forEach(function (item) {
  item.addEventListener("click", handleItemClick);
});
