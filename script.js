// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('2026-04-04T20:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

// Call the function immediately to avoid delay
updateCountdown();

// RSVP Form Handling
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const attendance = document.getElementById('attendance').value;
    const pax = document.getElementById('pax').value;
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
    
    // Simple validation
    if (!name || !attendance || !pax) {
        formMessage.textContent = 'Sila isi semua field yang diperlukan.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
        return;
    }
    
    // In a real application, this would send data to a server
    // For this demo, we'll simulate success and store in localStorage
    
    // Create RSVP object
    const rsvpData = {
        name: name,
        attendance: attendance,
        pax: parseInt(pax),
        message: message,
        timestamp: new Date().toISOString()
    };
    
    // Get existing RSVPs or create empty array
    let rsvps = JSON.parse(localStorage.getItem('rayaRsvps') || '[]');
    
    // Add new RSVP
    rsvps.push(rsvpData);
    
    // Save back to localStorage
    localStorage.setItem('rayaRsvps', JSON.stringify(rsvps));
    
    // Show success message
    formMessage.textContent = 'Terima kasih! RSVP anda telah diterima.';
    formMessage.className = 'form-message success';
    formMessage.style.display = 'block';
    
    // Reset form
    this.reset();
});

// Admin Login Handling
document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value.trim();
    const adminMessage = document.getElementById('adminMessage');
    
    // Check credentials (in a real app, this would be done securely on server)
    if (username === 'firdaus' && password === 'firdaus1234') {
        adminMessage.textContent = 'Log masuk berjaya!';
        adminMessage.className = 'admin-message success';
        adminMessage.style.display = 'block';
        
        // Show RSVP data
        showRsvpData();
    } else {
        adminMessage.textContent = 'Username atau password salah.';
        adminMessage.className = 'admin-message error';
        adminMessage.style.display = 'block';
    }
    
    // Reset form
    this.reset();
});

// Function to display RSVP data for admin
function showRsvpData() {
    const rsvps = JSON.parse(localStorage.getItem('rayaRsvps') || '[]');
    
    if (rsvps.length === 0) {
        alert('Tiada data RSVP yang ditemui.');
        return;
    }
    
    let rsvpText = 'DATA RSVP:\n\n';
    rsvps.forEach((rsvp, index) => {
        rsvpText += `#${index + 1}\n`;
        rsvpText += `Nama: ${rsvp.name}\n`;
        rsvpText += `Kehadiran: ${rsvp.attendance}\n`;
        rsvpText += `Bilangan Pax: ${rsvp.pax}\n`;
        rsvpText += `Ucapan: ${rsvp.message || 'Tiada'}\n`;
        rsvpText += `Waktu: ${new Date(rsvp.timestamp).toLocaleString()}\n`;
        rsvpText += '------------------------\n\n';
    });
    
    alert(rsvpText);
}

// Toggle admin login visibility (for demo purposes)
// In production, this would be accessed via a secure method
document.addEventListener('keydown', function(e) {
    // Press Ctrl+Shift+A to show admin login
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        const adminLogin = document.querySelector('.admin-login');
        if (adminLogin.style.display === 'none' || adminLogin.style.display === '') {
            adminLogin.style.display = 'block';
        } else {
            adminLogin.style.display = 'none';
        }
    }
});