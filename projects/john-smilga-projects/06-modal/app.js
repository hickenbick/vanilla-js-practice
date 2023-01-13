const openBtn = document.querySelector(".modal-btn")
const closeBtn = document.querySelector(".close-btn")
const overlay = document.querySelector(".modal-overlay")

openBtn.addEventListener("click", function() {
  overlay.classList.add("open-modal")
})

closeBtn.addEventListener("click", function() {
  overlay.classList.remove("open-modal")
})