const parentContainerId = "townsquare";

const buttons = [
    {
        "text": "Sleep",
        "action": "/go_to_sleep"
    },
    {
        "text": "Wake Up",
        "action": "/wake_up"
    },
    {
        "text": "Wake Up Gently",
        action: "/wake_up_gently"
    },
    {
        "text": "Toggle Clockhand",
        "action": "/clockhand"
    }
];

const buttonContainer = () => {
    const template =
        `<div class="storyteller-discord">
            <h3>Storyteller Discord</h3>
            <ul></ul>
        </div>`

    const element = document.createElement("template")
    element.innerHTML = template;
    return element.content.firstChild;
}

const generateButtons = () => {
    const buttonList = document.querySelector("div.storyteller-discord ul")
    buttons.forEach(button => {
        const element = document.createElement("li")
        element.innerText = button.text;
        element.storyTellerAction = button.action;
        element.addEventListener("click", buttonHandler)
        buttonList.appendChild(element)
    });
};

const buttonHandler = function() {
    chrome.storage.sync.get(['boturl', 'bottoken'], data => {
        const requestURL = new URL(this.storyTellerAction, data.boturl);
        requestURL.searchParams.set("token", data.bottoken)
        httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', requestURL, true);
        httpRequest.send();
    });
}

const parentElement = document.getElementById(parentContainerId);
parentElement.appendChild(buttonContainer());
generateButtons();