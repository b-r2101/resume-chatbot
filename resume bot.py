resume = {
    "name": "Bassma Ahmed",
    "education": "Bachelor of Computer Science, Sussex University",
    "skills": ["Python", "AI", "Chatbots", "HTML", "Java", "CSS"],
    "projects": ["AI Resume Bot", "Data Analysis Tool", "Streaklook Website"],
    "experience": [
        "Freelance Python, Java, HTML projects and websites"
    ]
}

print("👋 Hello! I’m your Resume Bot.")
print("You can either:")
print(" - Type a question (e.g., 'What are your skills?')")
print(" - Or choose from the menu below:")
print("1 - Name")
print("2 - Education")
print("3 - Skills")
print("4 - Projects")
print("5 - Experience")
print("0 - Exit")

while True:
    question = input("You: ").lower()
    

    if question in ["0", "bye", "goodbye", "exit", "quit"]:
        print("👋 Goodbye! Thanks for checking out my resume.")
        break
    
    elif question == "1":
        print("My name is", resume["name"])
    elif question == "2":
        print("My education:", resume["education"])
    elif question == "3":
        print("My skills are:", ", ".join(resume["skills"]))
    elif question == "4":
        print("I worked on:", ", ".join(resume["projects"]))
    elif question == "5":
        print("My work experience includes:", "; ".join(resume["experience"]))
    

    elif any(word in question for word in ["name", "who are you", "your name"]):
        print("My name is", resume["name"])
    elif any(word in question for word in ["education", "study", "school", "university"]):
        print("My education:", resume["education"])
    elif any(word in question for word in ["skills", "abilities", "what can you do"]):
        print("My skills are:", ", ".join(resume["skills"]))
    elif any(word in question for word in ["projects", "work on", "portfolio"]):
        print("I worked on:", ", ".join(resume["projects"]))
    elif any(word in question for word in ["experience", "jobs", "work history"]):
        print("My work experience includes:", "; ".join(resume["experience"]))
    else:
        print("I can tell you about my name, education, skills, projects, or experience!")
