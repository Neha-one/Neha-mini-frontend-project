async function checkRoom() {

    const room = document.getElementById("room").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;

    const response = await fetch(`/check?room=${room}&day=${day}&time=${time}`);
    const data = await response.json();

    if (data.status === "Occupied") {
        document.getElementById("result").innerHTML =
            `❌ Occupied <br>
            Subject: ${data.subject} <br>
            Teacher: ${data.teacher} <br>
            Section: ${data.section} <br>
            Time: ${data.time}`;
    } else {
        document.getElementById("result").innerHTML = "✅ Room Available";
    }
}

async function checkAll() {

    const day = document.getElementById("allDay").value;
    const time = document.getElementById("allTime").value;

    const response = await fetch(`/checkAll?day=${day}&time=${time}`);
    const data = await response.json();

    let output = "";

    data.forEach(room => {
        output += `<p>${room.room} : ${room.status}</p>`;
    });

    document.getElementById("allResult").innerHTML = output;
}