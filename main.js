let btn = document.querySelector("div");

fetch("https://fakestoreapi.com/products?limit=10")
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
            <img>${}</img>
          `;
      btn.appendChild(userDiv);
    });
  })
  .catch((error) => console.error("Xatolik yuz berdi:", error));

  