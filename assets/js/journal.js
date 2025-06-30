fetch("../data/journal.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".card-section");

    data.map((post) => {
      const newPost = document.createElement("div");
      newPost.classList.add("card");
    //   newPost.classList.add(`${post.categories[1]}`);
      const imgSrc = `${post.image}`;
      newPost.innerHTML = `
        
        <div class="img-section">
          <img
            src="${post.image}"
            alt="somthig went wrong"
          />
        </div>
        <div class="card-contant">
          <p class="card-heading">${post.username}</p>
          <p class="card-text">
            ${post.review}
          </p>
        </div>
    
      `;

      container.appendChild(newPost);
    });
  });