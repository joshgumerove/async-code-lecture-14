function displayTime() {
  const clock = document.getElementById("clock");
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

function createMessageItem(message) {
  const listItem = document.createElement("li");
  listItem.innerHTML = message;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", () => listItem.remove());

  listItem.appendChild(removeButton);
  return listItem;
}

// Event listener for form submission
const messageForm = document.getElementById("leave_message");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = e.target.userName.value;
  const email = e.target.email.value;
  const message = e.target.usersMessage.value;

  const listItem = createMessageItem(`${userName} (${email}): ${message}`);
  const messageList = document.getElementById("messages_list");
  messageList.appendChild(listItem);

  e.target.reset();
});

// Set interval to update the time every second
setInterval(displayTime, 1000);

// Initial time display
displayTime();
