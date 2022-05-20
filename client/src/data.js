const conferences = [
	{
		company: 'The Pokémon Company',
		date: 'Jun 5th, 2019 @ 6:00 AM PDT',
	},
	{
		company: 'Google Stadia',
		date: 'Jun 6th, 2019 @ 9:00 AM PDT',
	},
	{
		company: 'Electronic  Arts',
		date: 'Jun 8th, 2019 @ 9:15 AM PDT',
	},
	{
		company: 'Microsoft',
		date: 'Jun 9th, 2019 @ 1:00 PM PDT',
	},
	{
		company: 'Bethesda',
		date: 'Jun 9th, 2019 @ 5:30 PM PDT',
	},
	{
		company: 'Devolver Digital',
		date: 'Jun 9th, 2019 @ 7:00 PM PDT',
	},
	{
		company: 'UploadVR',
		date: 'Jun 10th, 2019 @ 9:00 AM PDT',
	},
	{
		company: 'The PC Gaming Show',
		date: 'Jun 10th, 2019 @ 10:00 AM PDT',
	},
	{
		company: 'Limited Run Games',
		date: 'Jun 10th, 2019 @ 12:00 PM PDT',
	},
	{
		company: 'Ubisoft',
		date: 'Jun 10th, 2019 @ 1:00 PM PDT',
	},
	{
		company: 'AMD',
		date: 'Jun 10th, 2019 @ 3:00 PM PDT',
	},
	{
		company: 'Kinda Funny Games',
		date: 'Jun 10th, 2019 @ 4:30 PM PDT',
	},
	{
		company: 'Square Enix',
		date: 'Jun 10th, 2019 @ 6:00 PM PDT',
	},
	{
		company: 'Nintendo',
		date: 'Jun 11th, 2019 @ 9:00 AM PDT',
	},
];

const conferenceMedia = [
	{
		title: 'Pokémon Direct',
		link: 'PpjVUOJkX-s',
	},
	{
		title: 'Google Stadia Connect',
		link: 'k-BbW6zAjL0',
	},
	{
		title: 'EA Play',
		link: 'isvyP3Bu2rc',
	},
	{
		title: 'Microsoft Conference',
		link: 'zeYQ-kPF0iQ',
	},
	{
		title: 'Bethesda Conference',
		link: 'c9B5qhzKyhg',
	},
	{
		title: 'Devolver Digital Direct',
		link: 'riNcPrsFYM0',
	},
	{
		title: 'Upload\'s E3 VR Showcase',
		link: 'YHfWkFz1l1Y',
	},
	{
		title: 'The PC Gaming Show',
		link: 'hru6IvgRSp4',
	},
	{
		title: 'Limited Run Games',
		link: 'PJ8NbEdtYc0',
	},
	{
		title: 'Ubisoft Conference',
		link: 'pKbKx2JHQ8s',
	},
	{
		title: 'AMD Next Horizon Gaming',
		link: 'yxPBXNuX6Xs',
	},
	{
		title: 'Kinda Funny Games Showcase',
		link: 'Ayw3J7sxEkQ',
	},
	{
		title: 'Square Enix Conference',
		link: 'cq6GmnM98jQ',
	},
	{
		title: 'Nintendo Direct',
		link: 'Zr9eAtwcYlo',
	},
	{
		title: 'Nintendo at E3 2019 Day 1',
		link: 'hhVCdxtofWU',
	},
	{
		title: 'Nintendo at E3 2019 Day 2',
		link: 'R5y5DQEJcgM',
	},
	{
		title: 'Nintendo at E3 2019 Day 3',
		link: 'UbGYfoVxb3E',
	},
];

