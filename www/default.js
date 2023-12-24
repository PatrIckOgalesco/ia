// for default - text

document.addEventListener('DOMContentLoaded', function () {
    const defaultText = document.getElementById('default-text');
    const chatContainer = document.getElementById('chat-display');
    const userInput = document.getElementById('user-input');
    
    // Load chat history from local storage
    const storedChats = localStorage.getItem('all-chats');

    if (storedChats) {
        chatContainer.innerHTML = storedChats;
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
    } else {
        showDefaultText();
    }

    // Listen for user input
    userInput.addEventListener('input', function() {
        if (userInput.value.trim() !== '' && chatContainer.childElementCount === 0) {
            hideDefaultText();
        }
    });

    // Listen for the first chatbot response to show/hide default text
    document.addEventListener('GemliFirstResponse', function() {
        if (chatContainer.childElementCount > 0) {
            hideDefaultText();
        } else {
            showDefaultText();
        }
    });
});

// Function to hide the default text
function hideDefaultText() {
    const defaultText = document.getElementById('default-text');
    defaultText.style.display = 'none';
}

// Function to show the default text
function showDefaultText() {
    const defaultText = document.getElementById('default-text');
    defaultText.style.display = 'block';
}



//for nav-btn

document.getElementById('nav-btn').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
});
