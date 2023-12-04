//Zadaca 2.

async function fetchData1() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const myContainer1 = document.getElementById("myContainer1");

    data.results.forEach((el) => {
      const myDiv = document.createElement("myDiv");
      myDiv.id = "myDiv";
      myContainer1.appendChild(myDiv);

      const image = document.createElement("img");
      image.src = el.image;
      myDiv.appendChild(image);

      // const newDiv1 = document.createElement("div")
      // newDiv1.id = "myDiv1"
      // myDiv.appendChild(newDiv1)

      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = el.name;
      myDiv.appendChild(nameParagraph);

      const genderParagraph = document.createElement("p");
      genderParagraph.textContent = el.gender;
      myDiv.appendChild(genderParagraph);

      const statusParagraph = document.createElement("p");
      statusParagraph.textContent = el.status;
      if (el.status === "Alive") {
        statusParagraph.id = "paraAlive";
      } else if (el.status === "Dead") {
        statusParagraph.id = "paraDead";
      } else if (el.status === "Unknown") {
        statusParagraph.id = "paraUnknown";
      }
      myDiv.appendChild(statusParagraph);

      const episodesLengthParagraph = document.createElement("p");
      episodesLengthParagraph.textContent = "Episodes: ${el.episode.length}";
      myDiv.appendChild(episodesLengthParagraph);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData1();
