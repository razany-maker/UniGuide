document.addEventListener('DOMContentLoaded', () => {

    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('.btn-primary');
            const originalText = btn.innerHTML;

            // Loading state animation
            btn.innerHTML = `<span class="loading-spinner"></span>`;
            btn.style.opacity = '0.8';
            btn.style.cursor = 'not-allowed';

            // Simulate Authentication
            setTimeout(() => {
                window.location.href = 'courses.html';
            }, 800);
        });
    }

    // Add interactivity to inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // --- Course Node Checkbox Logic ---
    const checkboxes = document.querySelectorAll('.course-checkbox');
    checkboxes.forEach(box => {
        box.addEventListener('change', (e) => {
            const node = e.target.closest('.course-node');
            if (e.target.checked) {
                node.classList.add('completed');
            } else {
                node.classList.remove('completed');
            }
        });
    });

    // --- Chatbot Logic ---
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            // 1. Add User Message
            const userMsg = document.createElement('div');
            userMsg.className = 'message user';
            userMsg.innerHTML = `<div class="bubble">${text}</div>`;
            chatMessages.appendChild(userMsg);

            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // 2. Simulate Bot Delay and Response
            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.className = 'message bot';
                botMsg.innerHTML = `<div class="bubble">I can certainly help you with that! According to your course plan, CS492 requires the successful completion of CS491 first.</div>`;
                chatMessages.appendChild(botMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {

    // --- Course Node Checkbox Logic ---
    const checkboxes = document.querySelectorAll('.course-checkbox');
    checkboxes.forEach(box => {
        box.addEventListener('change', (e) => {
            const node = e.target.closest('.course-node');
            if (e.target.checked) {
                node.classList.add('completed');
            } else {
                node.classList.remove('completed');
            }
        });
    });

    // --- Chatbot Logic ---
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            // 1. Add User Message
            const userMsg = document.createElement('div');
            userMsg.className = 'message user';
            userMsg.innerHTML = `<div class="bubble">${text}</div>`;
            chatMessages.appendChild(userMsg);

            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // 2. Simulate Bot Delay and Response
            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.className = 'message bot';
                botMsg.innerHTML = `<div class="bubble">I can certainly help you with that! According to your course plan, CS492 requires the successful completion of CS491 first.</div>`;
                chatMessages.appendChild(botMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        });
    }
});