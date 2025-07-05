
  const chatbotBtn = document.getElementById("chatbot-button");
  const chatbotPopup = document.getElementById("chatbot-popup");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBody = document.getElementById("chat-body");

  const botResponses = [
    "Please contact this number: +91 9994366777",
    "Reach out at: +91 9994366777",
    "Call us at: +91 9994366777"
  ];

  // Toggle chatbot
  chatbotBtn.addEventListener("click", () => {
    chatbotPopup.style.display = chatbotPopup.style.display === "flex" ? "none" : "flex";
  });

  closeBtn.addEventListener("click", () => {
    chatbotPopup.style.display = "none";
  });

  sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (text === "") return;

    const userMsg = document.createElement("div");
    userMsg.className = "message user-message";
    userMsg.textContent = text;
    chatBody.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.className = "message bot-message";
    botMsg.textContent = botResponses[Math.floor(Math.random() * botResponses.length)];
    chatBody.appendChild(botMsg);

    userInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  });