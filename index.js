function toSpeech() {
    try {
        const text = $("#input").val() || "Écrivez quelque chose de merde.";
        const utterance = new (SpeechSynthesisUtterance || window.SpeechSynthesisUtterance)();
        utterance.text = text;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    } catch(e) {
        alert(e.message);
    }
}
