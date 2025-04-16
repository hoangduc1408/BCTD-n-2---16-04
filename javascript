async function sendMessage() {
    const message = document.getElementById("userInput").value;
    const mode = document.getElementById("mode").value;
    const chatBox = document.getElementById("chatBox");
  
    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, mode })
    });
  
    const data = await response.json();
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.reply || '[Error]'}</p>`;
  }
