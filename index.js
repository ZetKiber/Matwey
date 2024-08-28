document.getElementById("Net").addEventListener("click",function() {
  document.getElementById("modal-password").classList.add("open")
})

document.getElementById("modal-password3").addEventListener("click",function() {
  document.getElementById("modal-password").classList.remove("open")
})

document.getElementById("Glavnaya").addEventListener("click",function() {
  document.getElementById("Glavnaya2").classList.add("open")
})

document.getElementById("Glavnaya3").addEventListener("click",function() {
  document.getElementById("Glavnaya2").classList.remove("open")
})

window.addEventListener('keydown',(e)=>{
  if (e.key === "Escape") {
    document.getElementById("modal-password").classList.remove("open")
  }
})
window.addEventListener('keydown',(e)=>{
  if (e.key === "Escape") {
    document.getElementById("Glavnaya2").classList.remove("open")
  }
})

document.getElementById("Kontakt").addEventListener("click",function() {
  document.getElementById("Kontakt2").classList.add("open")
})

document.getElementById("Kontakt3").addEventListener("click",function() {
  document.getElementById("Kontakt2").classList.remove("open")
})

window.addEventListener('keydown',(e)=>{
  if (e.key === "Escape") {
    document.getElementById("Kontakt2").classList.remove("open")
  }
})

document.getElementById("O-nas").addEventListener("click",function() {
  document.getElementById("O-nas2").classList.add("open")
})

document.getElementById("O-nas3").addEventListener("click",function() {
  document.getElementById("O-nas2").classList.remove("open")
})

window.addEventListener('keydown',(e)=>{
  if (e.key === "Escape") {
    document.getElementById("Kontakt2").classList.remove("open")
  }
})