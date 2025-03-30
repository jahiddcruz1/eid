body {
    background: linear-gradient(135deg, #2c3e50, #4a6491);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
}

.card {
    width: 500px;
    background: rgba(255, 255, 255, 0.9);
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.moon {
    width: 100px;
    height: 100px;
    background: #f5f5dc;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 30px gold;
}

.stars::before, .flowers::before {
    content: "✨";
    position: absolute;
    font-size: 20px;
    animation: twinkle 3s infinite;
}

.flowers::before {
    content: "🌸";
    animation: float 5s infinite;
}

h1 {
    font-family: 'Great Vibes', cursive;
    color: #d35400;
    font-size: 3em;
    margin-top: 40px;
}

.message {
    font-size: 1.2em;
    line-height: 1.6;
    color: #333;
    margin: 20px 0;
}

.signature {
    font-style: italic;
    color: #7f8c8d;
}

button {
    background: #e67e22;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 20px;
    transition: all 0.3s;
}

button:hover {
    transform: scale(1.1);
    background: #d35400;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}