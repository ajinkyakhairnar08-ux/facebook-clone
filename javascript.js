const navLinks = document.querySelectorAll(".centernav .nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove active from all
    navLinks.forEach(l => l.classList.remove("active"));
    // add active only to clicked link
    link.classList.add("active");
  });
});

function remove(){
  let confermdelete = confirm("Are you sure you want to delete this post?");
  if(confermdelete){
   document.getElementById("postid").innerHTML = "";
  }
  else{
    console.log(" not deleted");
  }
}
function remove1(){
  let confermdelete = confirm("Are you sure you want to delete this post?");
  if(confermdelete){
   document.getElementById("postid1").innerHTML = "";
  }
  else{
    console.log(" not deleted");
  }
}
function remove2(){
  let confermdelete = confirm("Are you sure you want to delete this post?");
  if(confermdelete){
   document.getElementById("postid2").innerHTML = "";
  }
  else{
    console.log(" not deleted");
  }
}
function reels(){
  let confirmReels = confirm("Go to reels section?");
  if (confirmReels) {
    window.location.href = "reel.html";
  }
  else{
    window.location.href = "index.html";
  }
}
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});


