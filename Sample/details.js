// JavaScript example to handle form submission
function handleRSVP() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const attending = document.getElementById("attending").value;

    alert(`Thank you, ${name}! Your RSVP has been received.`);

    // In a real application, you would send this data to a server
    // For example:
    // fetch('/rsvp', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ name, email, attending })
    // });

    return false; // Prevents the form from submitting traditionally
}
