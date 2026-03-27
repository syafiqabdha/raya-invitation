# Use nginx as the base image
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy our website files to nginx html directory
COPY . /usr/share/nginx/html

# Make healthcheck script executable
RUN chmod +x /usr/share/nginx/html/healthcheck.sh

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD sh /usr/share/nginx/html/healthcheck.sh

# Start nginx
CMD ["nginx", "-g", "daemon off;"]