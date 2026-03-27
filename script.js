// =============== LUXURY RAYA INVITATION JAVASCRIPT ===============
// Premium Digital Invitation with Sophisticated Interactions

// =============== KONAMI CODE FOR ADMIN PANEL (↑↑↓↓←→←→BA) ===============
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiPosition = 0;

document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiPosition]) {
        konamiPosition++;
        if (konamiPosition === konamiCode.length) {
            activateAdminPanel();
            konamiPosition = 0; // Reset for next use
        }
    } else {
        konamiPosition = 0;
    }
});

// =============== COUNTDOWN TIMER WITH SMOOTH ANIMATION ===============
function updateCountdown() {
    const eventDate = new Date('2026-04-04T20:00:00+08:00').getTime(); // Malaysia Time
    const now = new Date().getTime();
    const distance = eventDate - now;

    // If event has passed
    if (distance < 0) {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display with animation
    updateCountdownElement("days", String(days).padStart(2, '0'));
    updateCountdownElement("hours", String(hours).padStart(2, '0'));
    updateCountdownElement("minutes", String(minutes).padStart(2, '0'));
    updateCountdownElement("seconds", String(seconds).padStart(2, '0'));
}

// Helper function to animate countdown number changes
function updateCountdownElement(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (element && element.textContent !== newValue) {
        // Add flash animation on change
        element.style.animation = 'countdownFlash 0.3s ease-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
        element.textContent = newValue;
    }
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// =============== LUXURY FORM HANDLING ===============
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value.trim(),
        attendance: document.getElementById('attendance').value,
        pax: parseInt(document.getElementById('pax').value),
        message: document.getElementById('message').value.trim(),
        timestamp: new Date().toISOString()
    };

    // Validation
    if (!formData.name || !formData.attendance || !formData.pax) {
        showFormMessage('Sila isi semua field yang diperlukan.', 'error');
        return;
    }

    if (formData.pax < 1) {
        showFormMessage('Bilangan pax mesti tidak kurang daripada 1.', 'error');
        return;
    }

    // Store in localStorage
    const rsvps = JSON.parse(localStorage.getItem('rayaRsvps') || '[]');
    rsvps.push(formData);
    localStorage.setItem('rayaRsvps', JSON.stringify(rsvps));

    // Success feedback
    showFormMessage('Terima kasih! Ucapan anda telah diterima dengan hormat.', 'success');
    
    // Reset form with luxury touch
    this.reset();
    document.getElementById('pax').value = '1'; // Reset to default 1
    
    // Subtle form reset animation
    const formElements = this.querySelectorAll('.form-input, .form-select, .form-textarea');
    formElements.forEach(el => {
        el.style.transform = 'scale(1.05)';
        setTimeout(() => {
            el.style.transform = '';
        }, 300);
    });
});

// =============== FORM MESSAGE SYSTEM ===============
function showFormMessage(message, type) {
    const messageEl = document.getElementById('formMessage');
    messageEl.textContent = message;
    messageEl.className = `form-message ${type}`;
    messageEl.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 5000);
}

// =============== ADMIN PANEL FUNCTIONALITY ===============
function activateAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    adminPanel.classList.add('active');
    
    // Focus on username field
    setTimeout(() => {
        document.getElementById('adminUsername').focus();
    }, 100);
}

// Admin Login Handling
document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value.trim();
    const adminMessage = document.getElementById('adminMessage');
    const rsvpDisplay = document.getElementById('rsvpDataDisplay');
    
    // Validate credentials
    if (username === 'firdaus' && password === 'firdaus1234') {
        adminMessage.textContent = 'Akses berjaya! Menunjukkan data RSVP...';
        adminMessage.className = 'admin-message success';
        adminMessage.style.display = 'block';
        
        // Load and display RSVP data
        loadAndDisplayRSVP(rsvpDisplay);
        
        // Hide form after successful login
        this.reset();
        setTimeout(() => {
            this.style.display = 'none';
        }, 1500);
    } else {
        adminMessage.textContent = 'Nama pengguna atau katalaluan salah. Sila cuba lagi.';
        adminMessage.className = 'admin-message error';
        adminMessage.style.display = 'block';
        this.reset();
    }
});

