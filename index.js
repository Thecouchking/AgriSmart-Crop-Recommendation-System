document.getElementById('recommendationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nitrogen = document.getElementById('nitrogen').value;
    const phosphorous = document.getElementById('phosphorous').value;
    const potassium = document.getElementById('potassium').value;
    const temperature = document.getElementById('temperature').value;
    const humidity = document.getElementById('humidity').value;
    const ph = document.getElementById('ph').value;
    const rainfall = document.getElementById('rainfall').value;
  
    const crops = ["Rice", "Wheat", "Maize", "Sugarcane", "Barley"];
    const recommendedCrop = crops[Math.floor(Math.random() * crops.length)];
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Recommended Crop: <strong>${recommendedCrop}</strong></p>
      <p>
        Inputs: Nitrogen: ${nitrogen}, Phosphorous: ${phosphorous}, Potassium: ${potassium},<br>
        Temperature: ${temperature}°C, Humidity: ${humidity}%, pH: ${ph}, Rainfall: ${rainfall}mm
      </p>
    `;
  });

const background = document.querySelector('.background-3d');

window.addEventListener('mousemove', (event) => {   
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (clientX - centerX) / 50;
    const offsetY = (clientY - centerY) / 50;

  background.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`;
});
