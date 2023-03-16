// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

{/* <label for="country">Enter a country name</label>:
<input type="text" id="country">
<div id="suggestions"></div> */}


// SOLUTION
// check for input and write 
document.getElementById("country").addEventListener("input", e => {
  // Get suggestions element and empty it
  const suggestionElement = document.getElementById("suggestions");
  suggestionElement.textContent = "";
  // Enhance - Remove the css for the suggestions class (it's ok if it doesn't exist)
  suggestionElement.classList.remove("suggestions");
  
  // Loop through array and add countries that match input
  countryList.forEach(country => {
    if (country.toLowerCase().startsWith(e.target.value.toLowerCase()) && e.target.value.length > 0) {
      // Enhance 2 - Apply the css suggestions class
      suggestionElement.classList.add("suggestions");
      const countryElement = document.createElement("div");
      countryElement.textContent = country;
      // Add the style sheet
      countryElement.classList.add("suggestion");
      //  When clicked, add it to the text box
      countryElement.addEventListener("click", eCountry => {
        // e.target.value = country;
        // OR:
        e.target.value = eCountry.target.textContent;
      })

      // Add country to suggestion
      suggestionElement.appendChild(countryElement);
    }
  })
})
