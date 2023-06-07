(function () {
    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    // set attributes
    dialog.setAttribute("header-text", "Pending Workflows");
    footer.setAttribute("slot", "footer");
    // content
    const custUserId = pageHeaderJsonData.userInfo.id;
    var wfNumber = 0
    function run() {
    // Creating Our XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Making our connection
    var url = 'https://apisalesdemo2.successfactors.eu/odata/v2/User('+custUserId+')';
    xhr.open("GET", url, true);
    // function execute after request is successful
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            wfNumber = this.responseText
            urlRes = "Number of Pending workflow: "+ wfNumber;
            content.innerHTML +='<a href=>'+ urlRes+ '</a>';

 


            }
        }
        // Sending our request
        xhr.send();
    }
    run();
    content.style.padding = "1rem";
    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Close";
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);
    // open dialog
    dialog.show();
})();
