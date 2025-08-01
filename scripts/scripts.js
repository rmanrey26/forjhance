document.addEventListener('DOMContentLoaded', function () {
    // Create background animations
    createFlowersAndHearts();

    // Music controls
    const bgMusic = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    const muteBtn = document.getElementById('muteBtn');

    playBtn.addEventListener('click', function () {
        if (bgMusic.paused) {
            bgMusic.play();
            playBtn.textContent = '⏸️ Pause Music';
        } else {
            bgMusic.pause();
            playBtn.textContent = '🎵 Play Music';
        }
    });

    muteBtn.addEventListener('click', function () {
        bgMusic.muted = !bgMusic.muted;
        muteBtn.textContent = bgMusic.muted ? '🔇' : '🔊';
    });

    // Ingredients data
    const ingredients = [
        {
            name: "Ube Ice Cream",
            description: "Cool, chill, and always a classic — like your vibe."
        },
        {
            name: "Stick-O",
            description: "Sweet, simple, and makes everything better — kinda like your presence."
        },
        {
            name: "Pinipig",
            description: "Adds that extra crunch — like your unexpected reels from months ago."
        },
        {
            name: "Kaong",
            description: "Small like ur height — but still stands out. 😂"
        },
        {
            name: "Nata",
            description: "Soft, bouncy, and fun — just like our random chats."
        },
        {
            name: "Beans",
            description: "Always present, lowkey solid - like you in training"
        },
        {
            name: "Langka",
            description: "A bit different, super memorable — in a good way!"
        },
        {
            name: "Halaya",
            description: "Smooth and comforting — like your calming presence."
        },
        {
            name: "Tapioca",
            description: "Little bits of joy — like the good vibes you bring."
        },
        {
            name: "Leche Flan",
            description: "Soft, sweet, and always welcome — like a good convo at the right time."
        },
        {
            name: "Banana",
            description: "Simple, reliable, and naturally awesome."
        }
    ]
        ;

    // Create ingredient elements in rows
    const ingredientsContainer = document.querySelector('.ingredients-container');

    ingredients.forEach(ingredient => {
        const ingredientEl = document.createElement('div');
        ingredientEl.className = 'ingredient';
        ingredientEl.innerHTML = `
            <h3>${ingredient.name}</h3>
            <p>${ingredient.description}</p>
        `;
        ingredientsContainer.appendChild(ingredientEl);
    });
});


function createFlowersAndHearts() {
    const background = document.querySelector('.background-animation');
    const numFlowers = 70;
    const numHearts = 70;

    // Clear existing
    background.innerHTML = '';

    // Flower emoji options with blue tints
    const flowerEmojis = ["🌹", "🌷", "🌸", "💐", "🌼", "🏵️", "🌺", "🌻", "💮"];
    const flowerColors = ["#66B3FF", "#1E90FF", "#4682B4", "#00BFFF", "#87CEFA", "#6495ED"];

    // Create flowers
    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowerEmojis[i % flowerEmojis.length];
        flower.style.color = flowerColors[i % flowerColors.length];
        flower.style.position = 'absolute';
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.top = `${Math.random() * 100}vh`;
        flower.style.animationDelay = `${Math.random() * 8}s`;
        flower.style.fontSize = `${24 + Math.random() * 20}px`;
        flower.style.zIndex = '1';
        flower.style.opacity = '0'; // Start invisible for animation
        flower.style.willChange = 'transform, opacity'; // Optimize performance
        background.appendChild(flower);
    }

    // Create hearts (your existing implementation)
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDelay = `${Math.random() * 6}s`;
        heart.style.animationDuration = `${6 + Math.random() * 8}s`;
        background.appendChild(heart);
    }
}
