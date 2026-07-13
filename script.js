// Function to update the degrees readout text dynamically
document.querySelectorAll('.joint-slider').forEach(slider => {
    slider.addEventListener('input', (e) => {
        const valId = e.target.id.replace('-slider', '-val');
        document.getElementById(valId).textContent = `${e.target.value}°`;
    });
});

// Function for the '+' and '-' buttons to move slider precisely
function nudge(sliderId, amount) {
    const slider = document.getElementById(sliderId);
    slider.value = parseInt(slider.value) + amount;
    
    // Trigger the input event manually to update text display
    slider.dispatchEvent(new Event('input'));
}