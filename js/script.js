let users = []; 

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Display the logged-in user's name on the dashboard
        document.getElementById('profile-name').textContent = "Welcome, " + user.username + "!";

        document.getElementById('login-page').style.display = 'none';
        document.getElementById('signup-page').style.display = 'none';
        document.getElementById('log_reg').style.display = 'none';

        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('import-export').style.display = 'block';
     
        alert("Welcome, " + user.username + "!");
    } else {
        alert("Invalid username or password.");
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        if (users.find(user => user.username === username)) {
            alert("Username already taken, please choose another one.");
        } else {
            users.push({ username, email, password });
            alert("Account created successfully! Please log in.");
            document.getElementById('signup-page').style.display = 'none';
            document.getElementById('login-page').style.display = 'block';
        }
    } else {
        alert("Please fill in all the fields.");
    }
});

document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('signup-page').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
});

document.getElementById('process-ai').addEventListener('click', function() {
    const notes = document.getElementById('notes-input').value;
    if (notes) {
        const enhancedNotes = notes + "\n\nAI Tips: Don't forget to keep your points concise.";
        document.getElementById('ai-result').value = enhancedNotes;
    } else {
        alert("Please enter some notes.");
    }
});

document.getElementById('save-result').addEventListener('click', function() {
    const result = document.getElementById('ai-result').value;
    if (result && result !== "Processed AI result will appear here...") {
        alert("Notes saved successfully!");
    } else {
        alert("No result to save.");
    }
});

document.getElementById('delete-result').addEventListener('click', function() {
    document.getElementById('ai-result').value = "Processed AI result will appear here...";
    alert("Result deleted.");
});

document.getElementById('generate-again').addEventListener('click', function() {
    document.getElementById('process-ai').click();  
});

document.getElementById('edit-result').addEventListener('click', function() {
    document.getElementById('ai-result').removeAttribute('readonly');
    alert("You can now edit the AI-enhanced notes.");
});

document.getElementById('export-txt').addEventListener('click', function() {
    const result = document.getElementById('ai-result').value;
    if (result && result !== "Processed AI result will appear here...") {
        const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'ai_notes.txt';
        link.click();
    } else {
        alert("No result to export.");
    }
});

document.getElementById('logout').addEventListener('click', function() {
    // Hide the dashboard and import/export section

    
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('import-export').style.display = 'none';
    
    // Display the login page
    document.getElementById('log_reg').style.display = 'block';
    document.getElementById('login-page').style.display = 'block';
    
    // Clear the user's name display
    document.getElementById('profile-name').textContent = "Welcome, [User's Name]";
    
    // Reset forms if needed
    document.getElementById('login-form').reset();
    document.getElementById('signup-form').reset();
    
    alert("You have logged out.");
});

