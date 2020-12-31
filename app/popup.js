function message(val) {
    document.getElementById("message").innerText = "Saved!";
}

document.getElementById('save-button').addEventListener("click", saveMe);
const urlField = document.getElementById("url-input")
const tokenField = document.getElementById("api-input")

function saveMe() {
    bot_url = urlField.value
    token = tokenField.value
    console.log("bot url is" + bot_url);
    console.log("Api token is: " + token);
    chrome.storage.sync.set({'boturl': bot_url}, () => message('Settings saved'));
    chrome.storage.sync.set({'bottoken': token}, () => message('Settings saved'));
}

function load() {
    chrome.storage.sync.get(['boturl', 'bottoken'], data => {
        urlField.value = data.boturl;
        tokenField.value = data.bottoken;
    });
}

load();
