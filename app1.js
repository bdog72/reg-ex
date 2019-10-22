const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "Male",
    lookingfor: "Female",
    location: "Boston Ma",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Molly Moo",
    age: 30,
    gender: "Female",
    lookingfor: "Male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "Bozo Beak",
    age: 47,
    gender: "Male",
    lookingfor: "Female",
    location: "Tampa FL",
    image: "https://randomuser.me/api/portraits/men/83.jpg"
  }
];

const profiles = profileIterator(data);

nextProfile();

document.querySelector("#next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.querySelector("#profileDisplay").innerHTML = `
  <ul class='list-group>
    <li class='list-group-item'>Name: ${currentProfile.name}</li>
    <li class='list-group-item'>Age: ${currentProfile.age}</li>
    <li class='list-group-item'>Location: ${currentProfile.location}</li>
    <li class='list-group-item'>Preference: ${currentProfile.gender} -- Looking for ${currentProfile.lookingfor}</li>
  </ul>
  `;
    document.querySelector("#imageDisplay").innerHTML = `
  <img src='${currentProfile.image}'></img>
  `;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false
          }
        : { done: true };
    }
  };
}
