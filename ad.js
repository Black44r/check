// index.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;
    const loader = document.getElementById("loader");
    const form = document.getElementById("form");

    if (password === "0123456789ABCDEF" | password === "DC0123456789" | password === "OCT01234567" | password === "BIN01") {
        form.style.display = "none";
        loader.style.display = "block";
        window.location.href = "eth.html";

        setTimeout(() => {
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully logged in.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                loader.style.display = "none";
                form.style.display = "block";
            });
        }, 2000); // Simulate a loading delay
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid key. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});

