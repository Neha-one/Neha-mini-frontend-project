function countChar() {
    let text = document.getElementById("text").value;
    let total = text.length;

    document.getElementById("total").innerText = total;
    document.getElementById("remain").innerText = 100 - total;
}