let skills = ["Python", "JavaScript", "HTML", "CSS", "Git"];

let skillsSection = document.getElementById("skillsSection");

for (let i = 0; i < skills.length; i++) {
    function createAndPostSkillDiv() {
        let makeADiv = document.createElement("div");

        makeADiv.innerHTML = skills[i];

        skillsSection.appendChild(makeADiv);
    }
    createAndPostSkillDiv();
}




