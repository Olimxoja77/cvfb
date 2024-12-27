let btn = document.querySelector("div");

fetch("https://673870e84eb22e24fca7ef0c.mockapi.io/api/v1/contact")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(data);
      const userDiv = document.createElement("div");
      userDiv.className = "user";
      userDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>id:</strong> ${item.id}</p>
            <p><strong>Number:</strong> ${item.number}</p>
          `;
      btn.appendChild(userDiv);
    });
  })
  .catch((error) => console.error("Xatolik yuz berdi:", error));

  