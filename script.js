// script.js
function checkAnswers() {
    const answers = {
        q1: "marmore",
        q2: "admirabantur",
        q3: "superata",
        q4: "caerulei",
        q5: "diu",
        q6: "sacrificare",
        q7: "orare"
    };

    let score = 0;
    let total = 7;

    if (document.getElementById('q1').value.toLowerCase() === answers.q1.toLowerCase()) {
        score++;
    }
    if (document.getElementById('q2').value.toLowerCase() === answers.q2.toLowerCase()) {
        score++;
    }
    if (document.getElementById('q3').value.toLowerCase() === answers.q3.toLowerCase()) {
        score++;
    }
    if (document.getElementById('q4').value.toLowerCase() === answers.q4.toLowerCase()) {
        score++;
    }
    if (document.getElementById('q5').value.toLowerCase() === answers.q5.toLowerCase()) {
        score++;
    }
    if (document.getElementById('q6').value.toLowerCase() === answers.q6.toLowerCase()) {
        score++;
    }
    if (document.getElementById('q7').value.toLowerCase() === answers.q7.toLowerCase()) {
        score++;
    }

    let resultText = `${score} ex ${total} vera sunt.`;
    document.getElementById('result').innerText = resultText;
}
