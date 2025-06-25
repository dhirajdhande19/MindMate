fetch("../data/resources.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".card-grid");

    data.forEach((post) => {
      const newPost = document.createElement("div");
      newPost.classList.add("card");
      newPost.classList.add(`${post.categories[1]}`);
      const imgSrc = `${post.image}`;
      newPost.innerHTML = `
        <img
          src="${post.image}"
          alt="Resource Image"
        />
        <div class="card-body">
            <div class="card-title">${post.title}</div>
            <div class="card-text">${post.description}</div>
        </div>
        <div class="card-footer">
            <span>${post.time}</span>
            <button onclick="openPost('${post.id}')">Read More</button>
        </div>
      `;

      container.appendChild(newPost);
    });
  });

function openPost(postId) {
  localStorage.setItem("selectedPostId", postId);
  window.location.href = "resource-post.html";
}

const btns = document.querySelectorAll(".categories button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.add("active");
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".card");
    const category = btn.id;
    console.log(category);

    cards.forEach((card) => {
      if (category == "all") {
        card.style.display = "block";
      } else if (card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
