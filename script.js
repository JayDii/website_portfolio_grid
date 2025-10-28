
const portfolioGrid = document.getElementById('portfolioGrid');

// ==================================================
// == SUBDOMAIN URLS      ==
// ==================================================
const subdomainUrls = [
    "https://jaydii.de/pw-gen/",
    "https://jaydii.de/oldagram",
    "https://jaydii.de/twydii/",
    "https://jaydii.de/mybgg/",
    "https://jaydii.de/bday-gif-t/",
    "https://jaydii.de/crazy-conversions/",
    "https://jaydii.de/inner_cat/"


];
// ==================================================

// Function to create and add portfolio items to the grid
function generatePortfolio() {
    // Clear the grid in case it has any placeholder content
    portfolioGrid.innerHTML = '';

    // Loop through each URL and create a portfolio item
    subdomainUrls.forEach(url => {
        // Ensure URL has a protocol
        if (!url.startsWith('http')) {
            url = 'https://' + url;
        }

        // Create the main container div
        const itemDiv = document.createElement('div');
        itemDiv.className = 'portfolio-item';

        // Create the iframe for the preview
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.loading = 'lazy'; // Lazy load for better performance
        iframe.setAttribute('title', `Preview of ${url}`);
        
        // Create the caption with a clickable link
        const captionDiv = document.createElement('div');
        captionDiv.className = 'portfolio-item-caption';
        
        const link = document.createElement('a');
        link.href = url;
        link.textContent = url;
        link.target = '_blank'; // Open link in a new tab
        link.rel = 'noopener noreferrer';
        
        captionDiv.appendChild(link);

        // Assemble the parts
        itemDiv.appendChild(iframe);
        itemDiv.appendChild(captionDiv);

        // Add the completed item to the grid
        portfolioGrid.appendChild(itemDiv);
    });
}

// Run the function to generate the portfolio on page load
generatePortfolio();