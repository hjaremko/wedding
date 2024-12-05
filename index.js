function preferPolish() {
    localStorage.setItem("preferPolish", "true");
}

function preferEnglish() {
    localStorage.setItem("preferPolish", "false");
}

function getPreferredLanguage() {
    if (localStorage.getItem('preferPolish') === null) {
        const lang = navigator.language;
        console.log(`${lang}`);

        if (lang.includes("pl")) {
            preferPolish();
        } else {
            preferEnglish();
        }
    }

    const lang = localStorage.getItem('preferPolish')
    if (lang === "true") {
        location.href = 'pl/index.html';
    } else {
        location.href = 'en/index.html';
    }
}