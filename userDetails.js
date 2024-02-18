document.addEventListener("DOMContentLoaded", function() {
    const userId = new URLSearchParams(window.location.search).get("userId");
    const userInfoContainer = document.getElementById("userInfo");
    const userPostsContainer = document.getElementById("userPosts");
    const userAlbumsContainer = document.getElementById("userAlbums");

    // Foydalanuvchi ma'lumotlarini olish
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            // Foydalanuvchi ma'lumotlarini chiqarish
            userInfoContainer.innerHTML = `
                <h2>${user.name}</h2>         
            `;
        })
        .catch(error => console.error("Error fetching user info:", error));

    // Foydalanuvchi postlarini olish
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            // Postlarni chiqarish
            posts.forEach(post => {
                const listItem = document.createElement("li");
                listItem.textContent = post.title;
                userPostsContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching user posts:", error));

    // Foydalanuvchi albomlarini olish
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => response.json())
        .then(albums => {
            // Albomlarni chiqarish
            albums.forEach(album => {
                const listItem = document.createElement("li");
                listItem.textContent = album.title;
                userAlbumsContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching user albums:", error));
});
