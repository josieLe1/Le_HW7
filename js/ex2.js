// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

for (let i = 0; i < houses.length; i++) { 
  const names = document.createElement('option')
  names.value = houses[i].code
  names.textContent = houses[i].name
  document.getElementById('house').appendChild(names)
}

const formElement = document.querySelector("form");

formElement.addEventListener("change", e => {
  console.log(`House characters: ${getCharacters(e.target.value)}`);
  getCharacters(e.target.value).forEach(element => {
    const liElem = document.createElement("li");
    liElem.textContent = element;
    document.getElementById("characters").appendChild(liElem);
  });
});
