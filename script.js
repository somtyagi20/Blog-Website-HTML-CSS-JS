btn = document.createElement("button");
btn.innerHTML = "Read More";
btn.classList.add("button");

blog = document.querySelectorAll(".blog-post");
console.log(blog.length);
// for (let i = 0; i < blog.length; i++) {
//   blog[i].appendChild(btn.cloneNode(true));
// }

blog.forEach((element) => {
  element.insertAdjacentElement("beforeend", btn.cloneNode(true));
});

const btns = document.querySelector(".button");
const handleClick = (e) => {
  if (e.target.innerHTML === "Read More") {
    e.target.innerHTML = "Read Less";
  } else {
    e.target.innerHTML = "Read More";
  }
};
btns.addEventListener("click", handleClick);

date = document.querySelectorAll(".blog-date");
date.forEach((element) => {
  element.insertAdjacentHTML("afterbegin", "<p>Posted on -</p>");
});

for (let i = 3; i < blog.length; i++) {
  blog[i].style.display = "none";
}

showbtn = document.createElement("button");
showbtn.innerHTML = "Show More";
showbtn.classList.add("show-btn");

document
  .querySelector(".blog-container")
  .insertAdjacentElement("afterend", showbtn);

let show = 3;
showbtn.addEventListener("click", () => {
  for (let i = show; i < show + 3; i++) {
    blog[i].style.display = "flex";
  }
  show += 3;
  if (show >= blog.length) {
    showbtn.style.display = "none";
  }
});
