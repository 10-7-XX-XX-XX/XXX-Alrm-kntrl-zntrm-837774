const webhookURL = 'https://discord.com/api/webhooks/1264655977240592495/GxbjVnHuinv8fjyDbGzvOo77_x5PY515nhYPCv0M6CtGbeLoeqhb4x110B_gdWvvZsEX'; // Ersetze diesen Platzhalter durch deine tatsächliche Webhook-URL

function sendToWebhook(message) {
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
    })
    .then(response => {
        if(response.ok) {
            console.log('Nachricht gesendet:', message);
        } else {
            console.error('Fehler beim Senden der Nachricht:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Netzwerkfehler:', error);
    });
}