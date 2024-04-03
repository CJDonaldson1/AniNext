const db = require('../db')
const Anime = require('../models/anime')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const animes = [
        {
        "title": "Kono Subarashii Sekai ni Shukufuku wo! 3",
        "synopsis": "Third season of Kono Subarashii Sekai ni Shukufuku wo!",
        "airingDate": "Apr 10, 2024",
        "genres": [
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "studio": "Drive",
        "image": "https://cdn.myanimelist.net/images/anime/1758/141268.jpg"
    },
    {
        "title": "Kimetsu no Yaiba: Hashira Geiko-hen",
        "synopsis": "New season of Kimetsu no Yaiba.",
        "airingDate": "May 12, 2024",
        "genres": [
            "Action",
            "Fantasy"
        ],
        "studio": "ufotable",
        "image": "https://cdn.myanimelist.net/images/anime/1136/141893.jpg"
    },
    {
        "title": "Tensei shitara Slime Datta Ken 3rd Season",
        "synopsis": "Third season of Tensei shitara Slime Datta Ken.",
        "airingDate": "Apr 5, 2024",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "studio": "8bit",
        "image": "https://cdn.myanimelist.net/images/anime/1587/141789.jpg"
    },
    {
        "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
        "synopsis": "Second part of Mushoku Tensei II: Isekai Ittara Honki Dasu.",
        "airingDate": "Apr 8, 2024",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Ecchi"
        ],
        "studio": "Studio Bind",
        "image": "https://cdn.myanimelist.net/images/anime/1876/141251.jpg"
    },
    {
        "title": "Boku no Hero Academia 7th Season",
        "synopsis": "7th season of Boku no Hero Academia",
        "airingDate": "May 4, 2024",
        "genres": [
            "Action"
        ],
        "studio": "Bones",
        "image": "https://cdn.myanimelist.net/images/anime/1529/140306.jpg"
    },
    {
        "title": "Maou Gakuin no Futekigousha II: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou Part 2",
        "synopsis": "Second half of Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II.",
        "airingDate": "Apr 12, 2024",
        "genres": [
            "Action",
            "Fantasy"
        ],
        "studio": "SILVER LINK.",
        "image": "https://cdn.myanimelist.net/images/anime/1399/141651.jpg"
    },
    {
        "title": "Kaijuu 8-gou",
        "synopsis": "Grotesque, Godzilla-like monsters called \"kaijuu\" have been appearing around Japan for many years. To combat these beasts, an elite military unit known as the Defense Corps risks their lives daily to protect civilians. Once a creature is killed, \"sweepers\"—working under the Professional Kaijuu Cleaner Corporation—are left to dispose of its remains.\r \r Kafka Hibino, a 32-year-old man, is unsatisfied with his job as a sweeper. From a young age, he has aspired to join the Defense Corps and kill kaijuus for a living. After a few failed attempts, however, he gave up on his dreams and resigned himself to the mediocrity that provided a decent paycheck. Nevertheless, when an ambitious, 18-year-old recruit named Leno Ichikawa joins his cleaning team, Kafka is once again reminded of his desire to join the military.\r \r Following a chain of unfortunate events and an interaction with the junior sweeper, Kafka encounters a parasite-type kaijuu that forces its way in through his mouth—turning him into a humanoid monster. With his newfound powers, Kafka aims to give his lifelong dream a final try.\r \r [Written by MAL Rewrite]",
        "airingDate": "Apr 13, 2024",
        "genres": [
            "Action",
            "Sci-Fi"
        ],
        "studio": "Production I.G",
        "image": "https://cdn.myanimelist.net/images/anime/1370/140362.jpg"
    },
    {
        "title": "Ookami to Koushinryou: Merchant Meets the Wise Wolf",
        "synopsis": "Holo is a powerful wolf deity who is revered in the small town of Pasloe for blessing the annual harvest. Yet as years go by and the villagers become more self-sufficient, Holo has been reduced to a mere folktale. When a traveling merchant named Kraft Lawrence stops at the settlement, Holo offers to become his business partner if he takes her to her northern home of Yoitsu. The savvy trader recognizes Holo's unusual ability to evaluate a person's character and accepts her proposition.\r \r Now in the possession of both sharp bargaining skills and a charismatic negotiator, Lawrence inches closer to his goal of opening his own shop. However, as Lawrence travels the countryside with Holo in search of economic opportunities, he begins to realize that his aspirations are slowly morphing into something unexpected.\r \r [Written by MAL Rewrite]",
        "airingDate": "Apr 2, 2024",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "studio": "Passione",
        "image": "https://cdn.myanimelist.net/images/anime/1059/142414.jpg"
    },
    {
        "title": "Date A Live V",
        "synopsis": "Fifth season of Date A Live.",
        "airingDate": "Apr 10, 2024",
        "genres": [
            "Action",
            "Fantasy",
            "Romance",
            "Sci-Fi"
        ],
        "studio": "Geek Toys",
        "image": "https://cdn.myanimelist.net/images/anime/1659/141438.jpg"
    },
    {
        "title": "Mahouka Koukou no Rettousei 3rd Season",
        "synopsis": "Third season of Mahouka Koukou no Rettousei.",
        "airingDate": "Apr 5, 2024",
        "genres": [
            "Action",
            "Fantasy",
            "Romance",
            "Sci-Fi"
        ],
        "studio": "8bit",
        "image": "https://cdn.myanimelist.net/images/anime/1100/142255.jpg"
    },
    {
        "title": "Yuru Camp△ Season 3",
        "synopsis": "The third season of Yuru Camp△.",
        "airingDate": "Apr 4, 2024",
        "genres": [
            "Slice of Life"
        ],
        "studio": "8bit",
        "image": "https://cdn.myanimelist.net/images/anime/1977/142049.jpg"
    },
    {
        "title": "Sasayaku You ni Koi wo Utau",
        "synopsis": "Yori Asanagi is a mature girl in many ways but is still pure when it comes to romance. That sentiment is proven when an underclassman, Himari Kino, suddenly confesses love to her after her band performance at the freshman opening ceremony.\r \r Confused and surprised, Yori asks her friends for consultation, but they tease her by saying that she is experiencing love. Yori soon makes up her mind and tries to return Himari's feelings, but in a twist of events, she realizes that what Himari loved was not her, but her music!\r \r As Yori continues to pursue her love for Himari, she promises to make Himari fall for her. However, will this passionate love bloom or remain unrequited?\r \r [Written by MAL Rewrite]",
        "airingDate": "Apr 14, 2024",
        "genres": [
            "Girls Love"
        ],
        "studio": "Cloud Hearts",
        "image": "https://cdn.myanimelist.net/images/anime/1455/141858.jpg"
    },
    {
        "title": "Sentai Daishikkaku",
        "synopsis": "Thirteen years ago, the Nefarious Monster Army invaded Earth, but humanity's great protectors, the Dragon Keepers, defeated them in a single year! Every Sunday since, the monsters have been forced to act out humiliating defeat after defeat in front of the unsuspecting public. Determined to change this, a single monster, D, infiltrated the Ranger Force. With the help of the mysterious Ranger, Yumeko Suzukiri, D managed to seize one of the divine artifacts—the only weapons capable of permanently killing the monsters' immortal bodies! However, D's subsequent encounter with the Dragon Keepers led to his unfortunate end, so who will stop them now...? \r \r (Source: Kodansha USA)",
        "airingDate": "Apr 7, 2024",
        "genres": [
            "Action",
            "Sci-Fi"
        ],
        "studio": "Yostar Pictures",
        "image": "https://cdn.myanimelist.net/images/anime/1183/141489.jpg"
    },
    {
        "title": "Hananoi-kun to Koi no Yamai",
        "synopsis": "Hotaru Hinase is a first-year high school student who treasures her family and friends above all else. Unable to understand romance, she decides she will be content living without the experience of falling in love.\r \r While Hotaru is spending time at a cafe with her close friend, she witnesses the relentless breakup of a handsome honor student, Hananoi. Encountering him sitting alone in the snow on her way home, she extends her umbrella to him in a gesture of kindness.\r \r The very next day, Hananoi appears in Hotaru's classroom, asking her to be his girlfriend. Despite being rejected, Hananoi sticks closely by Hotaru's side, performing selfless acts in hopes of pleasing her. Hotaru begins to feel emotions she had never felt before. Believing that these emotions could blossom into love, Hotaru agrees to date Hananoi.\r \r [Written by MAL Rewrite]",
        "airingDate": "Apr 4, 2024",
        "genres": [
            "Romance"
        ],
        "studio": "East Fish Studio",
        "image": "https://m.media-amazon.com/images/M/MV5BNjA3YWRmZDMtODhlZi00MWE1LWJiZmItOWQ2MmM1MTk1NTQ5XkEyXkFqcGdeQXVyNjA5MDIyMzU@._V1_.jpg"
    },
    {
        "title": "Wind Breaker",
        "synopsis": "Haruka Sakura wants nothing to do with weaklings—he's only interested in the strongest of the strong. He's just started at Furin High School, a school of degenerates known only for their brawling strength—strength they use to protect their town from anyone who wishes it ill. But Haruka's not interested in being a hero or being part of any sort of team—he just wants to fight his way to the top!\r \r (Source: Kodansha USA)",
        "airingDate": "Apr 5, 2024",
        "genres": [
            "Action"
        ],
        "studio": "CloverWorks",
        "image": "https://m.media-amazon.com/images/M/MV5BM2Y4YTc2ZDYtMTNiNS00NjljLWFjOGQtYTNmZGZjODkzOGU0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
        "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu",
        "synopsis": "Prince Lloyd wasn't always a prince...in fact, his previous life is one he remembers perfectly: he was a sorcerer, of sorts. So when he was forced to reincarnate, he decided to continue his studies, prince of the realm or no! But his new life has its own sets of challenges...including being a 10-year-old! What's the 7th prince/sorcerer to do?!\r \r (Source: Kodansha)",
        "airingDate": "Apr 2, 2024",
        "genres": [
            "Adventure",
            "Fantasy"
        ],
        "studio": "Tsumugi Akita Animation Lab",
        "image": "https://cdn.myanimelist.net/images/manga/2/236885.jpg"
    },
    {
        "title": "Kuroshitsuji: Kishuku Gakkou-hen",
        "synopsis": "New season of Kuroshitsuji.",
        "airingDate": "Apr 13, 2024",
        "genres": [
            "Action",
            "Fantasy",
            "Mystery"
        ],
        "studio": "CloverWorks",
        "image": "https://cdn.myanimelist.net/images/anime/1505/141820.jpg"
    },
    {
        "title": "Hibike! Euphonium 3",
        "synopsis": "After the Kitauji High School Wind Ensemble pulls a stunning performance in Oumae Kumiko's first year, their results in her second year feel underwhelming to the entire club. They intended to achieve a gold medal at the national competition, but their participation ends with what is known as a \"dud gold\" at the Kansai competition: a gold medal that does not include being chosen to advance to the national competition. With the end of the cycle, the ensemble's seniors retire, and a new leadership takes charge; Kumiko, soon to be a senior herself, is appointed the new club president. Now it is up to her to, under the guidance of their teacher Taki Noboru, shoulder Kitauji to the Nationals once again and help the band achieve the gold medal they have been aiming for.\r \r (Source: AniDB)",
        "airingDate": "Apr 7, 2024",
        "genres": [
            "Drama"
        ],
        "studio": "Kyoto Animation",
        "image": "https://static.wikia.nocookie.net/hibike-euphonium/images/5/58/Keyvisual02.webp/revision/latest/thumbnail/width/360/height/360?cb=20240317225611"
    },
    {
        "title": "Unnamed Memory",
        "synopsis": "\"My wish as champion is for you to descend the tower and be my wife.\" Climbing a deadly tower, Oscar seeks the power of its master, the Witch of the Azure Moon. He hopes her incredible magic can break a curse that will kill any woman he takes for a wife. When the prince sees how beautiful Tinasha is, though, he has a better idea—since she's surely strong enough to survive his curse, she should just marry him instead! Tinasha isn't keen on the idea, but agrees to live with Oscar in the royal castle for a year while researching the spell placed on the prince. The witch's pretty face hides several lifetimes of dark secrets, however—secrets that begin resurfacing...\r \r (Source: Yen Press)",
        "airingDate": "Apr 9, 2024",
        "genres": [
            "Adventure",
            "Fantasy",
            "Romance"
        ],
        "studio": "ENGI",
        "image": "https://m.media-amazon.com/images/M/MV5BOGI4OTc4ZmItM2UzYS00NzUxLTg3N2YtYjVjYTgwNmY5ZGUxXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg"
    },
    {
        "title": "Jiisan Baasan Wakagaeru",
        "synopsis": "Shouzou and Ine Saitou have been happily married for as long as they can remember. Even in their old age with wrinkles and cracking limbs, the strength of this love is evident by their precious bond. And then, randomly one day, they wake up to find they are young again!\r \r Despite their newfound youthful and attractive bodies, Shouzou and Ine remain the same as ever. Jiisan Baasan Wakagaeru follows the young old couple as they go about their daily lives, spend time with family, and defy the expectations of the youngsters.\r \r [Written by MAL Rewrite]",
        "airingDate": "Apr 7, 2024",
        "genres": [
            "Comedy",
            "Romance",
            "Supernatural"
        ],
        "studio": "Gekkou",
        "image": "https://m.media-amazon.com/images/M/MV5BZjg0NDQ4M2UtZDY3Ni00MWExLTk3YzgtNTU0YWJlNjhjNDM2XkEyXkFqcGdeQXVyNjA5MDIyMzU@._V1_.jpg"
    },
    
]
  await Anime.insertMany(animes)
  console.log("Animes have been seeded successfully.")
}

const run = async () => {
  await main()
  db.close()
}

run()