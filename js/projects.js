// Adding Fetch API - HANDLE your JSON DATA and Handling Errors


fetch('https://api.github.com/users/AndrewDass1/repos', { method:"GET"})
.then(response => {return response.json() })
.then(
    repositories => {console.log(repositories);

    projectsSection = document.getElementById("githubProjectNames");
    projectList = document.getElementById("showGithubProjectNames");

    // console.log(projectList)

    let num = 0;
    repositories.forEach(data => {
        let project = document.createElement("a");
        let createBulletPoints = document.createElement("li");
        let enterNewLine = document.createElement("br")

        project.innerText = repositories[num].name;

        project.href = "https:/github.com/" + (repositories[num].full_name);
        project.target = "_blank";

        createBulletPoints.append(project);
        projectList.append(createBulletPoints);
        projectList.append(enterNewLine);

        num += 1;
    })
})
.catch(error => console.log("Error. No data available."));


// So, fetch the url, with .then make a name for the variable and use arrow to get json with function
// use another then to make another variable to display the data