// Close Admin Panel
document.querySelector('.close-admin-btn').addEventListener('click', function() {
    document.getElementById('adminPanel').classList.remove('active');
});

// Load and Display RSVP Data for Admin
function loadAndDisplayRSVP(displayElement) {
    const rsvps = JSON.parse(localStorage.getItem('rayaRsvps') || '[]');
    
    if (rsvps.length === 0) {
        displayElement.innerHTML = '<p style="text-align: center; color: #666; font-style: italic;">Belum ada data RSVP yang diterima.</p>';
        return;
    }
    
    let statsHTML = `
        <div class="rsvp-stats">
            <p><strong>TOTAL RESPONS:</strong> ${rsvps.length} orang</p>
            <p><strong>HADIR:</strong> ${rsvps.filter(r => r.attendance === 'Hadir').length} orang</p>
            <p><strong>TIDAK HADIR:</strong> ${rsvps.filter(r => r.attendance === 'Tidak Hadir').length} orang</p>
        </div>
    `;
    
    let detailedHTML = '<div class="rsvp-list"><h4>Senarai Respons:</h4>';
    
    rsvps.forEach((rsvp, index) => {
        const date = new Date(rsvp.timestamp);
        const formattedDate = date.toLocaleDateString('ms-MY', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        detailedHTML += `
            <div class="rsvp-item">
                <div class="rsvp-header">
                    <span class="rsvp-number">#${index + 1}</span>
                    <span class="rsvp-status ${rsvp.attendance === 'Hadir' ? 'status-hadir' : 'status-tidak-hadir'}">
                        ${rsvp.attendance === 'Hadir' ? 'HADIR' : 'TIDAK HADIR'}
                    </span>
                </div>
                <div class="rsvp-details">
                    <p><strong>Nama:</strong> ${rsvp.name}</p>
                    <p><strong>Bilangan Pax:</strong> ${rsvp.pax} orang</p>
                    <p><strong>Ucapan:</strong> "${rsvp.message || 'Tiada ucapan yang diberikan'}"</p>
                    <p><strong>Waktu:</strong> ${formattedDate}</p>
                </div>
            </div>
        `;
    });
    
    detailedHTML += '</div>';
    displayElement.innerHTML = statsHTML + detailedHTML;
}

// =============== ENHANCE USER INTERACTIONS ===============
// Add subtle interactions to make it feel premium

// Add ripple effect to buttons
function addRippleEffect(button) {
    button.addEventListener('click', function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = '0px';
        ripple.style.height = '0px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transition = 'width 0.6s ease, height 0.6s ease, opacity 0.6s ease';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.style.width = '200px';
            ripple.style.height = '200px';
            ripple.style.opacity = '0';
        }, 0);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Apply ripple effect to all buttons
document.querySelectorAll('.luxury-button, .rsvp-submit-btn, .admin-btn').forEach(button => {
    addRippleEffect(button);
});

// Add subtle tilt effect on mouse move (desktop only)
if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelector('.luxury-card').addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / centerY * 5; // Max 5deg tilt
        const angleY = (centerX - x) / centerX * 5; // Max 5deg tilt (inverted)
        
        this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1,1,1)`;
    });
    
    // Reset tilt when mouse leaves
    document.querySelector('.luxury-card').addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    });
}

// =============== PAGE LOAD ANIMATIONS ===============
// Ensure smooth loading experience
window.addEventListener('load', function() {
    // Hide address bar on mobile after load
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 100);
    
    // Initial countdown update
    updateCountdown();
});

// =============== SERVICE WORKER FOR PWA (OPTIONAL ENHANCEMENT) ===============
// Uncomment if you want PWA capabilities for offline access
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}
*/