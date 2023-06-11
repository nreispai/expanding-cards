const container = document.querySelector(".container");

function expandCard(e) {
  if (e.target.classList.contains("panel")) {
    Array.from(e.currentTarget.children).forEach((children) => {
      if (children.classList.contains("active")) {
        children.classList.remove("active");
      }
    });
    e.target.classList.add("active");
  }
}

container.addEventListener("mouseover", expandCard);
