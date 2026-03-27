# Raya Invitation Website

A modern luxury responsive website for Hari Raya Aidilfitri open house invitation, designed specifically for mobile viewing.

## Features

- **Modern Luxury Design** with navy blue background and gold accents
- **Responsive Layout** optimized for mobile devices
- **Luxurious Typography** using Floraison des Amours (for host names) and Coolvetica (for all other text)
- **Real-time Countdown Timer** to the event
- **RSVP Form** for guest responses
- **Admin Access** to view RSVP data
- **Subtle Floral Pattern** background in gold monochrome
- **Google Maps Integration** for event location

## Design Specifications

### Colors
- **Background**: Navy Blue (#000080)
- **Accents**: Monochrome Gold (#d4af37)
- **Text**: White (#ffffff) for high contrast
- **Button Background**: Gold (#d4af37) with White Text (#ffffff)

### Fonts
- **Host Names**: Floraison des Amours (Gold color #d4af37)
- **All Other Text**: Coolvetica (White color #ffffff)

## Deployment Instructions

### Docker Deployment (Recommended for Coolify)

#### Prerequisites
- Docker installed on your server
- Coolify account (if deploying to Coolify)

#### Option 1: Deploy via Docker CLI

1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   cd raya-invitation
   ```

2. Build and run the Docker container:
   ```bash
   docker build -t raya-invitation .
   docker run -d -p 80:80 --name raya-invitation raya-invitation
   ```

3. Access the website at `http://your-server-ip`

#### Option 2: Deploy via Docker Compose

1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   cd raya-invitation
   ```

2. Start the services:
   ```bash
   docker-compose up -d
   ```

3. Access the website at `http://your-server-ip`

#### Option 3: Deploy to Coolify

1. In your Coolify dashboard, click "Add Resource"
2. Select "Docker" as the resource type
3. Choose either:
   - **Repository**: Connect your Git repository and Coolify will auto-detect the Dockerfile
   - **Manual Docker**: Paste the Dockerfile contents directly
4. Configure the service:
   - Port: 80 (HTTP)
   - Enable automatic SSL if using a custom domain
5. Deploy the service

### Manual Deployment (Without Docker)

If you prefer not to use Docker, you can deploy the static files directly to any web server:

1. Copy all files (`index.html`, `styles.css`, `script.js`) to your web server's public directory
2. Ensure the server serves these files as static content
3. Access the website through your domain/IP

## Local Development

To run the website locally for development:

1. Simply open `index.html` in your web browser
2. Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## Project Structure

```
raya-invitation/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker compose configuration
├── README.md           # This file
└── AGENTS.md           # Project intelligence for AI agents
```

## How It Works

### Countdown Timer
The JavaScript code calculates the time remaining until April 4, 2026 at 8:00 PM and updates the display every second.

### RSVP Form
- Form data is validated before submission
- Data is stored in the browser's localStorage
- On successful submission, a confirmation message is displayed
- The form resets after submission

### Admin Access
- Press `Ctrl+Shift+A` to toggle the admin login panel
- Login with username: `firdaus` and password: `firdaus1234`
- After successful login, you can view all submitted RSVPs
- Data persists in localStorage even after browser refresh

### Responsive Design
The website is designed with a mobile-first approach:
- Maximum width of 480px for optimal mobile viewing
- Flexible layout that adapts to different screen sizes
- Touch-friendly form elements and buttons
- Optimized typography for readability on small screens

## Customization

### Changing Event Details
Edit the following in `index.html`:
- Host names (in the `.host-name` element)
- Date, time, and location (in `.detail-value` elements)
- Google Maps link (in the `.map-link` element)
- Countdown target date (in `script.js`)

### Modifying Styles
Edit `styles.css` to change:
- Colors (update the CSS variables or hardcoded values)
- Font sizes and spacing
- Background patterns
- Animation effects

### Updating Content
Modify the text content in `index.html` to suit your needs while preserving the class names and structure.

## Security Notes

For production deployment, consider these enhancements:
1. Replace localStorage with a proper backend database for RSVP storage
2. Implement server-side form validation and processing
3. Use environment variables for sensitive data
4. Add rate limiting to prevent form spam
5. Implement HTTPS (automatically handled by Coolify with SSL)

## Browser Support

The website is compatible with all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers on iOS and Android

## License

This project is created for personal use. Feel free to adapt and modify for your own events.