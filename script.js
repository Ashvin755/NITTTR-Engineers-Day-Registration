const gamesData = [
    {
        id: 1,
        title: "Rapid Fire 🔥",
        description: "A fast-paced team quiz where quick thinking, teamwork, and speed decide the winner!",
        image: "images/game1.jpg",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSd9hMfcfK32_bbPoGbqKdv_TL6GQXN_jj2d7FWcrgBOi8q4IQ/viewform?usp=publish-editor"
    },
    {
        id: 2,
        title: "Treasure Hunt 🗺️",
        description: "Solve clues, crack challenges, and race against time to uncover the hidden treasure with your team!",
        image: "images/game2.jpg",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfxUfgn9ew36dej0w7WqnPE7KQJmsXyCelAvVo6KSMuiJTJEg/viewform?usp=publish-editor"
    },
    {
        id: 3,
        title: "Singing & Dance Showdown 🎤💃",
        description: "Step up, feel the beat, and own the stage! Showcase your dancing or singing talent and let your passion and creativity shine.",
        image: "images/game3.jpg",
        registerLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdeNdMzXDTgeeadPkp43Gaeuw_5V5Fr2sQsPwddf1XNJQHBQQ/viewform?usp=publish-editor"
    },
    {
        id: 4,
        title: "Mystery Box 📦",
        description: "Think creatively, solve unexpected challenges, and build something amazing using the mystery materials provided!",
        image: "images/game4.jpg",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfWmmCNu0Lz-QMTQvO5idQRPsMGAbvlMNWCpidt9qxdKi5gHQ/viewform"
    },
    {
        id: 5,
        title: "Reel Making 🎬",
        description: "Create a creative, engaging reel that showcases your ideas, talent, and storytelling skills in a fun challenge!",
        image: "images/game5.jpg",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfAL5pqjDhbsCJ9us7a_0Yuztj1L1IPtdK3slf9oOJcTERUZA/viewform?usp=publish-editor"
    },
    {
        id: 6,
        title: "Logo Guess 🎯",
        description: "Identify famous logos, test your visual memory, and prove how sharp your observation skills are!",
        image: "images/game6.jpg",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfKWXW7mcELcJYQNsYXUAZKeibSLyAciZTyKmEU10ZMftwpxw/viewform"
    },
    {
        id: 7,
        title: "Mini Hackathon 💻",
        description: "Build innovative solutions, solve real-world problems, and turn your ideas into working prototypes with your team!",
        image: "images/game7.jpg",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSd8k7W6MYMruAvAp1t9TOIMjdxzIKls0LN47ntdmtRn-miz0A/viewform"
    },
    {
        id: 8,
        title: "Poster making 🎨",
        description: "Design a creative poster that effectively communicates your message and showcases your artistic skills!",
        image: "images/game9.jpg",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe5ehT_yCttvuRrsWftZwEy3rLP09_mqdk8gJ4TPMb9SVA5kg/viewform?usp=publish-editor"
    }
];

function createGameCard(game) {
    const card = document.createElement('article');
    card.className = 'game-card';
    card.innerHTML = `
        <div class="game-card-image">
            <img src="${game.image}" alt="${game.title}" loading="lazy" 
                 onload="this.parentElement.classList.remove('placeholder');"
                 onerror="this.style.display='none'; this.parentElement.classList.add('placeholder');">
        </div>
        <div class="game-card-content">
            <h2 class="game-card-title">${game.title}</h2>
            <p class="game-card-description">${game.description}</p>
            <a href="${game.registerLink}" class="register-btn" target="_blank" rel="noopener noreferrer">Register Now</a>
        </div>
    `;
    return card;
}

function renderGames() {
    const grid = document.getElementById('gamesGrid');
    if (!grid) return;
    
    gamesData.forEach(game => {
        const card = createGameCard(game);
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderGames);