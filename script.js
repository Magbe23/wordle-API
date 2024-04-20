// API Key de Wordnik
const apiKey = "TU_API_KEY"; // Reemplaza "TU_API_KEY" con tu API Key de Wordnik

// URL base de la API
const apiUrl = `https://api.wordnik.com/v4/words.json/randomWord?api_key=${apiKey}`;

// Función para obtener una palabra aleatoria de la API
async function obtenerPalabra() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Error al obtener la palabra");
        }
        const data = await response.json();
        return data.word.toLowerCase(); // Convertimos la palabra a minúsculas
    } catch (error) {
        console.error(error);
    }
}

// Función principal del juego
async function jugarWordle() {
    const palabraSecreta = await obtenerPalabra();
    console.log("La palabra secreta es:", palabraSecreta);
    document.getElementById("palabraSecreta").textContent = palabraSecreta;
}

// Llamada inicial al cargar la página
jugarWordle();
