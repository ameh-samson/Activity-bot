const activityEl = document.getElementById("activity-el");
const fetchActivityBtn = document.getElementById("fetch-activity-btn");

fetchActivityBtn.addEventListener("click", fetchActivity)

function fetchActivity (){
  fetch("https:/apis.scrimba.com/bored/api/activity")
   .then (res  => res.json())
   .then (data => {
     activityEl.textContent = data.activity
     document.body.classList = "fun"
     fetchActivityBtn.style.backgroundColor = "white"
})
}

