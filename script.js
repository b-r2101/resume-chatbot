// Resume data
const resume = {
  name: "Bassma",
  education: "Bachelor of Computer Science, University of Sussex",
  skills: ["Python", "AI", "Chatbots", "HTML", "Java", "CSS"],
  projects: ["AI Resume Bot", "Data Analysis Tool", "Streaklook Website"],
  experience: ["Freelance Python, Java, HTML projects and websites"]
};

// Show quick reply buttons
function showQuickReplies() {
  const quickReplies = document.getElementById("quickReplies");
  quickReplies.innerHTML = ""; // clear old buttons

  const options = ["Name", "Education", "Skills", "Projects", "Experience"];
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      document.getElementById("userInput").value = opt;
      sendMessage();
    };
    quickReplies.appendChild(btn);
  });
}

// Toggle dark mode
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Chatbot message handling
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const userText = input.value.toLowerCase();

  if (!userText) return;

  // Show user message
  const userMsg = document.createElement("li");
  userMsg.className = "chat-outgoing";
  userMsg.textContent = input.value;
  chatbox.appendChild(userMsg);

  // Typing indicator
  const typing = document.createElement("li");
  typing.className = "typing";
  typing.innerHTML = "<span></span><span></span><span></span>";
  chatbox.appendChild(typing);

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;

  // Delay bot response to simulate typing
  setTimeout(() => {
    chatbox.removeChild(typing);

    let response = "I can tell you about my name, education, skills, projects, or experience!";
    if (userText.includes("name")) response = "My name is " + resume.name;
    else if (userText.includes("education")) response = "My education: " + resume.education;
    else if (userText.includes("skills")) response = "My skills: " + resume.skills.join(", ");
    else if (userText.includes("projects")) response = "My projects: " + resume.projects.join(", ");
    else if (userText.includes("experience")) response = "My experience: " + resume.experience.join("; ");

    const botMsg = document.createElement("li");
    botMsg.className = "chat-incoming";
    botMsg.textContent = response;
    chatbox.appendChild(botMsg);

    chatbox.scrollTop = chatbox.scrollHeight;
  }, 1000);
}

// Apply saved theme + show options on load
window.onload = () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  }
  showQuickReplies(); // ensures options appear
};
