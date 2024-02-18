document.addEventListener("DOMContentLoaded", function() {
    const userList = document.getElementById("userList");

    // JSONPlaceholderdan foydalanuvchilarni olish
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            // Foydalanuvchilarni ro'yxatga qo'shish
            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
             <div class="box">
                <a href="userDetails.html?userId=${user.id}">${user.name}</a>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
              </div>
                `;
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching user list:", error));
});
