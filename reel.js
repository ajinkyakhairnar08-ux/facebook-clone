const videos = document.querySelectorAll("video");
let current = 0;

// Play only the visible reel & restart when revisited
function playVisibleReel() {
  videos.forEach((vid) => {
    const rect = vid.getBoundingClientRect();

    // Check if video is fully visible in viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Restart and play only when it becomes visible
      if (vid.paused) {
        vid.currentTime = 0;
        vid.play();
      }
    } else {
      vid.pause();
      vid.currentTime = 0;
    }
  });
}

// Scroll listener
document.querySelector(".reel-container").addEventListener("scroll", playVisibleReel);

// Up button
document.getElementById("upBtn").onclick = () => {
  current = Math.max(0, current - 1);
  videos[current].scrollIntoView({ behavior: "smooth" });
  setTimeout(playVisibleReel, 600);
};

// Down button
document.getElementById("downBtn").onclick = () => {
  current = Math.min(videos.length - 1, current + 1);
  videos[current].scrollIntoView({ behavior: "smooth" });
  setTimeout(playVisibleReel, 600);
};

// Click to pause/play
videos.forEach((video) => {
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

// ✅ Play only the first visible reel after refresh
window.addEventListener("load", () => {
  videos.forEach((vid, index) => {
    if (index === 0) {
      vid.play(); // only first one plays
    } else {
      vid.pause();
      vid.currentTime = 0;
    }
  });
});
const navLinks = document.querySelectorAll(".centernav .nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove active from all
    navLinks.forEach(l => l.classList.remove("active"));
    // add active only to clicked link
    link.classList.add("active");
  });
});
