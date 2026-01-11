fetch("/data/chords.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".akord_container");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    data.forEach(akord => {
      const akordDiv = document.createElement("div");
      akordDiv.classList.add("akord");

      akordDiv.innerHTML = `
        <img src="${akord.image}" alt="${akord.name}" class="akord-img">
      `;

      container.appendChild(akordDiv);

      akordDiv.querySelector(".akord-img").addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = akord.image;
      });
    });

    closeBtn.onclick = () => {
      modal.style.display = "none";
    }

    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    }
  })
  .catch(error => console.error("Chyba při načítání akordů:", error));

