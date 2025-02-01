// Get the modal and buttons
const signUpModal = document.getElementById("signUpModal");
const closeSignUpModal = document.getElementById("closeSignUpModal");
const signUpButton = document.getElementById("signUpButton");
const signUpButtonModal = document.getElementById("signUpButtonModal");
const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const signupErrorMessage = document.getElementById("signupErrorMessage");

// Open the modal when the "Sign Up" button is clicked
signUpButton.addEventListener("click", () => {
    signUpModal.style.display = "block";
});

// Close the modal when the close button is clicked
closeSignUpModal.addEventListener("click", () => {
    signUpModal.style.display = "none";
    clearSignUpForm();
});

// Close the modal when clicking outside the modal
window.addEventListener("click", (event) => {
    if (event.target === signUpModal) {
        signUpModal.style.display = "none";
        clearSignUpForm();
    }
});

// Validate and handle Sign Up button click in the modal
signUpButtonModal.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (!name || !username || !password || !confirmPassword) {
        signupErrorMessage.textContent = "Please fill out all fields.";
    } else if (password !== confirmPassword) {
        signupErrorMessage.textContent = "Passwords do not match.";
    } else {
        // You can perform further actions (e.g., API requests) here for sign-up
        signUpModal.style.display = "none";
        clearSignUpForm();
    }
});

// Function to clear the Sign Up form
function clearSignUpForm() {
    nameInput.value = "";
    usernameInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    signupErrorMessage.textContent = "";
}



// Function to open the Sign In modal
function openSignInModal() {
    var signInModal = document.getElementById("signInModal");
    signInModal.style.display = "block";
}

// Function to close the Sign In modal
function closeSignInModal() {
    var signInModal = document.getElementById("signInModal");
    signInModal.style.display = "none";
}

// Function to show the Sign Up modal and close the Sign In modal
function showSignUpModal() {
    closeSignInModal();
    openSignUpModal();
}

// Event listeners for opening and closing the Sign In modal
document.getElementById("signInButton").addEventListener("click", openSignInModal);
document.getElementById("closeSignInModal").addEventListener("click", closeSignInModal);
document.getElementById("showSignUpModal").addEventListener("click", showSignUpModal);

// Function to show the Sign Up modal and close the Sign In modal
function showSignUpModal() {
    closeSignInModal(); // Close the Sign In modal
    openSignUpModal(); // Open the Sign Up modal
}

// Function to show shadow on post hover
function showShadow(postCard) {
    postCard.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.1)';
}

// Function to hide shadow on post mouseout
function hideShadow(postCard) {
    postCard.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)';
}

// Function to show the delete modal
function showDeleteModal() {
    var modal = document.getElementById("deleteModal");
    modal.style.display = "block";
}

// Function to close the delete modal
function closeDeleteModal() {
    var modal = document.getElementById("deleteModal");
    modal.style.display = "none";
}

// Function to handle post deletion
function deletePost() {
    // Perform the post deletion logic here
    
    var modal = document.getElementById("deleteModal");
    modal.style.display = "none";
    var selectedPost = document.querySelector(".post-card.selected");
    if (selectedPost) {
        selectedPost.style.display = "none";
    }
}


var trashIcons = document.querySelectorAll(".fa-trash");
trashIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
        // Mark the parent post card as selected
        var postCard = icon.closest(".post-card");
        postCard.classList.add("selected");
        // Show the delete modal
        showDeleteModal();
    });
});

var yesButton = document.querySelector("#deleteModal .modal-yes-button");
var noButton = document.querySelector("#deleteModal .modal-no-button");

yesButton.addEventListener("click", function () {
    // Call the deletePost function when "Yes" is clicked
    deletePost();
});

noButton.addEventListener("click", function () {
    closeDeleteModal();
});