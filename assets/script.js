function formatText() {
    const inputText = document.getElementById('inputText').value;
    const formatType = document.querySelector('input[name="format"]:checked').value;
    let outputText = '';

    switch (formatType) {
        case 'capitalize':
            outputText = capitalizeSentences(inputText);
            break;
        case 'uppercase':
            outputText = inputText.toUpperCase();
            break;
        case 'lowercase':
            outputText = inputText.toLowerCase();
            break;
        case 'removeSpaces':
            outputText = removeExtraSpaces(inputText);
            break;
    }

    document.getElementById('outputText').innerText = outputText;
}

function capitalizeSentences(text) {
    return text.replace(/(?:^|[.!?]\s+)([a-z])/g, function(match, p1) {
        return match.toUpperCase();
    });
}

function removeExtraSpaces(text) {
    return text.replace(/\s+/g, ' ').trim();
}