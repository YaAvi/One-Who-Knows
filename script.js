var output = document.getElementById('one'),
    numbers = ["אחד", "שניים", "שלושה", "ארבע", "חמישה", "שישה", "שבעה", "שמונה", "תשעה", "עשרה", "אחד עשר", "שנים עשר","שלושה עשר"],
    words = ["אלוהינו", "לוחות הברית", "אבות", "אמהות", "חומשי תורה", "סדרי משנה", "ימי שבתא", "ימי מילה", "ירחי לידה", "דיבריא", "כוכביא", "שבטיא","מדיא"],
    currentVerse = "";

for (var i = 0; i < numbers.length; i++) {
    currentVerse = numbers[i] + " " + words[i] + " " + currentVerse;
    output.innerHTML = output.innerHTML + numbers[i] + " מי יודע " + numbers[i] + " אני יודע " + currentVerse + "<br>";
}