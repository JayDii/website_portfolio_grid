document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Element suchen
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    // Sicherheits-Check
    if (!portfolioGrid) {
        console.error("FEHLER: Kein Element mit ID 'portfolioGrid' gefunden!");
        return;
    }

    // 2. Daten
    const portfolioItems = [
        {
            url: "https://jaydii-insight-light.hf.space",
            linkUrl: "https://huggingface.co/spaces/JayDii/insight-light", 
            title: "InSight Lite",
            description: "KI-Prototyp zur Analyse und Klassifizierung von Polizeiberichten."
        },
        {
            url: "https://jaydii.de/pw-gen/",
            title: "Passwort Generator",
            description: "Tool zur Erstellung komplexer Passwörter."
        },
        {
            url: "https://jaydii.de/oldagram",
            title: "Oldagram",
            description: "Mein Versuch, das Instagram Frontend nachzubauen."
        },
        {
            url: "https://jaydii.de/twydii/",
            title: "Twydii",
            description: "Ein Twitter-Frontend-Klon."
        },
        {
            url: "https://jaydii.de/mybgg/",
            title: "MyBGG",
            description: "Meine Brettspiel-Sammlung."
        },
        {
            url: "https://jaydii.de/bday-gif-t/",
            title: "B-Day GIF-t",
            description: "Eine GIF Geburtstags Gruß-Website."
        },
        {
            url: "https://jaydii.de/inner_cat/",
            title: "Inner Cat",
            description: "Finde deine innere Katze - eine interaktive Persönlichkeits-App."
        }
    ];

    // 3. Funktion zum Generieren
    function generatePortfolio() {
        portfolioGrid.innerHTML = '';

        portfolioItems.forEach(item => {
            let previewUrl = item.url;
            let clickUrl = item.linkUrl || item.url; 

            if (!previewUrl.startsWith('http')) previewUrl = 'https://' + previewUrl;
            if (!clickUrl.startsWith('http')) clickUrl = 'https://' + clickUrl;

            // --- HAUPT CONTAINER ---
            const itemDiv = document.createElement('div');
            itemDiv.className = 'portfolio-item';
            
            // --- IFRAME ---
            const iframe = document.createElement('iframe');
            iframe.src = previewUrl;
            iframe.loading = 'lazy';
            iframe.setAttribute('title', `Preview of ${item.title}`);
            iframe.className = 'portfolio-iframe'; // Klasse für CSS
            
            // Error Handling (Logik bleibt im JS)
            iframe.onerror = () => { iframe.style.display = 'none'; };

            // --- TEXT BEREICH ---
            const captionDiv = document.createElement('div');
            captionDiv.className = 'portfolio-item-caption';
            
            // TITEL LINK
            const titleLink = document.createElement('a');
            titleLink.href = clickUrl;
            titleLink.textContent = item.title;
            titleLink.className = 'portfolio-title'; // Klasse für CSS
            titleLink.target = '_blank';
            titleLink.rel = 'noopener noreferrer';
            
            // BESCHREIBUNG
            const descText = document.createElement('p');
            descText.textContent = item.description;
            descText.className = 'portfolio-desc'; // Klasse für CSS
            
            // ZUSAMMENBAUEN
            captionDiv.appendChild(titleLink);
            captionDiv.appendChild(descText);

            itemDiv.appendChild(iframe);
            itemDiv.appendChild(captionDiv);

            portfolioGrid.appendChild(itemDiv);
        }); 
    } 

    // Ausführen
    generatePortfolio();

});