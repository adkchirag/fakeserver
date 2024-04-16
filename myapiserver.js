const emojipedia = [
    {
        id: 1,
        emoji: "💪",
        name: "Tense Biceps",
        meaning: "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
        id: 2,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning: "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
        id: 3,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning: "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    },
    {
        id: 4,
        emoji: "🤓",
        name: "Nerd Face",
        meaning: "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
    },
    {
        id: 5,
        emoji: "🤔",
        name: "Thinking Face",
        meaning: "Contemplating or considering something deeply, often used to express thoughtfulness or skepticism."
    },
    {
        id: 6,
        emoji: "🥰",
        name: "Smiling Face with Hearts",
        meaning: "Feeling affectionate or loving, often used to express adoration or gratitude."
    }
];

console.log(emojipedia);

// app.get('/emojipedia', (req, res) => {
//     res.json(emojipedia);
// });

// app.get('/emojipedia/:id', (req, res) => {
//     const emoji = emojipedia.find(e => e.id === parseInt(req.params.id));
//     if (!emoji) {
//         return res.status(404).json({ message: 'Emoji not found' });
//     }
//     res.json(emoji);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
