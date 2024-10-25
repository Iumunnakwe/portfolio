function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initial call to display the clock immediately

function changeBorderColor(color) {
    const boxes = document.querySelectorAll('.aboutMe, .skills, .connect, .clockB, .color, .projects, .resume');
    boxes.forEach(box => {
        box.style.borderColor = color; // Change border color of the boxes
    });
}
