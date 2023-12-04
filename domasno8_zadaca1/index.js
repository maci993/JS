//Zadaca 1.

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const myContainer = document.getElementById("my-container");
    data.forEach((el) => {
      const myDiv = document.createElement("div");
      myDiv.id = "myDiv";
      myContainer.appendChild(myDiv);
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = el.name;
      myDiv.appendChild(nameParagraph);

      const phoneParagraph = document.createElement("p");
      phoneParagraph.id = "PhoneParagraph";
      phoneParagraph.textContent = el.phone;
      myDiv.appendChild(phoneParagraph);

      const companyNameParagraph = document.createElement("p");
      companyNameParagraph.textContent = el.company.name;
      myDiv.appendChild(companyNameParagraph);
    });
  } catch (error) {
    console.log(error);
  }
}
fetchData();
