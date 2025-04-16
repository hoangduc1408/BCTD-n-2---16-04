<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Language Tutor Bot</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Language assistant</h1>
    <select id="mode">
      <option value="auto">🌐 Auto Detect</option>
      <option value="vocab">📘 Vocabulary</option>
      <option value="grammar">📚 Grammar</option>
      <option value="quiz">📝 Quiz</option>
      <option value="practice">🗣️ Practice</option>
    </select>
    <textarea id="userInput" placeholder="Type your message here..."></textarea>
    <button onclick="sendMessage()">Send</button>
    <div id="chatBox"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
