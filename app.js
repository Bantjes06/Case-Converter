function upper() {
    let uc = document.getElementById("text-area").value;
    document.getElementById("text-area").value = uc.toUpperCase();
}

function lower() {
    let lc = document.getElementById("text-area").value;
    document.getElementById("text-area").value = lc.toLowerCase();
}

document.getElementById("proper-case").addEventListener("click", function () {
    let properCase = document.getElementById("text-area").value.toLowerCase();
    let caseProper = properCase.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    document.getElementById("text-area").value = caseProper;
})

document.getElementById("sentence-case").addEventListener("click", function () {
    let text = document.getElementById("text-area").value;
    let sentArr = text.split(". ");
    text = "";
    for (let i = 0; i < sentArr.length; i++) {
        let word = sentArr[i];
        let First = word.substring(0, 1).toUpperCase();
        let Leftovers = word.substring(1, word.length).toLowerCase();
        sentArr[i] = First + Leftovers;
        text += sentArr[i];
    }
    document.getElementById("text-area").value = sentArr.join(". ");
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function () {
    let text = document.getElementById("text-area").value;
    let filename = "text.txt"
    download(filename, text);
}, false);
