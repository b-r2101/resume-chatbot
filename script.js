// Resume data
const resume = {
  name: "Bassma",
  education: "Bachelor of Computer Science, University of Sussex",
  skills: ["Python", "AI", "Chatbots", "HTML", "Java", "CSS"],
  projects: ["AI Resume Bot", "Data Analysis Tool", "Streaklook Website"],
  experience: ["Freelance Python, Java, HTML projects and websites"]
};

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

    const botMsg = document.createElement