function message(val){
    document.getElementById("message").innerText = "Saved!";
  }
  



saveButton = document.getElementById('save-button').addEventListener("click", saveMe);
function saveMe() {
    bot_url = document.getElementById("url-input").value
    token = document.getElementById("api-input").value
    console.log("bot url is" + bot_url);
    console.log("Api token is: " + token);
    chrome.storage.local.set({'boturl': bot_url}, function() {message('Settings saved');});
    chrome.storage.local.set({'bottoken': token}, function() {message('Settings saved');});
}
