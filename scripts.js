document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "https://headless-cms.directus.app/items/jay_blogs"; 
    const IMAGE_BASE_URL = "https://headless-cms.directus.app/assets/"; 
    const postsContainer = document.getElementById("posts-container");

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log("Full API Response:", data); 

            if (!data || !data.data) {
                console.error("No valid data received");
                postsContainer.innerHTML = "No data available.";
                return;
            }

            const posts = data.data;
            posts.forEach(post => {
                console.log("Post Data:", post); 

                const postElement = document.createElement("div");
                postElement.classList.add("post");

                let formattedDate = "Unknown Date";
                if (post.Date_created) {
                    const dateObj = new Date(post.Date_created);
                    formattedDate = dateObj.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });
                }

                let imageUrl = "";
                if (post.Image) { 
                    imageUrl = `${IMAGE_BASE_URL}${post.Image}`;
                    console.log("Image URL:", imageUrl); 
                }

                postElement.innerHTML = `
                    <h2>${post.Title || "No Title"}</h2>
                    <img src="${imageUrl}" alt="Blog Image" class="blog-image" onerror="this.style.display='none'">
                    <p>${post.Content || "No Content"}</p>
                    <p class="post-date"><strong>Published on:</strong> ${formattedDate}</p>
                `;

                console.log("Generated Post Element:", postElement); 
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });
});
