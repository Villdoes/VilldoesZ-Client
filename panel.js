function generateTellraw() {

    const text =
        document.getElementById("message").value;

    const edition =
        document.getElementById("edition").value;

    let result = "";

    if (edition === "java") {

        result =
        '/tellraw @a {"text":"' +
        text +
        '"}';

    } else {

        result =
        '/tellraw @a {"rawtext":[{"text":"' +
        text +
        '"}]}';
    }

    document.getElementById("output")
    .textContent = result;
}

function copyCommand() {

    navigator.clipboard.writeText(
        document.getElementById("output")
        .textContent
    );
}

function openChannel() {

    window.open(
        "https://youtube.com/@villdoescodes",
        "_blank"
     );
}
function sendFeedback() {

    window.open(
        "https://forms.gle/zpU1ZFhXthnhCSVs8",
        "_blank"
    );
}

function showTellraw() {

    document.getElementById("tellrawPage")
    .style.display = "block";

    document.getElementById("linksPage")
    .style.display = "none";

    document.getElementById("tellrawTab")
    .classList.add("active");

    document.getElementById("linksTab")
    .classList.remove("active");
}

function showLinks() {

    document.getElementById("tellrawPage")
    .style.display = "none";

    document.getElementById("linksPage")
    .style.display = "block";

    document.getElementById("linksTab")
    .classList.add("active");

    document.getElementById("tellrawTab")
    .classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {

    document
    .getElementById("generateBtn")
    .addEventListener("click", generateTellraw);

    document
    .getElementById("copyBtn")
    .addEventListener("click", copyCommand);

    document
    .getElementById("channelBtn")
    .addEventListener("click", openChannel);

    document
    .getElementById("tellrawTab")
    .addEventListener("click", showTellraw);

    document
    .getElementById("linksTab")
    .addEventListener("click", showLinks);

});