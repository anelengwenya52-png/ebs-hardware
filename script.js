
// --- 1. BRICK ESTIMATOR MATH BRAINS ---
document.getElementById('calc-bricks-btn').addEventListener('click', () => {
    const length = parseFloat(document.getElementById('brick-length').value);
    const height = parseFloat(document.getElementById('brick-height').value);
    const output = document.getElementById('brick-output');

    if (isNaN(length) || isNaN(height) || length <= 0 || height <= 0) {
        alert('Please enter valid wall dimensions.');
        return;
    }
    const area = length * height;
    const totalBricks = Math.ceil(area * 52); // Standard South African single skin brick ratio
    
    output.style.display = 'block';
    output.innerHTML = `Total Surface Area: <strong>${area.toFixed(2)} m²</strong><br>Estimated Bricks Needed: <strong style="color: #15803d;">${totalBricks.toLocaleString()} units</strong>`;
});

// --- 2. PAINT ESTIMATOR MATH BRAINS ---
document.getElementById('calc-paint-btn').addEventListener('click', () => {
    const length = parseFloat(document.getElementById('paint-length').value);
    const height = parseFloat(document.getElementById('paint-height').value);
    const output = document.getElementById('paint-output');

    if (isNaN(length) || isNaN(height) || length <= 0 || height <= 0) {
        alert('Please enter valid wall dimensions.');
        return;
    }
    const area = length * height;
    const litersNeeded = Math.ceil((area / 10) * 2); // Assumes 10m² coverage per liter across 2 coats

    output.style.display = 'block';
    output.innerHTML = `Total Wall Area: <strong>${area.toFixed(2)} m²</strong><br>Estimated Paint Required (2 Coats): <strong style="color: #15803d;">${litersNeeded} Liters</strong>`;
});

// --- 3. CONCRETE VOLUME MATH BRAINS ---
document.getElementById('calc-concrete-btn').addEventListener('click', () => {
    const length = parseFloat(document.getElementById('slab-length').value);
    const width = parseFloat(document.getElementById('slab-width').value);
    const depth = parseFloat(document.getElementById('slab-depth').value);
    const output = document.getElementById('concrete-output');

    if (isNaN(length) || isNaN(width) || isNaN(depth) || length <= 0 || width <= 0 || depth <= 0) {
        alert('Please enter valid slab dimensions.');
        return;
    }
    const volume = length * width * depth; // Length x Width x Depth for total cubic meters

    output.style.display = 'block';
    output.innerHTML = `Total Concrete Volume Required: <strong style="color: #15803d;">${volume.toFixed(2)} m³</strong>`;
});
