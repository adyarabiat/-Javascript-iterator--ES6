//Some fake data to test on it
const data = [
  {
    name: "Ady",
    age: 29,
    gender: "male",
    lookingfor: "female",
    location: "Jordan",
    image: "https://randomuser.me/api/portraits/med/men/75.jpg",
  },
  {
    name: "Amanda",
    age: 23,
    gender: "female",
    lookingfor: "male",
    location: "USA",
    image: "https://randomuser.me/api/portraits/med/women/75.jpg",
  },
  {
    name: "Emer",
    age: 25,
    gender: "female",
    lookingfor: "male",
    location: "Ireland",
    image: "https://randomuser.me/api/portraits/med/women/61.jpg",
  },
  {
    name: "Mark",
    age: 40,
    gender: "male",
    lookingfor: "female",
    location: "New York",
    image: "https://randomuser.me/api/portraits/med/men/60.jpg",
  },
];

// Profile iterator

function profileIterator(profiles) {
  let nIndex = 0;

  return {
    n: function () {
      return nIndex < profiles.length
        ? { value: profiles[nIndex++], done: false }
        : { done: true };
    },
  };
}

const profiles = profileIterator(data);

// We call this first to display profile once we run the code
nextProfile();

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.n().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // To reload if there is no more
    window.location.reload();
  }
}
