let skills = ["Python", "JavaScript", "HTML", "CSS", "Git"];

let skillsSection = document.getElementById("skillsSection");

for (let i = 0; i < skills.length; i++) {
    function createAndPostSkillDiv() {
        let makeADiv = document.createElement("div" + String(i));

        makeADiv.innerHTML = skills[i];

        skillsSection.appendChild(makeADiv);
    }
    createAndPostSkillDiv();
}




