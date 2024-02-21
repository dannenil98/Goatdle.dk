let goats = [
    { name: "Ronny hallbom", gender: "Man", profession: "Snickare", region: "Ljugarn", birthdate: 1968, bodyshape: "Normal", alcoholism: "70%" },
    { name: "Adam Hägring", gender: "Man", profession: "Hemmafru", region: "När", birthdate: 1998, bodyshape: "Överviktig", alcoholism: "30%" },
    { name: "Axel Svärdh", gender: "Man", profession: "Magister-Daddy", region: "Andra sidan pölen", birthdate: 1999, bodyshape: "Överviktig", alcoholism: "70%" },
    { name: "Daniel Nilsson", gender: "Man", profession: "CEO @Goatdle.dk", region: "Göteborg/Havdhem", birthdate: 1998, bodyshape: "Vältranad", alcoholism: "40%" },
    { name: "Robin Öst", gender: "Man", profession: "Butiksbiträde", region: "Visby/Etelhem", birthdate: 1998, bodyshape: "Undernärd", alcoholism: "30%" }
];

const nameDiv = document.getElementById('name');
const genderDiv = document.getElementById('gender');
const professionDiv = document.getElementById('profession');
const regionDiv = document.getElementById('region');
const birthdateDiv = document.getElementById('birthdate');
const bodyshapeDiv = document.getElementById('bodyshape');
const alcoholismDiv = document.getElementById('alcoholism');

// Loop through the array and display each object
goats.forEach(goat => {

    const nameParagraph = document.createElement('p');
  nameParagraph.textContent = `${goat.name}`;
  nameDiv.appendChild(nameParagraph);

  const genderParagraph = document.createElement('p');
  genderParagraph.textContent = `${goat.gender}`;
  genderDiv.appendChild(genderParagraph);

  const professionParagraph = document.createElement('p');
  professionParagraph.textContent = `${goat.profession}`;
  professionDiv.appendChild(professionParagraph);

  const regionParagraph = document.createElement('p');
  regionParagraph.textContent = `${goat.region}`;
  regionDiv.appendChild(regionParagraph);

  const birthdateParagraph = document.createElement('p');
  birthdateParagraph.textContent = `${goat.birthdate}`;
  birthdateDiv.appendChild(birthdateParagraph);

  const bodyshapeParagraph = document.createElement('p');
  bodyshapeParagraph.textContent = `${goat.bodyshape}`;
  bodyshapeDiv.appendChild(bodyshapeParagraph);

  const alcoholismParagraph = document.createElement('p');
  alcoholismParagraph.textContent = `${goat.alcoholism}`;
  alcoholismDiv.appendChild(alcoholismParagraph);
});

// Function to select a random element from an array
function getRandomElement(goats) {
    return goats[Math.floor(Math.random() * goats.length)];
    }
      
    // Select a random fruit object
    const randomGoat = getRandomElement(goats);
    
    // Get the output div
    const outputDiv = document.getElementById('randomGoat');
    
    // Display the selected fruit object
    const paragraph = document.createElement('p');
    paragraph.textContent = `${randomGoat.name} ${randomGoat.gender} ${randomGoat.profession} ${randomGoat.region} ${randomGoat.birthdate} ${randomGoat.bodyshape} ${randomGoat.alcoholism} `;
    outputDiv.appendChild(paragraph);