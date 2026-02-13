function toggleContact() {
  const popup = document.getElementById('contact-popup');
  if(popup.style.display === 'flex') {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'flex';
  }
}

/* DARK MODE */
const toggle = document.getElementById("theme-switch");

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if(toggle.checked){
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme","light");
  }
});