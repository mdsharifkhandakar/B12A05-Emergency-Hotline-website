// counters for hearts, coins, and copies
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// display elements
const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const callHistoryList = document.getElementById("historyList");

// heart icon
function toggleHeart(el) {
  const icon = el.querySelector("i");

  if (el.classList.contains("active")) {
    el.classList.remove("active");
    icon.classList.replace("fa-solid", "fa-regular");
    heartCount = heartCount - 1;
  } else {
    el.classList.add("active");
    icon.classList.replace("fa-regular", "fa-solid");
    heartCount = heartCount + 1;
  }

  heartDisplay.textContent = heartCount;
}

// copy number
function copyNumber(number) {
  navigator.clipboard
    .writeText(number)
    .then(function () {
      copyCount = copyCount + 1;
      copyDisplay.textContent = copyCount;
      alert("Number " + number + " copied ✅");
    })
    .catch(function () {
      alert("Copy failed ❌");
    });
}

// call a service
function callService(serviceName, number) {
  if (coinCount < 20) {
    alert("❌ You don’t have enough coins! Need at least 20.");
    return;
  }

  coinCount = coinCount - 20;
  coinDisplay.textContent = coinCount;

  alert("📞 Calling " + serviceName + " (" + number + ")...");
  addToHistory(serviceName, number);
}

// call entry to history
function addToHistory(serviceName, number) {
  const emptyMsg = callHistoryList.querySelector(".empty-history");
  if (emptyMsg) {
    emptyMsg.remove();
  }

  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const li = document.createElement("li");
  li.className = "history-item";
  li.innerHTML = `
  <div>
    <div class="history-service">${serviceName}</div>
    <div class="history-number">${number}</div>
  </div>
  <div class="history-time">${time}</div>
`;
  callHistoryList.appendChild(li);
}

// function to clear call history
function clearHistory() {
  callHistoryList.innerHTML =
    '<li class="empty-history">No call history yet</li>';
  alert("Call history cleared 🗑️");
}