const games = [
    {
        "date": "1653006765697",
        "conference": "Other",
        "day": "5",
        "image": "ul7BQeFbsp4",
        "title": "Phantom Brigade",
        "developer": "Brace Yourself Games",
        "releaseDate": "2020",
        "platforms": [
            "Windows"
        ],
        "genre": "Turn Based RTS",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ul7BQeFbsp4",
                "mediaType": "Gameplay Trailer"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 0
    },
    {
        "date": "1653006765697",
        "conference": "Other",
        "day": "5",
        "image": "jf1WY1RPhJg",
        "title": "Granblue Fantasy: Versus",
        "developer": "Cygames",
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4"
        ],
        "genre": "Fighting",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/jf1WY1RPhJg",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 1
    },
    {
        "date": "1653006765696",
        "conference": "Other",
        "day": "5",
        "image": "iLyH4DgTYyM",
        "title": "BurgerTime Party!",
        "developer": "G-Mode",
        "releaseDate": "Q4 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Arcade, Action, Puzzle",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/iLyH4DgTYyM",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 2
    },
    {
        "date": "1653006765695",
        "conference": "Other",
        "day": "5",
        "image": "qgNlsBXpJZA",
        "title": "Heroland",
        "developer": "Furyu",
        "releaseDate": "Q4 2019",
        "platforms": [
            "PlayStation 4",
            "Switch"
        ],
        "genre": "Adventure, RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/qgNlsBXpJZA",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 3
    },
    {
        "date": "1653006765694",
        "conference": "Other",
        "day": "5",
        "image": "0HA7zQ1eXAI",
        "title": "Sakuna: Of Rice and Ruin",
        "developer": "Edelweiss",
        "releaseDate": "Q4 2019",
        "platforms": [
            "PlayStation 4",
            "Switch",
            "Windows"
        ],
        "genre": "Side-scrolling, Farming, Crafting",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/0HA7zQ1eXAI",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 4
    },
    {
        "date": "1653006765693",
        "conference": "Other",
        "day": "5",
        "image": "PwI0mzf2flY",
        "title": "Rune Factory 4 Special",
        "developer": "Neverland Co.",
        "releaseDate": "2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/PwI0mzf2flY",
                "mediaType": "Trailer"
            }
        ],
        "moreDetails": [],
        "index": 5
    },
    {
        "date": "1653006765692",
        "conference": "Other",
        "day": "5",
        "image": "GnakK1Bit7E",
        "title": "Torchlight II (Console Release)",
        "developer": "Runic Games",
        "releaseDate": "September 3, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch"
        ],
        "genre": "Action role-playing, hack and slash",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/GnakK1Bit7E",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 6
    },
    {
        "date": "1653006765691",
        "conference": "Other",
        "day": "5",
        "image": "1yC6xIReMQs",
        "title": "SENRAN KAGURA Peach Ball",
        "developer": "XSEED Games",
        "releaseDate": "July 9, 2019",
        "platforms": [
            "Switch",
            "Windows"
        ],
        "genre": "Pinball, Arcade",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/1yC6xIReMQs",
                "mediaType": "Gameplay Trailer"
            }
        ],
        "moreDetails": [],
        "index": 7
    },
    {
        "date": "1653006765690",
        "conference": "Other",
        "day": "5",
        "image": "WAeoEIeLg_A",
        "title": "The Sinking City",
        "developer": "Frogwares",
        "releaseDate": "June 27, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Action-adventure, survival horror",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/WAeoEIeLg_A",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 8
    },
    {
        "date": "1653006765689",
        "conference": "Other",
        "day": "5",
        "image": "eWb2VbP6Ivc",
        "title": "Alien: Isolation (Switch)",
        "developer": "Creative Assembly",
        "releaseDate": "2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Action-adventure, stealth, survival horror",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/eWb2VbP6Ivc",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 9
    },
    {
        "date": "1653006765688",
        "conference": "Other",
        "day": "4",
        "image": "fc5nURXyvyk",
        "title": "RAD",
        "developer": "Double Fine",
        "releaseDate": "August 20, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Action, Hack and Slash, Rogue-like",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/fc5nURXyvyk",
                "mediaType": "Gameplay Trailer"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/UZZU7T16Oxc",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 10
    },
    {
        "date": "1653006765687",
        "conference": "Other",
        "day": "4",
        "image": "btget8Gphdw",
        "title": "Spyro Reignited Trilogy",
        "developer": "Toys for Bob",
        "releaseDate": "September 3, 2019",
        "platforms": [
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Platformer",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/btget8Gphdw",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 11
    },
    {
        "date": "1653006765686",
        "conference": "Other",
        "day": "4",
        "image": "3CIBTp7vGSw",
        "title": "New Super Lucky's Tale",
        "developer": "Playful Corp.",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Switch"
        ],
        "genre": "Platformer",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/3CIBTp7vGSw",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 12
    },
    {
        "date": "1653006765685",
        "conference": "Nintendo",
        "day": "4",
        "image": "kMxmq3bhSuw",
        "title": "Super Mario Maker 2",
        "developer": "Nintendo EPD",
        "releaseDate": "June 28, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Level editor, platform",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/kMxmq3bhSuw",
                "mediaType": "Gameplay Pt.1"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/bKjrbw7y3_k",
                "mediaType": "Gameplay Pt.2"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 13
    },
    {
        "date": "1653006765684",
        "conference": "Nintendo",
        "day": "4",
        "image": "VeqM_oHv6Mw",
        "title": " Pokémon Sword and Pokémon Shield",
        "developer": {
            "devLink": "https://www.gamefreak.co.jp/",
            "devName": "Game Freak"
        },
        "releaseDate": "November 15, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/VeqM_oHv6Mw",
                "mediaType": "Presentation"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/TmWu-f6L0Mo",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 14
    },
    {
        "date": "1653006765683",
        "conference": "Nintendo",
        "day": "4",
        "image": "3fr1Z07AV00",
        "title": "Sequel to The Legend of Zelda: Breath of the Wild",
        "developer": "Nintendo",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Switch"
        ],
        "genre": "Action RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/3fr1Z07AV00",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 15
    },
    {
        "date": "1653006765682",
        "conference": "Nintendo",
        "day": "4",
        "image": "HGmDTu8NPrw",
        "title": "Super Smash Bros. Ultimate: Banjo-Kazooie",
        "developer": "Bandai Namco Studios",
        "releaseDate": "Q3 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Fighting",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/HGmDTu8NPrw",
                "mediaType": "New Character"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 16
    },
    {
        "date": "1653006765681",
        "conference": "Nintendo",
        "day": "4",
        "image": "waCr8pjROBc",
        "title": "Nintendo Switch Upcoming Games",
        "developer": "Multiple Developers",
        "releaseDate": "2019",
        "platforms": [
            "Switch"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/waCr8pjROBc",
                "mediaType": "Highlight Reel"
            }
        ],
        "moreDetails": [],
        "index": 17
    },
    {
        "date": "1653006765680",
        "conference": "Nintendo",
        "day": "4",
        "image": "_3YNL0OWio0",
        "title": "Animal Crossing New Horizons",
        "developer": "Nintendo",
        "releaseDate": "March 20, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Social simulation",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/_3YNL0OWio0",
                "mediaType": "Reveal"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/dEh3MPy4GAU",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 18
    },
    {
        "date": "1653006765679",
        "conference": "Nintendo",
        "day": "4",
        "image": "TsiuwvMdXdY",
        "title": "Mario &amp; Sonic at the Olympic Games",
        "developer": "Sega",
        "releaseDate": "November 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Olympic Sports",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/TsiuwvMdXdY",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 19
    },
    {
        "date": "1653006765678",
        "conference": "Nintendo",
        "day": "4",
        "image": "ATtLpjXTc7I",
        "title": "Cadence of Hyrule - Crypt of the Necrodancer ft. The Legend of Zelda",
        "developer": "Brace Yourself Games",
        "releaseDate": "June 13, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Rhythm Combat",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ATtLpjXTc7I",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 20
    },
    {
        "date": "1653006765677",
        "conference": "Nintendo",
        "day": "4",
        "image": "pE_qNk3ALok",
        "title": "Marvel Ultimate Alliance 3: The Black Order",
        "developer": "Team Ninja",
        "releaseDate": "July 19, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Action role-playing, hack and slash",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/pE_qNk3ALok",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 21
    },
    {
        "date": "1653006765677",
        "conference": "Nintendo",
        "day": "4",
        "image": "YqC0Pp6V6oc",
        "title": "Empire of Sin",
        "developer": "Romero Games",
        "releaseDate": "Q2 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Strategy",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/YqC0Pp6V6oc",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 22
    },
    {
        "date": "1653006765676",
        "conference": "Nintendo",
        "day": "4",
        "image": "ckAZepoche4",
        "title": "Astral Chain",
        "developer": "PlatinumGames",
        "releaseDate": "August 30, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Action Role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ckAZepoche4",
                "mediaType": "Story"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/oX5V9uOVD4k",
                "mediaType": "Gameplay P.t.1"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/E3WqG1-7Ogk",
                "mediaType": "Gameplay Pt.2"
            }
        ],
        "moreDetails": [],
        "index": 23
    },
    {
        "date": "1653006765675",
        "conference": "Nintendo",
        "day": "4",
        "image": "QiqnBXlOOhs",
        "title": "Panzer Dragoon",
        "developer": "ForeverEntertainment",
        "releaseDate": "Q4 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Rail shooter, role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/QiqnBXlOOhs",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 24
    },
    {
        "date": "1653006765674",
        "conference": "Nintendo",
        "day": "4",
        "image": "cld3XlI7Ueo",
        "title": "Daemon X Machina",
        "developer": "First Studio",
        "releaseDate": "September 13, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Action, third-person shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/cld3XlI7Ueo",
                "mediaType": "Gameplay Trailer"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/8qmwvKTwm10",
                "mediaType": "Demo Feedback"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/zKvz_mV6hDI",
                "mediaType": "Gameplay Pt.1"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/0NguOrEbkx0",
                "mediaType": "Gameplay Pt.2"
            }
        ],
        "moreDetails": [],
        "index": 25
    },
    {
        "date": "1653006765673",
        "conference": "Nintendo",
        "day": "4",
        "image": "VUBKs18ZrEM",
        "title": "Contra Anniversary Collection",
        "developer": "Konami",
        "releaseDate": "June 11, 2019",
        "platforms": [
            "Switch"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/VUBKs18ZrEM",
                "mediaType": "Launch Trailer"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 26
    },
    {
        "date": "1653006765672",
        "conference": "Nintendo",
        "day": "4",
        "image": "ShFv4iWTssk",
        "title": "Contra Rogue Corps",
        "developer": "Konami",
        "releaseDate": "September 24, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Top-down Shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ShFv4iWTssk",
                "mediaType": "Red Band Premier"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 27
    },
    {
        "date": "1653006765671",
        "conference": "Nintendo",
        "day": "4",
        "image": "91HU_mc9cts",
        "title": "No More Herores III",
        "developer": "Grasshopper Manufacture",
        "releaseDate": "2020",
        "platforms": [
            "Switch"
        ],
        "genre": "Action-adventure, hack and slash",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/91HU_mc9cts",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 28
    },
    {
        "date": "1653006765670",
        "conference": "Nintendo",
        "day": "4",
        "image": "M7PwGZ5HqTo",
        "title": "Resident Evil 5 &amp; Resident Evil 6",
        "developer": "Capcom",
        "releaseDate": "Q3 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Third-person shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/M7PwGZ5HqTo",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 29
    },
    {
        "date": "1653006765669",
        "conference": "Nintendo",
        "day": "4",
        "image": "ADaRsEhTB70",
        "title": "Fire Emblem: Three Houses",
        "developer": "Intelligent Systems",
        "releaseDate": "July 26, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Tactical role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ADaRsEhTB70",
                "mediaType": "Story"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/_-wKu1Xgby8",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 30
    },
    {
        "date": "1653006765668",
        "conference": "Nintendo",
        "day": "4",
        "image": "TCcPL3ok1P4",
        "title": "The Witcher 3: Wild Hunt Complete Edition",
        "developer": "CD Projekt Red",
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Action role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/TCcPL3ok1P4",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 31
    },
    {
        "date": "1653006765667",
        "conference": "Nintendo",
        "day": "4",
        "image": "ZntXoob5VnI",
        "title": "Collection of Mana",
        "developer": "Square Enix",
        "releaseDate": "June 11, 2019",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ZntXoob5VnI",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 32
    },
    {
        "date": "1653006765666",
        "conference": "Nintendo",
        "day": "4",
        "image": "T5XV3P2wjL0",
        "title": "Trials of Mana",
        "developer": "Square Enix",
        "releaseDate": "Q1 2020",
        "platforms": [
            "Switch"
        ],
        "genre": "Action-adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/T5XV3P2wjL0",
                "mediaType": "Gameplay Trailer"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/K7KXJOYWCYw",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 33
    },
    {
        "date": "1653006765665",
        "conference": "Nintendo",
        "day": "4",
        "image": "SEIKkjZgMaw",
        "title": "The Legend of Zelda: Links Awakening",
        "developer": "Nintendo",
        "releaseDate": "September 20, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Action-adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/SEIKkjZgMaw",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 34
    },
    {
        "date": "1653006765664",
        "conference": "Nintendo",
        "day": "4",
        "image": "LhPhF_4g6Hw",
        "title": "Jim Henson's The Dark Crystal: Age of Resistance Tactics",
        "developer": "BonusXP",
        "releaseDate": "2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Turn-based, Tactical",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/LhPhF_4g6Hw",
                "mediaType": "Reveal"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/ErJ8aIlq7uQ",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 35
    },
    {
        "date": "1653006765663",
        "conference": "Nintendo",
        "day": "4",
        "image": "PT9WrJxkApk",
        "title": "Luigi's Mansion 3",
        "developer": "Nintendo",
        "releaseDate": "2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Action-adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/PT9WrJxkApk",
                "mediaType": "Demo"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/Q6p-3VwcD6c",
                "mediaType": "Gameplay Pt.1"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/KEq2JCIspvs",
                "mediaType": "Gameplay Pt.2"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 36
    },
    {
        "date": "1653006765662",
        "conference": "Nintendo",
        "day": "4",
        "image": "Yx3eK-aZJhs",
        "title": "DragonQuest XI: Echoes of an Elusive Age - Definitive Edition S",
        "developer": {
            "devLink": "https://www.square-enix.com/",
            "devName": "Square Enix"
        },
        "releaseDate": "September 27, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Yx3eK-aZJhs",
                "mediaType": "Release Date Trailer"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/J64FvzrDjh8",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 37
    },
    {
        "date": "1653006765661",
        "conference": "Nintendo",
        "day": "4",
        "image": "WNrrwutMzxg",
        "title": "Super Smash Bros. Ultimate: Dragon Quest",
        "developer": "Bandai Namco Studios",
        "releaseDate": "Q3 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Fighting",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/WNrrwutMzxg",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 38
    },
    {
        "date": "1653006765660",
        "conference": "Other",
        "day": "4",
        "image": "DPrmpGT_u4A",
        "title": "Ni no Kuni: Wrath of the White Witch Remastered",
        "developer": {
            "devLink": "http://level5ia.com/",
            "devName": "Level-5"
        },
        "releaseDate": "September 20, 2019",
        "platforms": [
            "PlayStation 4",
            "Switch"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/DPrmpGT_u4A",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 39
    },
    {
        "date": "1653006765659",
        "conference": "Other",
        "day": "4",
        "image": "b-RbmhyisO4",
        "title": "Disgaea 4 Complete+",
        "developer": {
            "devLink": "http://www.nippon1.co.jp/",
            "devName": "Nippon Ichi Software"
        },
        "releaseDate": "Q3 2019",
        "platforms": [
            "PlayStation 4",
            "Switch"
        ],
        "genre": "Tactical role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/b-RbmhyisO4",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 40
    },
    {
        "date": "1653006765658",
        "conference": "Other",
        "day": "3",
        "image": "WshQo48iu2E",
        "title": "Desperados III",
        "developer": " Mimimi Productions\t",
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Real Time Tactics, Stealth. Strategy",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/WshQo48iu2E",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 41
    },
    {
        "date": "1653006765657",
        "conference": "Other",
        "day": "3",
        "image": "Hgt9G7x8XcU",
        "title": "Phoenix Point",
        "developer": {
            "devLink": "http://www.snapshotgames.com/",
            "devName": "Snapshot Games"
        },
        "releaseDate": "September 2019",
        "platforms": [
            "Xbox One",
            "Windows",
            "MacOS"
        ],
        "genre": "Strategy, turn-based tactics",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Hgt9G7x8XcU",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [],
        "index": 42
    },
    {
        "date": "1653006765656",
        "conference": "Other",
        "day": "3",
        "image": "OmkmX7hscSk",
        "title": "Sea of Thieves - Anniversary Edition",
        "developer": {
            "devLink": "https://www.rare.co.uk",
            "devName": "Rare"
        },
        "releaseDate": "March 20, 2018",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "Action-adventure, Sandbox",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/OmkmX7hscSk",
                "mediaType": "Trailer"
            }
        ],
        "moreDetails": [
            "exclusive",
            "xbox play anywhere",
            "xbox game pass"
        ],
        "index": 43
    },
    {
        "date": "1653006765655",
        "conference": "Other",
        "day": "3",
        "image": "Xo-ou20977s",
        "title": "Journey to the Savage Planet",
        "developer": "Typhoon Studios",
        "releaseDate": "Q1 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Xo-ou20977s",
                "mediaType": "Gameplay Trailer"
            }
        ],
        "moreDetails": [
            "epic exclusive"
        ],
        "index": 44
    },
    {
        "date": "1653006765654",
        "conference": "Other",
        "day": "3",
        "image": "oxsdL2Vc9cI",
        "title": "Borderlands 3",
        "developer": {
            "devLink": "https://www.gearboxsoftware.com/",
            "devName": "Gearbox Software"
        },
        "releaseDate": "September 13, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action role-playing, first-person shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/oxsdL2Vc9cI",
                "mediaType": "Moze The Gunner Gameplay"
            }
        ],
        "moreDetails": [
            "epic exclusive"
        ],
        "index": 45
    },
    {
        "date": "1653006765653",
        "conference": "Other",
        "day": "3",
        "image": "xJh-m1qWcm0",
        "title": "Vampire The Masquerade: Bloodlines 2",
        "developer": {
            "devLink": "https://www.hardsuitlabs.com/",
            "devName": "Hardsuit Labs"
        },
        "releaseDate": "Q1 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/xJh-m1qWcm0",
                "mediaType": "Extended Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 46
    },
    {
        "date": "1653006765652",
        "conference": "Other",
        "day": "3",
        "image": "2h8oNypUn70",
        "title": "The Surge 2",
        "developer": {
            "devLink": "https://www.deck13.com/",
            "devName": "Deck13"
        },
        "releaseDate": "September 24, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/2h8oNypUn70",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [],
        "index": 47
    },
    {
        "date": "1653006765651",
        "conference": "Other",
        "day": "3",
        "image": "BUHb5Q1Z3Kc",
        "title": "Code Vein",
        "developer": {
            "devLink": "https://www.bandainamcostudios.com/en/",
            "devName": "Bandai Namco Studios"
        },
        "releaseDate": "September 27, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/BUHb5Q1Z3Kc",
                "mediaType": "Release Date Trailer"
            }
        ],
        "moreDetails": [],
        "index": 48
    },
    {
        "date": "1653006765650",
        "conference": "Square Enix",
        "day": "3",
        "image": "LDBojdBAjXU",
        "title": "Marvel Avengers",
        "developer": "Crystal Dynamics",
        "releaseDate": "May 15, 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "Stadia"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/LDBojdBAjXU",
                "mediaType": "Reveal"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/Xsz-sUgOL9k",
                "mediaType": "Full Presentation"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/vsdC0EFs_Eg",
                "mediaType": "Release Date"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/hItwYAJb84E",
                "mediaType": "Meet the Cast"
            }
        ],
        "moreDetails": [],
        "index": 49
    },
    {
        "date": "1653006765650",
        "conference": "Square Enix",
        "day": "3",
        "image": "liHKeemjdbI",
        "title": "Final Fantasy VIII",
        "developer": "Square Enix",
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/liHKeemjdbI",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 50
    },
    {
        "date": "1653006765649",
        "conference": "Square Enix",
        "day": "3",
        "image": "HvtPKoKYM1w",
        "title": "Oninaki",
        "developer": "Square Enix",
        "releaseDate": "August 22, 2019",
        "platforms": [
            "PlayStation 4",
            "Switch",
            "Windows"
        ],
        "genre": "JRPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/HvtPKoKYM1w",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "index": 51
    },
    {
        "date": "1653006765648",
        "conference": "Square Enix",
        "day": "3",
        "image": "J0dyNDP5Vfo",
        "title": "Outriders",
        "developer": "People Can Fly",
        "releaseDate": "Q3 2020",
        "genre": "Shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/J0dyNDP5Vfo",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 52
    },
    {
        "date": "1653006765647",
        "conference": "Square Enix",
        "day": "3",
        "image": "M0LCdIi51Gs",
        "title": "War of the Visions: Final Fantasy Brave Exvius ",
        "developer": {
            "devLink": "https://www.square-enix.com/",
            "devName": "Square Enix"
        },
        "releaseDate": "To Be Announced",
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/M0LCdIi51Gs",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 53
    },
    {
        "date": "1653006765646",
        "conference": "Square Enix",
        "day": "3",
        "image": "NJ6J3qvV0cE",
        "title": "SaGa Scarlet Grace: Ambitions",
        "developer": "Square Enix",
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Switch",
            "Windows",
            "Mobile"
        ],
        "genre": "Role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/NJ6J3qvV0cE",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 54
    },
    {
        "date": "1653006765645",
        "conference": "Square Enix",
        "day": "3",
        "image": "NJ6J3qvV0cE",
        "title": "Romancing Saga 3",
        "developer": "Square Enix",
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows",
            "PSVita",
            "Mobile"
        ],
        "genre": "Role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/NJ6J3qvV0cE",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 55
    },
    {
        "date": "1653006765644",
        "conference": "Square Enix",
        "day": "3",
        "image": "6tPU813CMtI",
        "title": "Dying Light 2",
        "developer": "Techland",
        "releaseDate": "Q2 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action role-playing, survival horror",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/6tPU813CMtI",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "index": 56
    },
    {
        "date": "1653006765643",
        "conference": "Square Enix",
        "day": "3",
        "image": "Sc93RAjVRw4",
        "title": "FINAL FANTASY XIV - Shadowbringers",
        "developer": "Square Enix",
        "releaseDate": "July 2, 2019",
        "platforms": [
            "Windows"
        ],
        "genre": "MMORPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Sc93RAjVRw4",
                "mediaType": "Expansion"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 57
    },
    {
        "date": "1653006765642",
        "conference": "Square Enix",
        "day": "3",
        "image": "kkqOJ6XaqbA",
        "title": "Battalion  1944",
        "developer": "Bulkhead Interactive",
        "releaseDate": "May 29, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "First-person shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/kkqOJ6XaqbA",
                "mediaType": "Overview"
            }
        ],
        "moreDetails": [],
        "index": 58
    },
    {
        "date": "1653006765641",
        "conference": "Square Enix",
        "day": "3",
        "image": "VOWyVXPELyc",
        "title": "Circuit Superstars",
        "developer": "Square Enix Collective",
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Racing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/VOWyVXPELyc",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 59
    },
    {
        "date": "1653006765640",
        "conference": "Square Enix",
        "day": "3",
        "image": "TIADxTxBWDc",
        "title": "DragonQuest XI: Echoes of an Elusive Age - Definitive Edition S",
        "developer": {
            "devLink": "https://www.square-enix.com/",
            "devName": "Square Enix"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Switch"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/TIADxTxBWDc",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "index": 60
    },
    {
        "date": "1653006765639",
        "conference": "Square Enix",
        "day": "3",
        "image": "i1aOW2wD7kE",
        "title": "The World of Dragon Quest Builders 2",
        "developer": {
            "devLink": "https://www.square-enix.com/",
            "devName": "Square Enix"
        },
        "releaseDate": "July 12, 2019",
        "platforms": [
            "PlayStation 4"
        ],
        "genre": "Action role-playing, sandbox",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/i1aOW2wD7kE",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 61
    },
    {
        "date": "1653006765638",
        "conference": "Square Enix",
        "day": "3",
        "image": "Wcu6dJFiP0A",
        "title": "The Last Remnant Remastered",
        "developer": "Square Enix",
        "releaseDate": "June 10, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Adventure, role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Wcu6dJFiP0A",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 62
    },
    {
        "date": "1653006765637",
        "conference": "Square Enix",
        "day": "3",
        "image": "5aYnvksA6xg",
        "title": "Octopath Traveler",
        "developer": " Square Enix, ACQUIRE Corp.\t",
        "releaseDate": "June 7, 2019",
        "platforms": [
            "Switch",
            "Windows"
        ],
        "genre": "JRPG, Strategy",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/5aYnvksA6xg",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "index": 63
    },
    {
        "date": "1653006765636",
        "conference": "Square Enix",
        "day": "3",
        "image": "V4hjJQCBIp4",
        "title": "Final Fantasy Crystal Chronicles Remastered Edition",
        "developer": "Square Enix",
        "releaseDate": "Q1 2020",
        "platforms": [
            "PlayStation 4",
            "Switch",
            "Mobile"
        ],
        "genre": "\tAction role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/V4hjJQCBIp4",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 64
    },
    {
        "date": "1653006765635",
        "conference": "Square Enix",
        "day": "3",
        "image": "cmBKGQrUFaM",
        "title": "Final Fantasy VII Remake",
        "developer": {
            "devLink": "https://www.square-enix.com/",
            "devName": "Square Enix"
        },
        "releaseDate": "March 3, 2020",
        "platforms": [
            "PlayStation 4"
        ],
        "genre": "Action RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/cmBKGQrUFaM",
                "mediaType": "Demo"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/eVjwc1H7r74",
                "mediaType": "Cinematic"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/i5zddu-x_J4",
                "mediaType": "Boss Battle"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 65
    },
    {
        "date": "1653006765634",
        "conference": "Square Enix",
        "day": "3",
        "image": "yqrQ44bQdaY",
        "title": "Life Is Strange 2",
        "developer": {
            "devLink": "http://dont-nod.com/en/",
            "devName": "Dontnod Entertainment"
        },
        "releaseDate": "June 10, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "MacOS",
            "Linux"
        ],
        "genre": "Graphic adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/yqrQ44bQdaY",
                "mediaType": "Streamer Reactions"
            }
        ],
        "moreDetails": [],
        "index": 66
    },
    {
        "date": "1653006765633",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "9Zz6YilnA5k",
        "title": "Foregone",
        "developer": {
            "devLink": "https://www.bigbluebubble.com/",
            "devName": "Big Blue Bubble"
        },
        "releaseDate": "Q4 2019",
        "platforms": [
            "Windows"
        ],
        "genre": "Action, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/9Zz6YilnA5k",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 67
    },
    {
        "date": "1653006765632",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "xUTNlGcFzHA",
        "title": "Bloodroots",
        "developer": {
            "devLink": "https://www.papercultgames.com",
            "devName": "Paper Cult"
        },
        "releaseDate": "July 15, 2019",
        "platforms": [
            "PlayStation 4",
            "Switch",
            "Windows"
        ],
        "genre": "Action, Hack and Slash",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/xUTNlGcFzHA",
                "mediaType": "Demo Teaser"
            }
        ],
        "moreDetails": [],
        "index": 68
    },
    {
        "date": "1653006765631",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "RC77slDR0vk",
        "title": "An/Round",
        "developer": "Overdrive Games",
        "releaseDate": "June 10, 2019",
        "platforms": [
            "Windows"
        ],
        "genre": "Shooter, Platformer",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/RC77slDR0vk",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 69
    },
    {
        "date": "1653006765631",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "zOGwVsSFsbk",
        "title": "A Duel Hand Disaster: Trackher",
        "developer": "Ask An Enemy Studios\t",
        "releaseDate": "June 10, 2019",
        "platforms": [
            "PlayStation 4",
            "Switch",
            "Windows"
        ],
        "genre": "Action, Twin Stick Shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/zOGwVsSFsbk",
                "mediaType": "Nintendo Launch"
            }
        ],
        "moreDetails": [],
        "index": 70
    },
    {
        "date": "1653006765630",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "Ain-8qyALU4",
        "title": "Looking for Heals",
        "developer": "Blue Bomber Games",
        "releaseDate": "June 10, 2019",
        "platforms": [
            "Windows"
        ],
        "genre": "Dungeon Crawler, Rogue-lite",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Ain-8qyALU4",
                "mediaType": "Early Access"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 71
    },
    {
        "date": "1653006765629",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "CEJqyd-5VCI",
        "title": "One Night Stand",
        "developer": "Games by Kinmoku",
        "releaseDate": "Q3 2019",
        "platforms": [
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Visual Novel",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/CEJqyd-5VCI",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "index": 72
    },
    {
        "date": "1653006765628",
        "conference": "Kinda Funny Games",
        "day": "2018",
        "image": "ameLj9blFcw",
        "title": "DeMagnete VR",
        "developer": {
            "devLink": "https://bitcakestudio.com/",
            "devName": "BitCake Studio"
        },
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Windows"
        ],
        "genre": "Puzzle",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ameLj9blFcw",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 73
    },
    {
        "date": "1653006765627",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "c4Z-0hl5yTY",
        "title": "Falcon Age",
        "developer": {
            "devLink": "http://outerloopgames.com",
            "devName": "Outerloop Games"
        },
        "releaseDate": "Q3 2019",
        "platforms": [
            "PlayStation 4"
        ],
        "genre": "Action Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/c4Z-0hl5yTY",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive",
            "epic exclusive"
        ],
        "vr": "all",
        "index": 74
    },
    {
        "date": "1653006765626",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "XxBlJ-css10",
        "title": "RAWMEN",
        "developer": " ANIMAL",
        "releaseDate": "2019",
        "platforms": [
            "Windows"
        ],
        "genre": "Third-person shooter, Action, Multiplayer",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/XxBlJ-css10",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 75
    },
    {
        "date": "1653006765625",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "dxm1DkRGrBg",
        "title": "Freedom Finger",
        "developer": " Wide Right Interactive\t",
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "2D Shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/dxm1DkRGrBg",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 76
    },
    {
        "date": "1653006765624",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "A-j9490u0TA",
        "title": "SkateBIRD",
        "developer": "Glass Bottom Games",
        "releaseDate": "2020",
        "platforms": [
            "Windows",
            "MacOS",
            "Linux"
        ],
        "genre": "Skateboarding, Sports",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/A-j9490u0TA",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 77
    },
    {
        "date": "1653006765623",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "xa7I99iws9I",
        "title": "Summer Catchers",
        "developer": " FaceIT",
        "releaseDate": "July 2019",
        "platforms": [
            "Windows"
        ],
        "genre": "Adventure, Racing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/xa7I99iws9I",
                "mediaType": "Showcase"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 78
    },
    {
        "date": "1653006765622",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "uMPJC9Ddbdg",
        "title": "Fling To The Finish",
        "developer": "SplitSideGames",
        "releaseDate": "2019",
        "platforms": [
            "Switch",
            "Windows",
            "MacOS"
        ],
        "genre": "Co-op Racing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/uMPJC9Ddbdg",
                "mediaType": "Kickstarter"
            }
        ],
        "moreDetails": [],
        "index": 79
    },
    {
        "date": "1653006765621",
        "conference": "Kinda Funny Games",
        "day": "2019",
        "image": "o4AcYJEtHZA",
        "title": "Police Stories",
        "developer": "HypeTrain Digital",
        "releaseDate": "September 19, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows",
            "MacOS",
            "Linux"
        ],
        "genre": "Top-down Shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/o4AcYJEtHZA",
                "mediaType": "Release Date Trailer"
            }
        ],
        "moreDetails": [],
        "index": 80
    },
    {
        "date": "1653006765620",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "vACqdaSnvp0",
        "title": "Brave Earth: Prologue",
        "developer": "[K]ayinworks\t",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "Platformer, Action",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/vACqdaSnvp0",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 81
    },
    {
        "date": "1653006765619",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "ocU7-o6gsWQ",
        "title": "Stronghold Warlords",
        "developer": "Firefly Studios",
        "releaseDate": "2020",
        "platforms": [
            "Windows"
        ],
        "genre": "RTS, Strategy, City Builder",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ocU7-o6gsWQ",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 82
    },
    {
        "date": "1653006765618",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "uUVIepHmMJw",
        "title": "Lucifer Within Us",
        "developer": {
            "devLink": "http://www.kitfoxgames.com/en",
            "devName": "Kitfox Games"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "Mystery, Simulation",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/uUVIepHmMJw",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 83
    },
    {
        "date": "1653006765617",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "30iHXafyXlw",
        "title": "Superliminal",
        "developer": "Pillow Castle Games",
        "releaseDate": "To Be Announced",
        "genre": "Puzzle",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/30iHXafyXlw",
                "mediaType": "Teaser"
            }
        ],
        "moreDetails": [],
        "index": 84
    },
    {
        "date": "1653006765616",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "OLOjq-djqc8",
        "title": "Undying",
        "developer": "Vanimals",
        "releaseDate": "Q1 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Survival",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/OLOjq-djqc8",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 85
    },
    {
        "date": "1653006765615",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "S4kJ5KaoF2Q",
        "title": "CastleStorm 2",
        "developer": "Zen Studios",
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Tower Defense, Strategy",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/S4kJ5KaoF2Q",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "epic exclusive"
        ],
        "index": 86
    },
    {
        "date": "1653006765614",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "qDcjuvWQH70",
        "title": "Trials of Fire: New Character",
        "developer": "Whatboy Games\t",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "Strategy, RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/qDcjuvWQH70",
                "mediaType": "New Character"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 87
    },
    {
        "date": "1653006765613",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "LyIOwR6pmIU",
        "title": "Lost Ember",
        "developer": "Mooneye Studios",
        "releaseDate": "July 19, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Exploration, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/LyIOwR6pmIU",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 88
    },
    {
        "date": "1653006765612",
        "conference": "Kinda Funny Games",
        "day": "3",
        "image": "sCnaLFCzryU",
        "title": "Adams Ascending",
        "developer": "Parable Worlds",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "Exploration",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/sCnaLFCzryU",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 89
    },
    {
        "date": "1653006765611",
        "conference": "Ubisoft",
        "day": "3",
        "image": "-ZUx1sXB12c",
        "title": "Gods &amp; Monsters",
        "developer": "Ubisoft",
        "releaseDate": "February 25, 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows",
            "Stadia"
        ],
        "genre": "Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/-ZUx1sXB12c",
                "mediaType": "Cinematic Reveal"
            }
        ],
        "moreDetails": [],
        "index": 90
    },
    {
        "date": "1653006765610",
        "conference": "Ubisoft",
        "day": "3",
        "image": "WNctWD8DnvQ",
        "title": "Roller Champions",
        "developer": {
            "devLink": "https://montreal.ubisoft.com/en/",
            "devName": "Ubisoft Montreal"
        },
        "releaseDate": "2019",
        "platforms": [
            "Windows"
        ],
        "genre": "PvP, Sports",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/WNctWD8DnvQ",
                "mediaType": "Reveal"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/cFdyq9I1HZo",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 91
    },
    {
        "date": "1653006765609",
        "conference": "Ubisoft",
        "day": "3",
        "image": "0FMdd1e06dQ",
        "title": "Uplay+ Subscription Service",
        "developer": "Ubisoft",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows",
            "Stadia"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/0FMdd1e06dQ",
                "mediaType": "Highlight Reel"
            }
        ],
        "moreDetails": [],
        "index": 92
    },
    {
        "date": "1653006765608",
        "conference": "Ubisoft",
        "day": "3",
        "image": "th-qvZwoc4w",
        "title": "Tom Clancy's The Division 2: Year 1",
        "developer": {
            "devLink": "https://www.massive.se",
            "devName": "Massive Entertainment"
        },
        "releaseDate": "June 10, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "Stadia"
        ],
        "genre": "Action RPG, TPS",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/th-qvZwoc4w",
                "mediaType": "First Look"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/sJ1hdbF2fZk",
                "mediaType": "Episode 3"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/-HIIPHcxvNk",
                "mediaType": "Free Event"
            }
        ],
        "moreDetails": [],
        "index": 93
    },
    {
        "date": "1653006765607",
        "conference": "Ubisoft",
        "day": "3",
        "image": "wZFdBeSNzxw",
        "title": "Tom Clancy's Rainbow Six Quarantine",
        "developer": {
            "devLink": "https://montreal.ubisoft.com/en/",
            "devName": "Ubisoft Montreal"
        },
        "releaseDate": "Q1 2020",
        "genre": "Survival FPS, 3 Player Co-op",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/wZFdBeSNzxw",
                "mediaType": "Reveal"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/b3wHIvupJLs",
                "mediaType": "Gameplay Details"
            }
        ],
        "moreDetails": [],
        "index": 94
    },
    {
        "date": "1653006765606",
        "conference": "Ubisoft",
        "day": "3",
        "image": "jI9EpQWRrdQ",
        "title": "For Honor: Shadow of the Hitokiri",
        "developer": {
            "devLink": "https://montreal.ubisoft.com/en/",
            "devName": "Ubisoft Montreal"
        },
        "releaseDate": "June 10, 2019",
        "genre": "PvP, Melee Combat",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/jI9EpQWRrdQ",
                "mediaType": "Event Cinematic"
            }
        ],
        "moreDetails": [],
        "index": 95
    },
    {
        "date": "1653006765606",
        "conference": "Ubisoft",
        "day": "3",
        "image": "hRwU7HEHR9g",
        "title": "Just Dance ",
        "developer": {
            "devLink": "https://www.ubisoft.com/en-US/studio/paris.aspx",
            "devName": "Ubisoft Paris"
        },
        "releaseDate": "November 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Stadia"
        ],
        "genre": "Rhythm, dancing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/hRwU7HEHR9g",
                "mediaType": "Live Action"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/UrtK008f_u0",
                "mediaType": "Song List"
            }
        ],
        "moreDetails": [],
        "index": 96
    },
    {
        "date": "1653006765605",
        "conference": "Ubisoft",
        "day": "3",
        "image": "Gi31RjPCeHg",
        "title": "Tom Clancy's Elite Squad",
        "developer": {
            "devLink": "https://www.ubisoft.com/en-US/studio/owlient.aspx",
            "devName": "Ubisoft Owlient"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Mobile"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Gi31RjPCeHg",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 97
    },
    {
        "date": "1653006765604",
        "conference": "Ubisoft",
        "day": "3",
        "image": "ASfUcaVTOpI",
        "title": "Tom Clancy's Ghost Recon: Breakpoint",
        "developer": {
            "devLink": "https://www.ubisoft.com/en-US/studio/paris.aspx",
            "devName": "Ubisoft Paris"
        },
        "releaseDate": "October 4, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Tactical shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ASfUcaVTOpI",
                "mediaType": "Cinematic"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/U5e1ThK_le4",
                "mediaType": "Gameplay"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/XiIiqCktG2g",
                "mediaType": "Community Program"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/zfyoSvkTqQc",
                "mediaType": "Jon Bernthal Interview"
            }
        ],
        "moreDetails": [],
        "index": 98
    },
    {
        "date": "1653006765603",
        "conference": "Ubisoft",
        "day": "3",
        "image": "ZWT0YH1WFNk",
        "title": "Brawlhalla: Adventure Time Crossover",
        "developer": "Blue Mammoth Games",
        "releaseDate": "June 10, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows",
            "MacOS"
        ],
        "genre": "\tFighting",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ZWT0YH1WFNk",
                "mediaType": "Trailer"
            }
        ],
        "moreDetails": [],
        "index": 99
    },
    {
        "date": "1653006765602",
        "conference": "Ubisoft",
        "day": "3",
        "image": "y66TJIUkWBc",
        "title": "Tom Clancy's Rainbow Six Siege: Operation Phantom Sight",
        "developer": {
            "devLink": "https://montreal.ubisoft.com/en/",
            "devName": "Ubisoft Montreal"
        },
        "releaseDate": "June 11, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "PvP, Tactical, FPS",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/y66TJIUkWBc",
                "mediaType": "Season Trailer"
            }
        ],
        "moreDetails": [],
        "index": 100
    },
    {
        "date": "1653006765601",
        "conference": "Ubisoft",
        "day": "3",
        "image": "KpnzF5hAv6M",
        "title": "Mythic Quest: Raven's Banquet",
        "developer": "Ubisoft",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/KpnzF5hAv6M",
                "mediaType": "Trailer"
            }
        ],
        "moreDetails": [],
        "index": 101
    },
    {
        "date": "1653006765600",
        "conference": "Ubisoft",
        "day": "3",
        "image": "3orYqGDSDUk",
        "title": "Watch Dogs Legion",
        "developer": {
            "devLink": "https://montreal.ubisoft.com/en/",
            "devName": "Ubisoft Montreal"
        },
        "releaseDate": "March 6, 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "Stadia"
        ],
        "genre": "Action-adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/3orYqGDSDUk",
                "mediaType": "Demo"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/Zi8k4KGyW6o",
                "mediaType": "Premiere"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/crubKIFUytQ",
                "mediaType": "Live Overview"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/UyZfdSp50a0",
                "mediaType": "Collector's Edition"
            }
        ],
        "moreDetails": [],
        "index": 102
    },
    {
        "date": "1653006765599",
        "conference": "Ubisoft",
        "day": "3",
        "image": "a5Zsb6eYfbw",
        "title": "For Honor: Spectator Mode",
        "developer": {
            "devLink": "https://montreal.ubisoft.com/en/",
            "devName": "Ubisoft Montreal"
        },
        "releaseDate": "June 10, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "PvP, Melee Combat",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/a5Zsb6eYfbw",
                "mediaType": "Mode"
            }
        ],
        "moreDetails": [],
        "index": 103
    },
    {
        "date": "1653006765598",
        "conference": "Ubisoft",
        "day": "3",
        "image": "HEqjlsy1QI4",
        "title": "Assassin's Creed Odyssey: Story Creator Mode",
        "developer": {
            "devLink": "https://quebec.ubisoft.com/en/",
            "devName": "Ubisoft Quebec"
        },
        "releaseDate": "June 10, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows",
            "Stadia"
        ],
        "genre": "Action, RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/HEqjlsy1QI4",
                "mediaType": "Mode"
            }
        ],
        "moreDetails": [],
        "index": 104
    },
    {
        "date": "1653006765597",
        "conference": "Ubisoft",
        "day": "3",
        "image": "a3rJvDHw5Hw",
        "title": "Trials Rising: Season 2",
        "developer": {
            "devLink": "https://redlynx.com/",
            "devName": "RedLynx"
        },
        "releaseDate": "June 10, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Racing, Extreme Sports",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/a3rJvDHw5Hw",
                "mediaType": "Season Trailer"
            }
        ],
        "moreDetails": [],
        "index": 105
    },
    {
        "date": "1653006765596",
        "conference": "Ubisoft",
        "day": "3",
        "image": "vtx_mjjN9Hw",
        "title": "Steep DLC",
        "developer": {
            "devLink": "https://www.ubisoft.com/en-US/studio/annecy.aspx",
            "devName": "Ubisoft Annecy"
        },
        "releaseDate": "June 10, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Extreme Sports",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/vtx_mjjN9Hw",
                "mediaType": "DLC"
            }
        ],
        "moreDetails": [],
        "index": 106
    },
    {
        "date": "1653006765595",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "Smde5D2JNnc",
        "title": "El Hijo",
        "developer": {
            "devLink": "https://handy-games.com",
            "devName": "HandyGames"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Strategy, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Smde5D2JNnc",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 107
    },
    {
        "date": "1653006765594",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "9d_zN8-puEU",
        "title": "Genesis Noir",
        "developer": "Feral Cat Den\t",
        "releaseDate": "To Be Announced",
        "genre": "Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/9d_zN8-puEU",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 108
    },
    {
        "date": "1653006765593",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "LxFZiuKC_38",
        "title": "Warframe Empyrean",
        "developer": {
            "devLink": "https://www.digitalextremes.com/",
            "devName": "Digital Extremes"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Third-Person Shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/LxFZiuKC_38",
                "mediaType": "Expansion"
            }
        ],
        "moreDetails": [],
        "index": 109
    },
    {
        "date": "1653006765592",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "C6fG5h32amU",
        "title": "Telling Lies",
        "developer": "Sam Barlow, Furious Bee Limited",
        "releaseDate": "2019",
        "platforms": [
            "Windows",
            "MacOS"
        ],
        "genre": "Simulation, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/C6fG5h32amU",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "index": 110
    },
    {
        "date": "1653006765591",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "cV3Cfed4RBU",
        "title": "Terraria: Journeys End",
        "developer": "Re-Logic",
        "releaseDate": "2019",
        "platforms": [
            "Windows"
        ],
        "genre": "Sandbox, action-adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/cV3Cfed4RBU",
                "mediaType": "Update"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 111
    },
    {
        "date": "1653006765590",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "a1ixsDRnT_Q",
        "title": "Maneater",
        "developer": {
            "devLink": "https://www.tripwireinteractive.com/",
            "devName": "Tripwire Interactive"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "RPG, Action, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/a1ixsDRnT_Q",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [],
        "index": 112
    },
    {
        "date": "1653006765589",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "HOna9z_thIg",
        "title": "Valfaris",
        "developer": " Steel Mantis\t",
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Windows"
        ],
        "genre": "Action, Retro, Side-scroller",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/HOna9z_thIg",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 113
    },
    {
        "date": "1653006765588",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "RW9s86k2Y2o",
        "title": "Cris Tales",
        "developer": "Modus Games",
        "releaseDate": "2020",
        "platforms": [
            "Windows"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/RW9s86k2Y2o",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 114
    },
    {
        "date": "1653006765587",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "TNDPU28X3Zc",
        "title": "Auto Chess",
        "developer": "Drodo Studios",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/TNDPU28X3Zc",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive",
            "epic exclusive"
        ],
        "index": 115
    },
    {
        "date": "1653006765586",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "TH7rl3oZUZs",
        "title": "Per Aspera",
        "developer": {
            "devLink": "https://rawfury.com",
            "devName": "Raw Fury"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "Base-building, Strategy",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/TH7rl3oZUZs",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 116
    },
    {
        "date": "1653006765585",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "8ZK2Tz94n-Q",
        "title": "Vermintide 2 Versus",
        "developer": {
            "devLink": "https://www.fatshark.se",
            "devName": "Fatshark"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action, Co-op, PVP",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/8ZK2Tz94n-Q",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 117
    },
    {
        "date": "1653006765584",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "DdFv6ZnvLUo",
        "title": "Songs of Conquest",
        "developer": "LavaPotion",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "Adventure, Strategy",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/DdFv6ZnvLUo",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 118
    },
    {
        "date": "1653006765583",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "aSAqTmwY2eY",
        "title": "Shenmue 3",
        "developer": "Neilo,Ys Net",
        "releaseDate": "November 19, 2019",
        "platforms": [
            "PlayStation 4",
            "Windows"
        ],
        "genre": "Action-adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/aSAqTmwY2eY",
                "mediaType": "Story/Gameplay"
            }
        ],
        "moreDetails": [
            "epic exclusive"
        ],
        "index": 119
    },
    {
        "date": "1653006765583",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "wyMAUjcRvr8",
        "title": "Planet Zoo",
        "developer": {
            "devLink": "https://www.frontier.co.uk/",
            "devName": "Frontier Developments"
        },
        "releaseDate": "November 5, 2019",
        "platforms": [
            "Windows"
        ],
        "genre": "Construction, Management simulation",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/wyMAUjcRvr8",
                "mediaType": "Gameplay Trailer"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 120
    },
    {
        "date": "1653006765582",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "rOy-0Folet4",
        "title": "Grift Lands",
        "developer": {
            "devLink": "https://www.klei.com",
            "devName": "Klei Entertainment"
        },
        "releaseDate": "July 11, 2019",
        "platforms": [
            "Windows"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/rOy-0Folet4",
                "mediaType": "Gameplay Trailer"
            }
        ],
        "moreDetails": [
            "exclusive",
            "epic exclusive"
        ],
        "index": 121
    },
    {
        "date": "1653006765581",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "pcBei3JUz5s",
        "title": "Remnant: From The Ashes",
        "developer": {
            "devLink": "https://gunfiregames.com/",
            "devName": "Gunfire Games"
        },
        "releaseDate": "August 20, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/pcBei3JUz5s",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 122
    },
    {
        "date": "1653006765580",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "7n6qbv1lsiQ",
        "title": "Zombie Army 4: Dead War",
        "developer": "Rebellion",
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Coop Shooter, FPS",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/7n6qbv1lsiQ",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [
            "epic exclusive"
        ],
        "index": 123
    },
    {
        "date": "1653006765579",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "PeDoHNZthX4",
        "title": "Age of Wonders: Planetfall",
        "developer": {
            "devLink": "https://triumph.net",
            "devName": "Triumph Studios\t"
        },
        "releaseDate": "August 6, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Strategy, Sci-fi",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/PeDoHNZthX4",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 124
    },
    {
        "date": "1653006765578",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "VmDbh9J2X6g",
        "title": "Last Oasis",
        "developer": "Donkey Crew",
        "releaseDate": "September 3, 2019",
        "genre": "Survival, Melee Combat",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/VmDbh9J2X6g",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 125
    },
    {
        "date": "1653006765577",
        "conference": "The Pc Gaming Show",
        "image": "RUecb1ABpeM",
        "title": "Conan Chop Chop",
        "developer": "Funcom",
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "2D Roguelike",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/RUecb1ABpeM",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 126
    },
    {
        "date": "1653006765576",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "Hw4s0XnzaDw",
        "title": "Mutant Year Zero: Seed of Evil",
        "developer": "The Bearded Ladies Consulting",
        "releaseDate": "July 30, 2019",
        "platforms": [
            "PlayStation 4",
            "Switch",
            "Windows"
        ],
        "genre": "Strategy, Tactical",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Hw4s0XnzaDw",
                "mediaType": "DLC"
            }
        ],
        "moreDetails": [],
        "index": 127
    },
    {
        "date": "1653006765575",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "aEfm_lt4cos",
        "title": "Unexplored 2: The Wayfarer's Legacy",
        "developer": "Ludomotion ",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "Action, Rogue-lite",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/aEfm_lt4cos",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 128
    },
    {
        "date": "1653006765574",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "T8C1Jj9f8OQ",
        "title": "Midnight Ghost Hunt",
        "developer": " Vaulted Sky Games",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "Prop Hunt, Versus",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/T8C1Jj9f8OQ",
                "mediaType": "Gameplay Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 129
    },
    {
        "date": "1653006765573",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "BSYPEljXohk",
        "title": "Mosiac",
        "developer": {
            "devLink": "https://www.krillbite.com/",
            "devName": "Krillbite Studio"
        },
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "MacOS",
            "Linux"
        ],
        "genre": "Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/BSYPEljXohk",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 130
    },
    {
        "date": "1653006765572",
        "conference": "The Pc Gaming Show",
        "day": "2019",
        "image": "pytazpmR6eE",
        "title": "Chivalry 2",
        "developer": {
            "devLink": "http://tornbanner.com/#all",
            "devName": "Torn Banner Studios"
        },
        "releaseDate": "2020",
        "platforms": [
            "Windows"
        ],
        "genre": "Melee Combat",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/pytazpmR6eE",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [
            "epic exclusive"
        ],
        "index": 131
    },
    {
        "date": "1653006765571",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "MPHYviL8lcA",
        "title": "Starmancer",
        "developer": {
            "devLink": "https://chucklefish.org/",
            "devName": "Chucklefish"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "genre": "Simulation, Strategy",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/MPHYviL8lcA",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 132
    },
    {
        "date": "1653006765570",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "cFLXoGzXxJc",
        "title": "Vampire: The Masquerade - Bloodlines 2",
        "developer": {
            "devLink": "https://www.hardsuitlabs.com/",
            "devName": "Hardsuit Labs"
        },
        "releaseDate": "Q1 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/cFLXoGzXxJc",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 133
    },
    {
        "date": "1653006765569",
        "conference": "The Pc Gaming Show",
        "day": "3",
        "image": "6KTvZtCOEEI",
        "title": "Evil Genius 2 World Domination",
        "developer": {
            "devLink": "https://rebellion.com/",
            "devName": "Rebellion"
        },
        "releaseDate": "2020",
        "platforms": [
            "Windows"
        ],
        "genre": "Real-time strategy, simulation",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/6KTvZtCOEEI",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 134
    },
    {
        "date": "1653006765568",
        "conference": "Uploadvr",
        "day": "3",
        "image": "-_jYJaIgYvw",
        "title": "Audica",
        "developer": {
            "devLink": "https://www.harmonixmusic.com/",
            "devName": " Harmonix Music Systems, Inc\t"
        },
        "releaseDate": "To Be Announced",
        "genre": "Rhythm",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/-_jYJaIgYvw",
                "mediaType": "Update"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 135
    },
    {
        "date": "1653006765567",
        "conference": "Uploadvr",
        "day": "3",
        "image": "ZURWyejTovg",
        "title": "Budget Cuts 2",
        "developer": "Fast Travel Games",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ZURWyejTovg",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 136
    },
    {
        "date": "1653006765566",
        "conference": "Uploadvr",
        "day": "2019",
        "image": "QRv7nSE620o",
        "title": "Arizona Sunshine: The Damned DLC",
        "developer": "Vertigo Games",
        "releaseDate": "August 27, 2019",
        "platforms": [
            "PlayStation 4"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/QRv7nSE620o",
                "mediaType": "DLC Trailer"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "vr": "playstation",
        "index": 137
    },
    {
        "date": "1653006765566",
        "conference": "Uploadvr",
        "day": "3",
        "image": "WYnmkeyAF8U",
        "title": "Arizona Sunshine",
        "developer": "Vertigo Games",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/WYnmkeyAF8U",
                "mediaType": "Reveal Trailer"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 138
    },
    {
        "date": "1653006765565",
        "conference": "Uploadvr",
        "day": "3",
        "image": "PSNFZ0-QPSY",
        "title": "Pistol Whip",
        "developer": "Cloudhead Games",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/PSNFZ0-QPSY",
                "mediaType": "Reveal Trailer"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 139
    },
    {
        "date": "1653006765564",
        "conference": "Uploadvr",
        "day": "3",
        "image": "nTxp-BfcOYA",
        "title": "Boneworks",
        "developer": "Stress Level Zero",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/nTxp-BfcOYA",
                "mediaType": "Gameplay Trailer"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 140
    },
    {
        "date": "1653006765563",
        "conference": "Uploadvr",
        "day": "3",
        "image": "2FoxozWfMtk",
        "title": "Disciples of Dawn",
        "developer": "Stonepunk Studios",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/2FoxozWfMtk",
                "mediaType": "Teaser"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 141
    },
    {
        "date": "1653006765562",
        "conference": "Uploadvr",
        "day": "3",
        "image": "vTsuXZOsDxc",
        "title": "Solaris: Offworld Conflict",
        "developer": "First Contact Entertainment",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/vTsuXZOsDxc",
                "mediaType": "Teaser"
            }
        ],
        "moreDetails": [],
        "vr": "oculus",
        "index": 142
    },
    {
        "date": "1653006765561",
        "conference": "Uploadvr",
        "day": "3",
        "image": "sE5j5ow6k14",
        "title": "The Walking Dead: Onslaught",
        "developer": "Survios",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/sE5j5ow6k14",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 143
    },
    {
        "date": "1653006765561",
        "conference": "Uploadvr",
        "day": "3",
        "image": "o0dXGp5Db04",
        "title": "Physical Release Announcements from Perp Games",
        "developer": "Perp Games",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/o0dXGp5Db04",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 144
    },
    {
        "date": "1653006765560",
        "conference": "Uploadvr",
        "day": "3",
        "image": "yKOXNJuM2mk",
        "title": "Acron: Attack of the Squirrels",
        "developer": "Resolution Games",
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows",
            "Mobile"
        ],
        "genre": "Casual",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/yKOXNJuM2mk",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 145
    },
    {
        "date": "1653006765559",
        "conference": "Uploadvr",
        "day": "3",
        "image": "w_iBM1o12IM",
        "title": "The Curious Tale of the Stolen Pets",
        "developer": "Fast Travel Games",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/w_iBM1o12IM",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 146
    },
    {
        "date": "1653006765558",
        "conference": "Uploadvr",
        "day": "3",
        "image": "nZyhVJYKWiU",
        "title": "Budget Cuts",
        "developer": "Fast Travel Games",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/nZyhVJYKWiU",
                "mediaType": "VR Footage"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 147
    },
    {
        "date": "1653006765557",
        "conference": "Uploadvr",
        "day": "3",
        "image": "RqA_t1l4ORQ",
        "title": "I Expect You to Die: Seat of Power",
        "developer": "Schell Games",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/RqA_t1l4ORQ",
                "mediaType": "DLC"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 148
    },
    {
        "date": "1653006765556",
        "conference": "Uploadvr",
        "day": "3",
        "image": "FilA-i4-quk",
        "title": "Hot Dogs, Horseshoes &amp; Hand Grenades: Meat Fortress",
        "developer": " RUST LTD.",
        "releaseDate": "June 28, 2019",
        "platforms": [
            "Windows"
        ],
        "genre": "FPS, Multiplayer",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/FilA-i4-quk",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 149
    },
    {
        "date": "1653006765555",
        "conference": "Uploadvr",
        "day": "3",
        "image": "vgohRmx-YcI",
        "title": "Garden of the Sea",
        "developer": "Neat Corporation",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/vgohRmx-YcI",
                "mediaType": "VR Segment"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 150
    },
    {
        "date": "1653006765555",
        "conference": "Uploadvr",
        "day": "3",
        "image": "hwvl-z1xAlE",
        "title": "Fujii",
        "developer": "Funktronic Labs",
        "releaseDate": "June 27, 2019",
        "genre": "Simulation, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/hwvl-z1xAlE",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 151
    },
    {
        "date": "1653006765554",
        "conference": "Uploadvr",
        "day": "3",
        "image": "rXH9vUNktmM",
        "title": "Espire 1",
        "developer": "Digital Lode",
        "releaseDate": "2019",
        "platforms": [
            "Windows"
        ],
        "genre": "Action, Stealth",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/rXH9vUNktmM",
                "mediaType": "VR Segment"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 152
    },
    {
        "date": "1653006765553",
        "conference": "Uploadvr",
        "day": "3",
        "image": "_GyqOC8SXjA",
        "title": "The Soulkeeper VR",
        "developer": "Helm Systems",
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Windows"
        ],
        "genre": "Melee Combat",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/_GyqOC8SXjA",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 153
    },
    {
        "date": "1653006765552",
        "conference": "Uploadvr",
        "day": "3",
        "image": "Y8y-aB3atPM",
        "title": "Dance Central",
        "developer": {
            "devLink": "https://www.harmonixmusic.com/",
            "devName": " Harmonix Music Systems, Inc\t"
        },
        "releaseDate": "June 10, 2019",
        "genre": "Dance",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Y8y-aB3atPM",
                "mediaType": "Update"
            }
        ],
        "moreDetails": [],
        "vr": "all",
        "index": 154
    },
    {
        "date": "1653006765551",
        "conference": "Other",
        "day": "3",
        "image": "5tpc6EYVF_o",
        "title": "The Lord of the Rings: Adventure Card Game",
        "developer": {
            "devLink": "https://www.fantasyflightinteractive.com/",
            "devName": "Fantasy Flight Interactive"
        },
        "releaseDate": "August 8, 2019",
        "platforms": [
            "PlayStation 4",
            "Windows",
            "MacOS"
        ],
        "genre": "Card Game",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/5tpc6EYVF_o",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "index": 155
    },
    {
        "date": "1653006765550",
        "conference": "Other",
        "day": "3",
        "image": "rzGoNlmLxDE",
        "title": "Persona 5 Royal",
        "developer": {
            "devLink": "https://atlus.com/p5r/",
            "devName": "ATLUS"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4"
        ],
        "genre": "Role-playing, social simulation",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/rzGoNlmLxDE",
                "mediaType": "Story/Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 156
    },
    {
        "date": "1653006765549",
        "conference": "Other",
        "day": "3",
        "image": "F9GL-UcQl2E",
        "title": "The Legend of Heroes: Trails of Cold Steel III",
        "developer": {
            "devLink": "https://nisamerica.com/tags/nihon-falcom",
            "devName": "\tNihon Falcom"
        },
        "releaseDate": "September 24, 2019",
        "platforms": [
            "PlayStation 4"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/F9GL-UcQl2E",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 157
    },
    {
        "date": "1653006765548",
        "conference": "Other",
        "day": "2",
        "image": "VA2SB02TJGU",
        "title": "Destroy All Humans!",
        "developer": {
            "devLink": "https://black-forest-games.com/",
            "devName": "Black Forest Games, Pandemic Studios"
        },
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/VA2SB02TJGU",
                "mediaType": "Demo"
            }
        ],
        "moreDetails": [],
        "index": 158
    },
    {
        "date": "1653006765547",
        "conference": "Other",
        "day": "2",
        "image": "aTCmN8TtkgQ",
        "title": "Final Fantasy VII Remake",
        "developer": {
            "devLink": "https://www.square-enix.com/",
            "devName": "Square Enix"
        },
        "releaseDate": "March 3, 2020",
        "platforms": [
            "PlayStation 4"
        ],
        "genre": "Action RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/aTCmN8TtkgQ",
                "mediaType": "Story/Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 159
    },
    {
        "date": "1653006765546",
        "conference": "Other",
        "day": "2",
        "image": "-g4I7NOz2dA",
        "title": "Scavengers",
        "developer": "Midwinter Entertainment",
        "releaseDate": "To Be Announced",
        "genre": "Multiplayer, Survival",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/-g4I7NOz2dA",
                "mediaType": "Gameplay Trailer"
            }
        ],
        "moreDetails": [],
        "index": 160
    },
    {
        "date": "1653006765545",
        "conference": "Other",
        "day": "2",
        "image": "QN6E6r0reNw",
        "title": "Borderlands 2 DLC",
        "developer": {
            "devLink": "https://www.gearboxsoftware.com",
            "devName": "Gearbox Software"
        },
        "releaseDate": "June 9, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "\tAction role-playing, first-person shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/QN6E6r0reNw",
                "mediaType": "DLC"
            }
        ],
        "moreDetails": [],
        "index": 161
    },
    {
        "date": "1653006765544",
        "conference": "Devolver Digital",
        "day": "2",
        "image": "q-AsYZCdpts",
        "title": "My Friend Pedro",
        "developer": {
            "devLink": "https://www.deadtoast.com/",
            "devName": "DeadToast Entertainment"
        },
        "releaseDate": "June 20, 2019",
        "platforms": [
            "Switch",
            "Windows"
        ],
        "genre": "Shoot 'em up",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/q-AsYZCdpts",
                "mediaType": "Release Trailer"
            }
        ],
        "moreDetails": [],
        "index": 162
    },
    {
        "date": "1653006765543",
        "conference": "Devolver Digital",
        "day": "2",
        "image": "GjmIWMataSI",
        "title": "The Messenger Picnic Panic",
        "developer": {
            "devLink": "https://www.sabotagestudio.com/",
            "devName": "Sabotage Studios"
        },
        "releaseDate": "July 11, 2019",
        "platforms": [
            "PlayStation 4",
            "Switch",
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/GjmIWMataSI",
                "mediaType": "Release Date Trailer"
            }
        ],
        "moreDetails": [],
        "index": 163
    },
    {
        "date": "1653006765542",
        "conference": "Devolver Digital",
        "day": "2",
        "image": "o-L0_TJ4i-o",
        "title": "Carrion",
        "developer": " Phobia Game Studio\t",
        "releaseDate": "June 1, 2020",
        "genre": "Gore, Action",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/o-L0_TJ4i-o",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 164
    },
    {
        "date": "1653006765541",
        "conference": "Devolver Digital",
        "day": "2",
        "image": "YusO47cGJdI",
        "title": "Enter the Gungeon: House of the Gundead",
        "developer": "Devolver Digital",
        "releaseDate": "2020",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/YusO47cGJdI",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 165
    },
    {
        "date": "1653006765541",
        "conference": "Devolver Digital",
        "day": "2",
        "image": "A6cAS2hFvp0",
        "title": "Devolver Bootleg",
        "developer": {
            "devLink": "http://www.doinksoft.com/",
            "devName": "doinksoft"
        },
        "releaseDate": "June 9, 2019",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/A6cAS2hFvp0",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 166
    },
    {
        "date": "1653006765540",
        "conference": "Devolver Digital",
        "day": "2",
        "image": "2OAVHWmeV0c",
        "title": "Fall Guys",
        "developer": "Media Tonic",
        "releaseDate": "Q1 2020",
        "platforms": [
            "PlayStation 4",
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/2OAVHWmeV0c",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 167
    },
    {
        "date": "1653006765539",
        "conference": "Bethesda",
        "day": "2",
        "image": "2HOClc6Svg4",
        "title": "DOOM Eternal",
        "developer": {
            "devLink": "https://www.idsoftware.com/",
            "devName": "id Software"
        },
        "releaseDate": "November 22, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows",
            "Stadia"
        ],
        "genre": "First-person shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/2HOClc6Svg4",
                "mediaType": "Story"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/BbIBsrnkOf0",
                "mediaType": "Multiplayer"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/vrXkFJhi5jc",
                "mediaType": "Demo"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/NzcjAQHFohk",
                "mediaType": "Demo 2"
            }
        ],
        "moreDetails": [],
        "index": 168
    },
    {
        "date": "1653006765538",
        "conference": "Bethesda",
        "day": "2",
        "image": "SSWZQC0BVvU",
        "title": "Orion (Tech)",
        "developer": "Bethesda, id Software",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/SSWZQC0BVvU",
                "mediaType": "Presentation"
            }
        ],
        "moreDetails": [],
        "index": 169
    },
    {
        "date": "1653006765537",
        "conference": "Bethesda",
        "day": "2",
        "image": "MXv5IDp8y74",
        "title": "DEATHLOOP",
        "developer": {
            "devLink": "https://www.arkane-studios.com/lyon",
            "devName": "Arkane Lyon"
        },
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/MXv5IDp8y74",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 170
    },
    {
        "date": "1653006765536",
        "conference": "Bethesda",
        "day": "2",
        "image": "O6K_ZzMWTTo",
        "title": "Wolfenstein: Youngblood",
        "developer": {
            "devLink": "https://www.machinegames.com",
            "devName": "MachineGames"
        },
        "releaseDate": "July 26, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows",
            "Stadia"
        ],
        "genre": "First-person shooter, Co-op",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/O6K_ZzMWTTo",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 171
    },
    {
        "date": "1653006765535",
        "conference": "Bethesda",
        "day": "2",
        "image": "IzEFv4CyXQA",
        "title": "Rage 2 Insanity Rules",
        "developer": {
            "devLink": "https://avalanchestudios.com/",
            "devName": "Avalanche Studios"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "Stadia"
        ],
        "genre": "\tFirst-person shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/IzEFv4CyXQA",
                "mediaType": "DLC Trailer"
            }
        ],
        "moreDetails": [],
        "index": 172
    },
    {
        "date": "1653006765534",
        "conference": "Bethesda",
        "day": "2",
        "image": "RlKDNzwYoSE",
        "title": "The Elder Scrolls: Legends",
        "developer": {
            "devLink": "https://www.sparkypants.com/",
            "devName": "Sparkypants Studios"
        },
        "releaseDate": "June 27, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows",
            "MacOS",
            "Linux",
            "Mobile"
        ],
        "genre": "Collectible card",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/RlKDNzwYoSE",
                "mediaType": "Trailer"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/KblLW-scAcM",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [],
        "index": 173
    },
    {
        "date": "1653006765533",
        "conference": "Bethesda",
        "day": "2",
        "image": "FtQjGPfkEe8",
        "title": "Commander Keen",
        "developer": "ZeniMax Online Studios",
        "releaseDate": "2019",
        "platforms": [
            "Mobile"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/FtQjGPfkEe8",
                "mediaType": "Reveal"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/14ZD9_tLwgA",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 174
    },
    {
        "date": "1653006765532",
        "conference": "Bethesda",
        "day": "2",
        "image": "Mo50aybqlak",
        "title": "The Elder Scrolls Online: Elsweyr",
        "developer": {
            "devLink": "https://www.zenimaxonline.com/",
            "devName": "ZeniMax Online Studios"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "MacOS"
        ],
        "genre": "MMORPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Mo50aybqlak",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [],
        "index": 175
    },
    {
        "date": "1653006765531",
        "conference": "Bethesda",
        "day": "2",
        "image": "R2XdwS4lcZM",
        "title": "Fallout 76",
        "developer": {
            "devLink": "https://bethesdagamestudios.com/",
            "devName": "Bethesda Game Studios"
        },
        "releaseDate": "Q3 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action RPG, Online",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/R2XdwS4lcZM",
                "mediaType": "Gameplay"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/Ir7cRRiVGjw",
                "mediaType": "Battle Royale"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/yAcLy6JTCrQ",
                "mediaType": "BR Gameplay"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/a4NbPbkNUbc",
                "mediaType": "Nuclear Winter"
            }
        ],
        "moreDetails": [],
        "index": 176
    },
    {
        "date": "1653006765531",
        "conference": "Bethesda",
        "day": "2",
        "image": "9qrXLQqHkJk",
        "title": "Ghostwire Tokyo",
        "developer": {
            "devLink": "https://www.tangogameworks.com",
            "devName": "Tango Gameworks"
        },
        "releaseDate": "To Be Announced",
        "genre": "Action Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/9qrXLQqHkJk",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 177
    },
    {
        "date": "1653006765530",
        "conference": "Bethesda",
        "day": "2",
        "image": "wev_raLJ6PM",
        "title": "The Elder Scrolls: Blades",
        "developer": {
            "devLink": "https://bethesdagamestudios.com/",
            "devName": "Bethesda Game Studios"
        },
        "releaseDate": "Q3 2019",
        "platforms": [
            "Switch",
            "Mobile"
        ],
        "genre": "Action RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/wev_raLJ6PM",
                "mediaType": "Switch Reveal"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/dJ13dyUbaKU",
                "mediaType": "Updates Trailer"
            }
        ],
        "moreDetails": [],
        "index": 178
    },
    {
        "date": "1653006765529",
        "conference": "Microsoft",
        "day": "2",
        "image": "ZtgzKBrU1GY",
        "title": "Halo Infinite",
        "developer": {
            "devLink": "https://www.343industries.com",
            "devName": "343 Industries"
        },
        "releaseDate": "Q4 2020",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "FPS",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ZtgzKBrU1GY",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 179
    },
    {
        "date": "1653006765528",
        "conference": "Microsoft",
        "day": "2",
        "image": "-ktN4bycj9s",
        "title": "Project Scarlett",
        "developer": "Microsoft",
        "releaseDate": "Q4 2020",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/-ktN4bycj9s",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 180
    },
    {
        "date": "1653006765527",
        "conference": "Microsoft",
        "day": "2",
        "image": "KpO1h81rek4",
        "title": "Project xCloud",
        "developer": "Microsoft",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/KpO1h81rek4",
                "mediaType": "Presentation"
            }
        ],
        "moreDetails": [],
        "index": 181
    },
    {
        "date": "1653006765526",
        "conference": "Microsoft",
        "day": "2",
        "image": "2enbYOMtR4I",
        "title": "Elden Ring",
        "developer": {
            "devLink": "https://www.fromsoftware.jp/ww",
            "devName": "FromSoftware"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/2enbYOMtR4I",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 182
    },
    {
        "date": "1653006765525",
        "conference": "Microsoft",
        "day": "2",
        "image": "nv8D0jUJ1Gw",
        "title": "Borderlands 3",
        "developer": {
            "devLink": "https://www.gearboxsoftware.com/",
            "devName": "Gearbox Software"
        },
        "releaseDate": "September 13, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action role-playing, first-person shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/nv8D0jUJ1Gw",
                "mediaType": "Story/Gameplay"
            }
        ],
        "moreDetails": [
            "epic exclusive"
        ],
        "index": 183
    },
    {
        "date": "1653006765524",
        "conference": "Microsoft",
        "day": "2",
        "image": "ltVgvd-Me6A",
        "title": "Tales of Arise",
        "developer": {
            "devLink": "https://www.bandainamcoent.com/",
            "devName": "BANDAI NAMCO"
        },
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "JRPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ltVgvd-Me6A",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 184
    },
    {
        "date": "1653006765523",
        "conference": "Microsoft",
        "day": "2",
        "image": "lq-wlu2pwdw",
        "title": "CrossfireX",
        "developer": {
            "devLink": "https://www.smilegate.com/en/main/main.asp",
            "devName": "Smilegate Entertainment"
        },
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One"
        ],
        "genre": "FPS",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/lq-wlu2pwdw",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [
            "timed exclusive",
            "xbox game pass"
        ],
        "index": 185
    },
    {
        "date": "1653006765522",
        "conference": "Microsoft",
        "day": "2",
        "image": "BXfh_h6Ky6U",
        "title": "Phantasy Star Online 2",
        "developer": {
            "devLink": "https://www.sega.com/",
            "devName": "Sega"
        },
        "releaseDate": "May 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "MMORPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/BXfh_h6Ky6U",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 186
    },
    {
        "date": "1653006765521",
        "conference": "Microsoft",
        "day": "2",
        "image": "Z1jEkb8e-Lg",
        "title": "Gears POP!",
        "developer": {
            "devLink": "https://www.mediatonicgames.com",
            "devName": "Mediatonic"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Mobile"
        ],
        "genre": "Multiplayer",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Z1jEkb8e-Lg",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [],
        "index": 187
    },
    {
        "date": "1653006765520",
        "conference": "Microsoft",
        "day": "2",
        "image": "GhbhXNNxW7s",
        "title": "State of Decay 2 Heartland",
        "developer": {
            "devLink": "https://undeadlabs.com/",
            "devName": "Undead Labs"
        },
        "releaseDate": "June 9, 2019",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "Survival",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/GhbhXNNxW7s",
                "mediaType": "Expansion Trailer"
            }
        ],
        "moreDetails": [
            "exclusive",
            "xbox play anywhere",
            "xbox game pass"
        ],
        "index": 188
    },
    {
        "date": "1653006765519",
        "conference": "Microsoft",
        "day": "2",
        "image": "cASCytz8o9g",
        "title": "Forza Horizon 4 LEGO Speed Champions",
        "developer": {
            "devLink": "https://www.playground-games.com/",
            "devName": "Playground Games"
        },
        "releaseDate": "June 13, 2019",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "Racing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/cASCytz8o9g",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive",
            "xbox play anywhere",
            "xbox game pass"
        ],
        "index": 189
    },
    {
        "date": "1653006765518",
        "conference": "Microsoft",
        "day": "2",
        "image": "SYVw0KqQiOI",
        "title": "Xbox Elite Controller Series 2",
        "developer": {
            "devLink": "https://www.xbox.com/en-US/xbox-one/accessories/controllers/elite-wireless-controller-series-2",
            "devName": "Microsoft"
        },
        "releaseDate": "October 28, 2019",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/SYVw0KqQiOI",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 190
    },
    {
        "date": "1653006765517",
        "conference": "Microsoft",
        "day": "2",
        "image": "3GHBQjPAiKI",
        "title": "Dying Light 2",
        "developer": {
            "devLink": "https://techland.net/",
            "devName": "Techland"
        },
        "releaseDate": "Q2 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action role-playing, survival horror",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/3GHBQjPAiKI",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "index": 191
    },
    {
        "date": "1653006765516",
        "conference": "Microsoft",
        "day": "2",
        "image": "ErqsgG0HRR8",
        "title": "Gears 5",
        "developer": {
            "devLink": "https://thecoalitionstudio.com/",
            "devName": "The Coalition"
        },
        "releaseDate": "September 10, 2019",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "Third-person shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ErqsgG0HRR8",
                "mediaType": "Escape Mode"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/kSaZPvtSIBs",
                "mediaType": "DLC Character"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/4IP_EPLfvSo",
                "mediaType": "Cinematic"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/hz0PFnkNq8c",
                "mediaType": "Full Presentation"
            }
        ],
        "moreDetails": [
            "exclusive",
            "xbox game pass"
        ],
        "index": 192
    },
    {
        "date": "1653006765515",
        "conference": "Microsoft",
        "day": "2",
        "image": "QHHvML8ihTs",
        "title": "Way to the Woods",
        "developer": "Anthony",
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/QHHvML8ihTs",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "xbox game pass"
        ],
        "index": 193
    },
    {
        "date": "1653006765515",
        "conference": "Microsoft",
        "day": "2",
        "image": "1JxkLYU2zh4",
        "title": "12 Minutes",
        "developer": "Luis Antonio",
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Thriller",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/1JxkLYU2zh4",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 194
    },
    {
        "date": "1653006765514",
        "conference": "Microsoft",
        "day": "2",
        "image": "NI14_99oUQo",
        "title": "Dragon Ball Z Kakarot",
        "developer": {
            "devLink": "https://cyberconnect2.ca/",
            "devName": "CyberConnect2"
        },
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/NI14_99oUQo",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 195
    },
    {
        "date": "1653006765513",
        "conference": "Microsoft",
        "day": "2",
        "image": "GGtc5f0C3-4",
        "title": "LEGO Star Wars: The Skywalker Saga",
        "developer": "TT Games",
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Action, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/GGtc5f0C3-4",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 196
    },
    {
        "date": "1653006765512",
        "conference": "Microsoft",
        "day": "2",
        "image": "xV3LGhgDQbc",
        "title": "Psychonauts 2",
        "developer": {
            "devLink": "http://doublefine.com/",
            "devName": "Double Fine"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "MacOS",
            "Linux"
        ],
        "genre": "Platformer",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/xV3LGhgDQbc",
                "mediaType": "Gameplay"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/uR9yKz2C3dY",
                "mediaType": "Double Fine Joining Microsoft"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/G77sukhrCVM",
                "mediaType": "Gameplay 2"
            }
        ],
        "moreDetails": [
            "xbox game pass"
        ],
        "index": 197
    },
    {
        "date": "1653006765511",
        "conference": "Microsoft",
        "day": "2",
        "image": "XCXdCjpBVA8",
        "title": "Wasteland 3",
        "developer": {
            "devLink": "https://www.inxile-entertainment.com/",
            "devName": "inXile Entertainment"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "MacOS",
            "Linux"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/XCXdCjpBVA8",
                "mediaType": "Story/Gameplay"
            }
        ],
        "moreDetails": [
            "xbox game pass"
        ],
        "index": 198
    },
    {
        "date": "1653006765510",
        "conference": "Microsoft",
        "day": "2",
        "image": "ZOgBVR21pWg",
        "title": "Age of Empires II Definitive Edition",
        "developer": {
            "devLink": "https://www.microsoftstudios.com/",
            "devName": "Microsoft Studios"
        },
        "releaseDate": "Q3 2019",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "Real-time strategy",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ZOgBVR21pWg",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive",
            "xbox game pass"
        ],
        "index": 199
    },
    {
        "date": "1653006765509",
        "conference": "Microsoft",
        "day": "2",
        "image": "ReDDgFfWlS4",
        "title": "Microsoft Flight Simulator",
        "developer": "Microsoft Studios",
        "releaseDate": "2020",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "Simulator",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ReDDgFfWlS4",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive",
            "xbox game pass"
        ],
        "index": 200
    },
    {
        "date": "1653006765508",
        "conference": "Microsoft",
        "day": "2",
        "image": "52fvz84Q2-g",
        "title": "Xbox Game Pass",
        "developer": "Microsoft",
        "releaseDate": "2019",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/52fvz84Q2-g",
                "mediaType": "Trailer"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 201
    },
    {
        "date": "1653006765507",
        "conference": "Microsoft",
        "day": "2",
        "image": "vAuEmR6EZB0",
        "title": "ID @ XBOX",
        "developer": "Mutliple Indie Developers",
        "releaseDate": "2019",
        "genre": "Variety of genres",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/vAuEmR6EZB0",
                "mediaType": "Highlight Reel"
            }
        ],
        "moreDetails": [],
        "index": 202
    },
    {
        "date": "1653006765506",
        "conference": "Microsoft",
        "day": "2",
        "image": "2I9WK1-7PA8",
        "title": "The Legend of Wright",
        "developer": {
            "devLink": "https://desk.works",
            "devName": "Desk Works"
        },
        "releaseDate": "2020",
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/2I9WK1-7PA8",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 203
    },
    {
        "date": "1653006765505",
        "conference": "Microsoft",
        "day": "2",
        "image": "xyJI_uFRZSY",
        "title": "Battletoads",
        "developer": {
            "devLink": "http://rare.co.uk",
            "devName": "Rare"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "Brawler",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/xyJI_uFRZSY",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "xbox game pass"
        ],
        "index": 204
    },
    {
        "date": "1653006765504",
        "conference": "Microsoft",
        "day": "2",
        "image": "YnuEvePlxWI",
        "title": "Spiritfarer",
        "developer": {
            "devLink": "https://thunderlotusgames.com/",
            "devName": "Thunder Lotus Games"
        },
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/YnuEvePlxWI",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "xbox game pass"
        ],
        "index": 205
    },
    {
        "date": "1653006765503",
        "conference": "Microsoft",
        "day": "2",
        "image": "LembwKDo1Dk",
        "title": "Cyberpunk 2077",
        "developer": {
            "devLink": "https://www.cdprojekt.com/pl/",
            "devName": "CD Projekt Red"
        },
        "releaseDate": "April 16, 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/LembwKDo1Dk",
                "mediaType": "Cinematic"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/pwgrsjHlqas",
                "mediaType": "Keanu Reeves Presentation"
            }
        ],
        "moreDetails": [],
        "index": 206
    },
    {
        "date": "1653006765502",
        "conference": "Microsoft",
        "day": "2",
        "image": "m50j3t52TtY",
        "title": "Blair Witch",
        "developer": {
            "devLink": "https://www.blooberteam.com",
            "devName": "Bloober Team"
        },
        "releaseDate": "August 30, 2019",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "Adventure, Horror",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/m50j3t52TtY",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "xbox game pass"
        ],
        "index": 207
    },
    {
        "date": "1653006765501",
        "conference": "Microsoft",
        "day": "2",
        "image": "1wWkQXUMQYI",
        "title": "Star Wars Jedi: Fallen Order",
        "developer": {
            "devLink": "https://www.respawn.com/",
            "devName": "Respawn Entertainment"
        },
        "releaseDate": "November 15, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action-adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/1wWkQXUMQYI",
                "mediaType": "Story Trailer"
            }
        ],
        "moreDetails": [],
        "index": 208
    },
    {
        "date": "1653006765500",
        "conference": "Microsoft",
        "day": "2",
        "image": "G0yh51p9P80",
        "title": "Minecraft Dungeons",
        "developer": {
            "devLink": "https://www.xbox.com/en-US/xbox-game-studios",
            "devName": "Xbox Game Studios"
        },
        "releaseDate": "Q2 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "4 Player Dungeon Crawler",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/G0yh51p9P80",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "xbox game pass"
        ],
        "index": 209
    },
    {
        "date": "1653006765499",
        "conference": "Microsoft",
        "day": "2",
        "image": "2reK8k8nwBc",
        "title": "Ori and the Will of the Wisps",
        "developer": {
            "devLink": "https://www.orithegame.com/moon-studios/",
            "devName": "Moon Studios"
        },
        "releaseDate": "February 11, 2020",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "Platform-adventure, Metroidvania",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/2reK8k8nwBc",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [
            "exclusive",
            "xbox game pass"
        ],
        "index": 210
    },
    {
        "date": "1653006765498",
        "conference": "Microsoft",
        "day": "2",
        "image": "mpU8kyX6ae0",
        "title": "Bleeding Edge",
        "developer": {
            "devLink": "https://ninjatheory.com/",
            "devName": "Ninja Theory"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Xbox One",
            "Windows"
        ],
        "genre": "PVP",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/mpU8kyX6ae0",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive",
            "xbox game pass"
        ],
        "index": 211
    },
    {
        "date": "1653006765497",
        "conference": "Microsoft",
        "day": "2",
        "image": "2yijkEeUmx0",
        "title": "The Outer Worlds",
        "developer": {
            "devLink": "https://www.obsidian.net/",
            "devName": "Obsidian Entertainment"
        },
        "releaseDate": "October 25, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/2yijkEeUmx0",
                "mediaType": "Story/Gameplay"
            }
        ],
        "moreDetails": [
            "epic exclusive",
            "xbox game pass"
        ],
        "index": 212
    },
    {
        "date": "1653006765497",
        "conference": "Other",
        "day": "1",
        "image": "Pqug_QhooTk",
        "title": "EA Originals",
        "developer": "Jo-Mei, Hazelight, Zoink!, Glowmade",
        "releaseDate": "To Be Announced",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/Pqug_QhooTk",
                "mediaType": "Studios Overview"
            }
        ],
        "moreDetails": [],
        "index": 213
    },
    {
        "date": "1653006765496",
        "conference": "Other",
        "day": "2",
        "image": "qqD_cz85S1A",
        "title": "KINGDOM HEARTS III Re:Mind DLC",
        "developer": {
            "devLink": "http://www.square-enix.com/",
            "devName": "Square Enix Business Division 3"
        },
        "releaseDate": "Q1 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One"
        ],
        "genre": "Action RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/qqD_cz85S1A",
                "mediaType": "DLC Trailer"
            }
        ],
        "moreDetails": [],
        "index": 214
    },
    {
        "date": "1653006765495",
        "conference": "Other",
        "day": "2",
        "image": "g3r1KbzSiT8",
        "title": "Sky: Children of the Light",
        "developer": {
            "devLink": "http://thatgamecompany.com/",
            "devName": "thatgamecompany"
        },
        "releaseDate": "July 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "MacOS",
            "Mobile"
        ],
        "genre": "Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/g3r1KbzSiT8",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 215
    },
    {
        "date": "1653006765494",
        "conference": "Other",
        "day": "2",
        "image": "vFUNQsoDzsU",
        "title": "Unto The End",
        "developer": " 2 Ton Studios\t",
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Adventure, Action",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/vFUNQsoDzsU",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 216
    },
    {
        "date": "1653006765493",
        "conference": "Electronic Arts",
        "day": "1",
        "image": "ihFbmjYm7CQ",
        "title": "The Sims 4™ Island Living",
        "developer": {
            "devLink": "https://www.ea.com/studios/maxis",
            "devName": "Maxis, The Sims Studio"
        },
        "releaseDate": "June 21, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "MacOS"
        ],
        "genre": "Simulation",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/ihFbmjYm7CQ",
                "mediaType": "Expansion Trailer"
            }
        ],
        "moreDetails": [],
        "index": 217
    },
    {
        "date": "1653006765492",
        "conference": "Electronic Arts",
        "day": "1",
        "image": "0MVNCFoeD9I",
        "title": "Madden 20",
        "developer": {
            "devLink": "https://www.ea.com/careers/careers-overview/orlando",
            "devName": "EA Tiburon"
        },
        "releaseDate": "August 2, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Sports, Football",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/0MVNCFoeD9I",
                "mediaType": "Superstar Journey"
            }
        ],
        "moreDetails": [],
        "index": 218
    },
    {
        "date": "1653006765491",
        "conference": "Electronic Arts",
        "day": "1",
        "image": "9E4HMgh7ZsE",
        "title": "FIFA 20",
        "developer": {
            "devLink": "https://www.ea.com/careers/careers-overview/vancouver/",
            "devName": "EA Vancouver"
        },
        "releaseDate": "September 27, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Sports",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/9E4HMgh7ZsE",
                "mediaType": "VOLTA Football"
            }
        ],
        "moreDetails": [],
        "index": 219
    },
    {
        "date": "1653006765490",
        "conference": "Electronic Arts",
        "day": "1",
        "image": "cSEy1MVhy_c",
        "title": "Battlefield V",
        "developer": {
            "devLink": "https://www.dice.se",
            "devName": "EA DICE"
        },
        "releaseDate": "October 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "FPS, battle royale",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/cSEy1MVhy_c",
                "mediaType": "Chapter 5"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/OOANIsSX9a0",
                "mediaType": "Upcoming Map"
            }
        ],
        "moreDetails": [],
        "index": 220
    },
    {
        "date": "1653006765489",
        "conference": "Electronic Arts",
        "day": "1",
        "image": "8t4TW08Dw38",
        "title": "Battlefield V Chapter 4",
        "developer": {
            "devLink": "https://www.dice.se",
            "devName": "EA DICE"
        },
        "releaseDate": "June 27, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "FPS, battle royale",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/8t4TW08Dw38",
                "mediaType": "Map Overview"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/UTWaiO3Uv6E",
                "mediaType": "Map Overview"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/rD-qmO_wVsI",
                "mediaType": "CQC Maps"
            }
        ],
        "moreDetails": [],
        "index": 221
    },
    {
        "date": "1653006765488",
        "conference": "Electronic Arts",
        "day": "1",
        "image": "s6QggWZFsN8",
        "title": "Apex Legends",
        "developer": {
            "devLink": "https://www.respawn.com",
            "devName": "Respawn Entertainment"
        },
        "releaseDate": "July 2, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Battle Royale",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/s6QggWZFsN8",
                "mediaType": "Event Trailer"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/jCYB1BeDv1w",
                "mediaType": "Character Reveal"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/LXRpUCagRF8",
                "mediaType": "Season 2"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/m_J2s0gvY6M",
                "mediaType": "New Weapon"
            }
        ],
        "moreDetails": [],
        "index": 222
    },
    {
        "date": "1653006765487",
        "conference": "Electronic Arts",
        "day": "1",
        "image": "8939aURV9Dc",
        "title": "Star Wars Jedi: Fallen Order",
        "developer": {
            "devLink": "https://www.respawn.com/",
            "devName": "Respawn Entertainment"
        },
        "releaseDate": "November 15, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action-adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/8939aURV9Dc",
                "mediaType": "Gameplay Demo"
            }
        ],
        "moreDetails": [],
        "index": 223
    },
    {
        "date": "1653006765486",
        "conference": "Other",
        "day": "pre-e3",
        "image": "1rNYZYVR8P0",
        "title": "Destroy All Humans!",
        "developer": {
            "devLink": "https://black-forest-games.com/",
            "devName": "Black Forest Games, Pandemic Studios"
        },
        "releaseDate": "2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/1rNYZYVR8P0",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 224
    },
    {
        "date": "1653006765485",
        "conference": "Other",
        "day": "pre-e3",
        "image": "2OuHmGfihfw",
        "title": "Yooka-Laylee and the Impossible Lair",
        "developer": {
            "devLink": "https://www.playtonicgames.com",
            "devName": "Playtonic Games"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "2.5D platformer",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/2OuHmGfihfw",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 225
    },
    {
        "date": "1653006765484",
        "conference": "Other",
        "day": "pre-e3",
        "image": "QcX96Q6ZIu4",
        "title": "Lost Words: Beyond the Page",
        "developer": {
            "devLink": "http://www.sketchbook.games/",
            "devName": "Sketchbook Games, Fourth State\t"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Side-scroller, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/QcX96Q6ZIu4",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 226
    },
    {
        "date": "1653006765483",
        "conference": "Other",
        "day": "pre-e3",
        "image": "u-4yqyCvfpE",
        "title": "Control",
        "developer": {
            "devLink": "https://www.remedygames.com/",
            "devName": "Remedy Entertainment"
        },
        "releaseDate": "August 27, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Third-person shooter, action-adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/u-4yqyCvfpE",
                "mediaType": "Teaser"
            }
        ],
        "moreDetails": [
            "epic exclusive"
        ],
        "index": 227
    },
    {
        "date": "1653006765482",
        "conference": "Other",
        "day": "pre-e3",
        "image": "7lJyK95YkVQ",
        "title": "Tom Clancy's Ghost Recon: Breakpoint",
        "developer": {
            "devLink": "https://www.ubisoft.com/en-US/studio/paris.aspx",
            "devName": "Ubisoft Paris"
        },
        "releaseDate": "October 4, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Tactical shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/7lJyK95YkVQ",
                "mediaType": "Cinematic"
            }
        ],
        "moreDetails": [],
        "index": 228
    },
    {
        "date": "1653006765481",
        "conference": "Other",
        "day": "pre-e3",
        "image": "lMdsrZ1otlA",
        "title": "Genshin Impact",
        "developer": {
            "devLink": "http://www.mihayo.com/",
            "devName": "miHoYo Co., Ltd"
        },
        "releaseDate": "Q2 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows",
            "Mobile"
        ],
        "genre": "Fantasy, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/lMdsrZ1otlA",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 229
    },
    {
        "date": "1653006765480",
        "conference": "Other",
        "day": "pre-e3",
        "image": "YKdKlMHykvM",
        "title": "Stormland",
        "developer": {
            "devLink": "https://insomniac.games",
            "devName": "Insomniac Games"
        },
        "releaseDate": "2019",
        "genre": "Action, Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/YKdKlMHykvM",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "vr": "oculus",
        "index": 230
    },
    {
        "date": "1653006765479",
        "conference": "Other",
        "day": "pre-e3",
        "image": "WAcJBgnbrKY",
        "title": "GreedFall",
        "developer": {
            "devLink": "https://www.spiders-games.com/",
            "devName": "Spiders"
        },
        "releaseDate": "September 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Action, RPG",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/WAcJBgnbrKY",
                "mediaType": "Story"
            }
        ],
        "moreDetails": [],
        "index": 231
    },
    {
        "date": "1653006765478",
        "conference": "Other",
        "day": "pre-e3",
        "image": "pvGprYy0lZk",
        "title": "Sniper Ghost Warrior Contracts",
        "developer": {
            "devLink": "http://cigames.com/en/",
            "devName": "CI Games"
        },
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "FPS, Action, Sniper",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/pvGprYy0lZk",
                "mediaType": "Teaser"
            }
        ],
        "moreDetails": [],
        "index": 232
    },
    {
        "date": "1653006765477",
        "conference": "Other",
        "day": "pre-e3",
        "image": "JWJCztW5hQw",
        "title": "Citizens of Space",
        "developer": {
            "devLink": "http://edenindustries.ca/blog/",
            "devName": "Eden Industries"
        },
        "releaseDate": "June 18, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "RPG, Turn-based Combat",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/JWJCztW5hQw",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 233
    },
    {
        "date": "1653006765476",
        "conference": "Other",
        "day": "pre-e3",
        "image": "GuWQn5oMIDQ",
        "title": "They Are Billions",
        "developer": {
            "devLink": "http://www.numantiangames.com/",
            "devName": "Numantian Games"
        },
        "releaseDate": "July 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Real-time Strategy, Survival",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/GuWQn5oMIDQ",
                "mediaType": "Announce Teaser"
            }
        ],
        "moreDetails": [],
        "index": 234
    },
    {
        "date": "1653006765475",
        "conference": "Google Stadia",
        "day": "pre-e3",
        "image": "sdzu3xLtSQo",
        "title": "GYLT",
        "developer": {
            "devLink": "http://www.tequilaworks.com/",
            "devName": "Tequila Works"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Stadia"
        ],
        "genre": "Puzzle Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/sdzu3xLtSQo",
                "mediaType": "Teaser"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 235
    },
    {
        "date": "1653006765474",
        "conference": "Google Stadia",
        "day": "pre-e3",
        "image": "hUUCpdc9-6I",
        "title": "Get Packed",
        "developer": {
            "devLink": "https://coatsink.com/",
            "devName": "Coatsink"
        },
        "releaseDate": "2020",
        "platforms": [
            "Stadia"
        ],
        "genre": "Couch Co-op",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/hUUCpdc9-6I",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 236
    },
    {
        "date": "1653006765473",
        "conference": "Other",
        "day": "pre-e3",
        "image": "OcP0WdH7rTs",
        "title": "Baldur's Gate 3",
        "developer": {
            "devLink": "https://larian.com/",
            "devName": "Larian Studios"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "Windows",
            "Stadia"
        ],
        "genre": "Role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/OcP0WdH7rTs",
                "mediaType": "Announcement"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/LI4v6hC_rjM",
                "mediaType": "Community Update"
            }
        ],
        "moreDetails": [],
        "index": 237
    },
    {
        "date": "1653006765472",
        "conference": "Other",
        "day": "pre-e3",
        "image": "hNVicO5mBq0",
        "title": "Ary and The Secret of Seasons",
        "developer": {
            "devLink": "http://www.fishingcactus.com/",
            "devName": " eXiin, Fishing Cactus"
        },
        "releaseDate": "Q1 2020",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Adventure, Exploration",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/hNVicO5mBq0",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 238
    },
    {
        "date": "1653006765472",
        "conference": "Other",
        "day": "pre-e3",
        "image": "UQ5ifGqYWTI",
        "title": "Darksiders Genesis",
        "developer": {
            "devLink": "http://www.airshipsyndicate.com/",
            "devName": " Airship Syndicate"
        },
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Action, RPG, Co-op",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/UQ5ifGqYWTI",
                "mediaType": "Story Reveal"
            }
        ],
        "moreDetails": [],
        "index": 239
    },
    {
        "date": "1653006765471",
        "conference": "Other",
        "day": "pre-e3",
        "image": "swQBJj251d4",
        "title": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated",
        "developer": {
            "devLink": "https://www.purplelamp.com/",
            "devName": "Purple Lamp Studios"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "Platform, Action-Adventure",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/swQBJj251d4",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 240
    },
    {
        "date": "1653006765470",
        "conference": "The Pokémon Company",
        "day": "pre-e3",
        "image": "p_dgvgpC8Nw",
        "title": "Pokémon Sword and Pokémon Shield",
        "developer": {
            "devLink": "https://www.gamefreak.co.jp/",
            "devName": "Game Freak"
        },
        "releaseDate": "November 15, 2019",
        "platforms": [
            "Switch"
        ],
        "genre": "Role-playing",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/p_dgvgpC8Nw",
                "mediaType": "Gameplay Reveal"
            }
        ],
        "moreDetails": [
            "exclusive"
        ],
        "index": 241
    },
    {
        "date": "1653006765469",
        "conference": "Other",
        "day": "pre-e3",
        "image": "vNFY8hWggT0",
        "title": "JUMANJI: The Video Game",
        "developer": {
            "devLink": "https://www.funsolve.com",
            "devName": "Funsolve"
        },
        "releaseDate": "November 15, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows"
        ],
        "genre": "3rd Person PVE Action Shooter",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/vNFY8hWggT0",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 242
    },
    {
        "date": "1653006765468",
        "conference": "Other",
        "day": "pre-e3",
        "image": "seGW4vdfL7A",
        "title": "Blasphemous",
        "developer": {
            "devLink": "https://thegamekitchen.com/",
            "devName": "The Game Kitchen"
        },
        "releaseDate": "2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Switch",
            "Windows",
            "MacOS",
            "Linux"
        ],
        "genre": "2D Action Platformer",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/seGW4vdfL7A",
                "mediaType": "Announcement"
            },
            {
                "mediaLink": "https://www.youtube.com/embed/ql-WqRGWcSI",
                "mediaType": "Gameplay"
            }
        ],
        "moreDetails": [],
        "index": 243
    },
    {
        "date": "1653006765467",
        "conference": "Other",
        "day": "pre-e3",
        "image": "I0I4tqV7n9U",
        "title": "Raging Loop",
        "developer": {
            "devLink": "http://www.kemco-games.com/global/index.html",
            "devName": "Kemco"
        },
        "releaseDate": "To Be Announced",
        "platforms": [
            "PlayStation 4",
            "Switch"
        ],
        "genre": "Visual Novel",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/I0I4tqV7n9U",
                "mediaType": "Announcement"
            }
        ],
        "moreDetails": [],
        "index": 244
    },
    {
        "date": "1653006765466",
        "conference": "Other",
        "day": "pre-e3",
        "image": "V7MTwlUHdiA",
        "title": "Kings of Lorn: The Fall of Ebris",
        "developer": {
            "devLink": "https://www.teamkillmedia.com/",
            "devName": "TeamKill Media"
        },
        "releaseDate": "September 9, 2019",
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Windows"
        ],
        "genre": "Survival, Horror, Action",
        "media": [
            {
                "mediaLink": "https://www.youtube.com/embed/V7MTwlUHdiA",
                "mediaType": "Reveal"
            }
        ],
        "moreDetails": [],
        "index": 245
    }
]
module.exports = {
	conferences,
	conferenceMedia,
	games,
};
