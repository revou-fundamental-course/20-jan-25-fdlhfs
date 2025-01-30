document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let gender = document.getElementById("gender").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "<p style='color: red;'>Masukkan berat dan tinggi yang valid!</p>";
        return;
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Kurus";
    } else if (bmi < 24.9) {
        category = "Normal";
    } else if (bmi < 29.9) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Obesitas";
    }

    document.getElementById("result").innerHTML = `
        <p>BMI Anda: <strong>${bmi.toFixed(2)}</strong></p>
        <p>Kategori: <strong>${category}</strong></p>
        <p>(${gender === "male" ? "Laki-Laki" : "Wanita"})</p>
    `;
});