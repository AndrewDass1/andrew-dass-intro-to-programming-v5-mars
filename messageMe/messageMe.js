let messageForm = document.getElementsByTagName("form");

let getSubmitButton = document.getElementById("submitButton");

getSubmitButton.addEventListener("click", forSubmitButton);

// make a callback function
function forSubmitButton(event) {
    event.preventDefault();

    let usersName = messageForm[0].usersName.value;
    console.log(usersName);

    let usersEmail = messageForm[0].usersEmail.value;
    console.log(usersEmail);

    let usersMessage = messageForm[0].usersMessage.value;
    console.log(usersMessage);

    // let submitButton = messageForm[0].submitButton;
    // console.log(submitButton);

    // Part 2 - Display Messages in List
    let messageSection = document.getElementById("messages");

    let messageList = document.querySelector("ul");

    let newMessage = document.createElement("li");

    let createLinkForName = document.createElement("a");
    createLinkForName.append("Name: " + usersName + ", Message: " + usersMessage);

    createLinkForName.href = "mailto:" + usersEmail;
    // console.log(createLinkForName)

    newMessage.append(createLinkForName);
    messageList.append(newMessage);

    // Part 3: 

    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    // console.log(removeButton);

    removeButton.addEventListener("click", forRemoveButton);

    function forRemoveButton() {
        let entry = document.getElementById("messagesBulletPoints");
        console.log(entry);
        entry.remove();
    }

    newMessage.append(document.createElement("br"))
    messageList.append(newMessage);


    newMessage.append(removeButton);
    messageList.append(newMessage);

    // End of Part 2 - Clear the Form

    document.getElementById("leave_message").reset();
}

forSubmitButton();


// Get the form

// Get the button within the form

// Add an event listener to the button

// Add console.log variables in callback function

// event.preventDefault(); prevents data in the textbox from disappearing after trying to submit it

// .reset() clears the form data on the webpage if event.preventdefault is there

// -----------------------------------

// 