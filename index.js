
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


// Add this JavaScript code to handle the Sign In modal

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

// Add an event listener to the "Create Post" button
document.getElementById("createPostButton").addEventListener("click", showSignUpModal);

// Show the Create Post modal
function openCreatePostModal() {
    document.getElementById("createPostModal").style.display = "block";
}

// Hide the Create Post modal
function closeCreatePostModal() {
    document.getElementById("createPostModal").style.display = "none";
    // Clear input fields
    document.getElementById("postTitle").value = "";
    document.getElementById("postContents").value = "";
}

// Add an event listener to open the modal when "Create Post" is clicked
document.getElementById("createPostButton").addEventListener("click", openCreatePostModal);

// Add an event listener to close the modal when the close button is clicked
document.getElementById("closeCreatePostModal").addEventListener("click", closeCreatePostModal);