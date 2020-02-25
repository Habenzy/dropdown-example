let dropTop = document.getElementById("drop-container")

let content = document.getElementById("drop-content")

dropTop.addEventListener('mouseenter', function(){
  content.style.display = "block"
})

dropTop.addEventListener('mouseleave', function() {
  content.style.display = "none"
})

/*droptTop.addEventListener('click', toggleDrop) */

function toggleDrop() {
  if(content.style.display === "none") {
    content.style.display = "block"
  } else {content.style.display = "none"}
}
