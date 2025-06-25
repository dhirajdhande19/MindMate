const postId = localStorage.getItem("selectedPostId");

fetch("../data/resources.json")
  .then((res) => res.json())
  .then((data) => {
    const post = data.find((p) => p.id === postId);
    const container = document.getElementById("post-container");

    if (post) {
      container.innerHTML = `
        <div class="col-12 mx-auto" style="max-width: 90%;">
          <div class="card shadow-sm border-0">
            <img src="${
              post.image
            }" class="card-img-top img-fluid rounded-top" alt="Post Image" style="max-height: 450px; object-fit: cover;"/>

            <div class="card-body">
              <h1 class="card-title h3 fw-bold mb-3">${post.title}</h1>
              <p class="text-muted mb-2">${post.time} • ${
        post.categories[1]
      }</p>
              <hr />
              <p class="card-text lh-lg fs-6">${post.content.replace(
                /\n/g,
                "&nbsp;&nbsp;"
              )}</p>
              <a href="resources.html" class="btn btn-success mt-4">← Back to Resources</a>
            </div>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="text-center text-danger">
          <h2>Post not found.</h2>
          <a href="resources.html" class="btn btn-outline-secondary mt-3">← Go Back</a>
        </div>
      `;
    }
  });
