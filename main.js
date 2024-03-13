const openChat = document.querySelector("#openchat");
const headerClick = document.querySelector("#h3click");
const chatForm = document.querySelector("#chatform");
openChat.addEventListener("click", () => {
  chatForm.style = "display:block;";
});
headerClick.addEventListener("click", () => {
  chatForm.style = "display:none;";
});
