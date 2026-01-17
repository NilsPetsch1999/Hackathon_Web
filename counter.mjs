function setButtonValue(button, value) {
    button.textContent = String(value);
}

export function initCounter(doc) {
    const button = doc.getElementById("counter-button");
    if (!button) {
        return null;
    }

    let count = 0;
    setButtonValue(button, count);

    button.addEventListener("click", () => {
        count += 1;
        setButtonValue(button, count);
    });

    return button;
}

if (typeof window !== "undefined" && window.document) {
    initCounter(window.document);
}
