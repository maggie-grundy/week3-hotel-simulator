// Create Variables
const form = document.getElementById("myForm");
const nameInput = document.getElementById("guestName");
const roomSelect = document.getElementById("roomNumber");
const stayDuration = document.getElementById("stayDuration");
const guestListDiv = document.getElementById("parentContainer");

// Empty array variable for guests
const guests = [];

// Dynamically Update Page

 // Update DOM
function renderGuests(guest, index) {
    const {name, room, duration} = guest;
    const htmlTemplate = `
    <h3 class="guest-title">Guest ${index + 1}</h3>
     <p><span class="guest-label">Name:</span> ${name}</p>
     <p><span class="guest-label">Room Number:</span> ${room}</p>
     <p><span class="guest-label">Stay Duration:</span> ${duration} days</p>`;

    const newDiv = document.createElement("div");
    newDiv.classList.add('guestContainer');
    newDiv.innerHTML = htmlTemplate;
    guestListDiv.appendChild(newDiv);
}
// Create & Store Guest Objects
function Guest(name, room, duration) {
  this.name = name;
  this.room = room;
  this.duration = duration;
}
// Prevent default form behavior & handle events
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevents reload

// Validate inputs

  // Check if nameInput value is empty
  if (!nameInput.value.trim()) {
    alert("EnterName");
    return;
  }
  // Check for duplicate room
  if (guests.some((g) => g.room === roomSelect.value)) {
    alert(`Room is unavailable!`);
    return;
  }
  // Create new guest
  const newGuest = new Guest(nameInput.value, roomSelect.value, stayDuration.value);

  // Add new guest to array
  guests.push(newGuest);

//Update page to display new guest
renderGuests(newGuest, guests.length - 1);

//Display guest-list container as flex so child cards lay out in a row
guestListDiv.style.display = "flex";

  // Reset form for next entry
  form.reset();
});

