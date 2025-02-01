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


// Initial like count
let likeCount = 0;

// Function to toggle between Edit and Save modes for title and text
function toggleEditMode() {
    const title = document.querySelector('.post-title h2');
    const text = document.querySelector('.post-text p');
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');

    if (title.contentEditable === 'true') {
        // Switch to Save mode
        title.contentEditable = 'false';
        text.contentEditable = 'false';
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'none';
    } else {
        // Switch to Edit mode
        title.contentEditable = 'true';
        text.contentEditable = 'true';
        editButton.style.display = 'none';
        saveButton.style.display = 'inline-block';
    }
}

// Function to save changes made in Edit mode
function saveChanges() {
   
    toggleEditMode();
}

// JavaScript function for handling the "Like" button
 likeCount = 0; // Initialize the like count
let liked = false; // Indicates whether the post is liked

const likeButton = document.getElementById("likeButton");
const likeText = document.getElementById("likeText");
const likeStatement = document.getElementById("likeStatement");

likeButton.addEventListener("click", function () {
    if (!liked) {
        liked = true; // Mark the post as liked on the first click
        likeCount = 1; // Set initial like count to 1
    } else {
        likeCount++; // Increment the like count on subsequent clicks
    }

    updateLikeCount(); // Call the function to update the like count and statement
});

function updateLikeCount() {
    const likeTextContent = likeCount === 1 ? "person likes this" : "people like this";
    const likeStatementText = liked ? `${likeCount} ${likeTextContent}` : "Be the first one to like this";
    
    likeText.textContent = liked ? "Liked!" : "Like";
    likeStatement.textContent = likeStatementText;
}

// Function to add a comment
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const allComments = document.getElementById('allComments');

    if (commentInput.value.trim() !== '') {
        const commentDiv = document.createElement('div');
        commentDiv.textContent = commentInput.value;
        allComments.insertBefore(commentDiv, allComments.firstChild);
        commentInput.value = '';
    }
}