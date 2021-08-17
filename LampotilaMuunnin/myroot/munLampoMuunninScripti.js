const lampotila = document.getElementById('lampotila')
const tulos = document.getElementById('tulos')
const syota = document.getElementById('syota')
const muunnaBtn = document.getElementById('muunna')

muunnaBtn.addEventListener('click', muunna)

function celciusIin(lampo) {
    return (lampo - 32) / 1.8
}

function fahrenheitTiin(lampo) {
    return (lampo * 1.8) + 32
}

function muunna() {
    let lampo = syota.value
    if (lampotila.value == 'Fahrenheit') {
        console.log(lampo)
        const tulosHTML = `
        <div class= "tulos">
        <p>• ${celciusIin(lampo).toFixed(1)} °C</p>
        <p>• ${celciusIin(lampo).toFixed(2)} °C</p>
        <p>• ${celciusIin(lampo).toFixed(3)} °C</p>
        </div>
        `
        tulos.innerHTML = tulosHTML;
    } else if (lampotila.value == 'Celcius') {
        const tulosHTML = `
        <div class= "tulos">
        <p>• ${fahrenheitTiin(lampo).toFixed(1)} °F</p>
        <p>• ${fahrenheitTiin(lampo).toFixed(2)} °F</p>
        <p>• ${fahrenheitTiin(lampo).toFixed(3)} °F</p>
        </div>
        `
        tulos.innerHTML = tulosHTML;
    }
}