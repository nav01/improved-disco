var conferences = [
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

var games = [
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ul7BQeFbsp4.jpg",
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
    "date": "\"2019-08-07T02:01:18.408Z\""
  },
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/jf1WY1RPhJg.jpg",
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
    "date": "\"2019-08-07T02:01:17.408Z\""
  },
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/iLyH4DgTYyM.jpg",
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
    "date": "\"2019-08-07T02:01:16.408Z\""
  },
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/qgNlsBXpJZA.jpg",
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
    "date": "\"2019-08-07T02:01:15.408Z\""
  },
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/0HA7zQ1eXAI.jpg",
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
    "date": "\"2019-08-07T02:01:14.408Z\""
  },
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/PwI0mzf2flY.jpg",
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
    "date": "\"2019-08-07T02:01:13.408Z\""
  },
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/GnakK1Bit7E.jpg",
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
    "date": "\"2019-08-07T02:01:12.408Z\""
  },
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/1yC6xIReMQs.jpg",
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
    "date": "\"2019-08-07T02:01:11.408Z\""
  },
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/WAeoEIeLg_A.jpg",
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
    "date": "\"2019-08-07T02:01:10.408Z\""
  },
  {
    "conference": "Other",
    "day": "5",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/eWb2VbP6Ivc.jpg",
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
    "date": "\"2019-08-07T02:01:09.408Z\""
  },
  {
    "conference": "Other",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/fc5nURXyvyk.jpg",
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
    "date": "\"2019-08-07T02:01:08.408Z\""
  },
  {
    "conference": "Other",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/btget8Gphdw.jpg",
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
    "date": "\"2019-08-07T02:01:07.408Z\""
  },
  {
    "conference": "Other",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/3CIBTp7vGSw.jpg",
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
    "date": "\"2019-08-07T02:01:06.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/kMxmq3bhSuw.jpg",
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
    "date": "\"2019-08-07T02:01:05.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/VeqM_oHv6Mw.jpg",
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
    "date": "\"2019-08-07T02:01:04.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/3fr1Z07AV00.jpg",
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
    "date": "\"2019-08-07T02:01:03.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/HGmDTu8NPrw.jpg",
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
    "date": "\"2019-08-07T02:01:02.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/waCr8pjROBc.jpg",
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
    "date": "\"2019-08-07T02:01:01.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/_3YNL0OWio0.jpg",
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
    "date": "\"2019-08-07T02:01:00.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/TsiuwvMdXdY.jpg",
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
    "date": "\"2019-08-07T02:00:59.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ATtLpjXTc7I.jpg",
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
    "date": "\"2019-08-07T02:00:58.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/pE_qNk3ALok.jpg",
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
    "date": "\"2019-08-07T02:00:57.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/YqC0Pp6V6oc.jpg",
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
    "date": "\"2019-08-07T02:00:56.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ckAZepoche4.jpg",
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
    "date": "\"2019-08-07T02:00:55.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/QiqnBXlOOhs.jpg",
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
    "date": "\"2019-08-07T02:00:54.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/cld3XlI7Ueo.jpg",
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
    "date": "\"2019-08-07T02:00:53.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/VUBKs18ZrEM.jpg",
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
    "date": "\"2019-08-07T02:00:52.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ShFv4iWTssk.jpg",
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
    "date": "\"2019-08-07T02:00:51.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/91HU_mc9cts.jpg",
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
    "date": "\"2019-08-07T02:00:50.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/M7PwGZ5HqTo.jpg",
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
    "date": "\"2019-08-07T02:00:49.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ADaRsEhTB70.jpg",
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
    "date": "\"2019-08-07T02:00:48.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/TCcPL3ok1P4.jpg",
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
    "date": "\"2019-08-07T02:00:47.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ZntXoob5VnI.jpg",
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
    "date": "\"2019-08-07T02:00:46.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/T5XV3P2wjL0.jpg",
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
    "date": "\"2019-08-07T02:00:45.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/SEIKkjZgMaw.jpg",
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
    "date": "\"2019-08-07T02:00:44.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/LhPhF_4g6Hw.jpg",
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
    "date": "\"2019-08-07T02:00:43.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/PT9WrJxkApk.jpg",
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
    "date": "\"2019-08-07T02:00:42.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Yx3eK-aZJhs.jpg",
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
    "date": "\"2019-08-07T02:00:41.408Z\""
  },
  {
    "conference": "Nintendo",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/WNrrwutMzxg.jpg",
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
    "date": "\"2019-08-07T02:00:40.408Z\""
  },
  {
    "conference": "Other",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/DPrmpGT_u4A.jpg",
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
    "date": "\"2019-08-07T02:00:39.408Z\""
  },
  {
    "conference": "Other",
    "day": "4",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/b-RbmhyisO4.jpg",
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
    "date": "\"2019-08-07T02:00:38.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/WshQo48iu2E.jpg",
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
    "date": "\"2019-08-07T02:00:37.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Hgt9G7x8XcU.jpg",
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
    "date": "\"2019-08-07T02:00:36.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/OmkmX7hscSk.jpg",
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
    "date": "\"2019-08-07T02:00:35.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Xo-ou20977s.jpg",
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
    "date": "\"2019-08-07T02:00:34.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/oxsdL2Vc9cI.jpg",
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
    "date": "\"2019-08-07T02:00:33.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/xJh-m1qWcm0.jpg",
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
    "date": "\"2019-08-07T02:00:32.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/2h8oNypUn70.jpg",
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
    "date": "\"2019-08-07T02:00:31.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/BUHb5Q1Z3Kc.jpg",
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
    "date": "\"2019-08-07T02:00:30.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/LDBojdBAjXU.jpg",
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
    "date": "\"2019-08-07T02:00:29.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/liHKeemjdbI.jpg",
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
    "date": "\"2019-08-07T02:00:28.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/HvtPKoKYM1w.jpg",
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
    "date": "\"2019-08-07T02:00:27.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/J0dyNDP5Vfo.jpg",
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
    "date": "\"2019-08-07T02:00:26.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/M0LCdIi51Gs.jpg",
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
    "date": "\"2019-08-07T02:00:25.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/NJ6J3qvV0cE.jpg",
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
    "date": "\"2019-08-07T02:00:24.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/NJ6J3qvV0cE.jpg",
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
    "date": "\"2019-08-07T02:00:23.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/6tPU813CMtI.jpg",
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
    "date": "\"2019-08-07T02:00:22.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Sc93RAjVRw4.jpg",
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
    "date": "\"2019-08-07T02:00:21.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/kkqOJ6XaqbA.jpg",
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
    "date": "\"2019-08-07T02:00:20.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/VOWyVXPELyc.jpg",
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
    "date": "\"2019-08-07T02:00:19.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/TIADxTxBWDc.jpg",
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
    "date": "\"2019-08-07T02:00:18.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/i1aOW2wD7kE.jpg",
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
    "date": "\"2019-08-07T02:00:17.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Wcu6dJFiP0A.jpg",
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
    "date": "\"2019-08-07T02:00:16.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/5aYnvksA6xg.jpg",
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
    "date": "\"2019-08-07T02:00:15.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/V4hjJQCBIp4.jpg",
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
    "date": "\"2019-08-07T02:00:14.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/cmBKGQrUFaM.jpg",
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
    "date": "\"2019-08-07T02:00:13.408Z\""
  },
  {
    "conference": "Square Enix",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/yqrQ44bQdaY.jpg",
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
    "date": "\"2019-08-07T02:00:12.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/9Zz6YilnA5k.jpg",
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
    "date": "\"2019-08-07T02:00:11.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/RC77slDR0vk.jpg",
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
    "date": "\"2019-08-07T02:00:10.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/CEJqyd-5VCI.jpg",
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
    "date": "\"2019-08-07T02:00:09.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Ain-8qyALU4.jpg",
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
    "date": "\"2019-08-07T02:00:08.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/xUTNlGcFzHA.jpg",
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
    "date": "\"2019-08-07T02:00:07.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/zOGwVsSFsbk.jpg",
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
    "date": "\"2019-08-07T02:00:06.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "2018",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ameLj9blFcw.jpg",
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
    "date": "\"2019-08-07T02:00:05.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/c4Z-0hl5yTY.jpg",
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
    "date": "\"2019-08-07T02:00:04.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/XxBlJ-css10.jpg",
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
    "date": "\"2019-08-07T02:00:03.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/dxm1DkRGrBg.jpg",
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
    "date": "\"2019-08-07T02:00:02.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/A-j9490u0TA.jpg",
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
    "date": "\"2019-08-07T02:00:01.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/xa7I99iws9I.jpg",
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
    "date": "\"2019-08-07T02:00:00.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/uMPJC9Ddbdg.jpg",
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
    "date": "\"2019-08-07T01:59:59.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "2019",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/o4AcYJEtHZA.jpg",
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
    "date": "\"2019-08-07T01:59:58.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/vACqdaSnvp0.jpg",
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
    "date": "\"2019-08-07T01:59:57.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ocU7-o6gsWQ.jpg",
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
    "date": "\"2019-08-07T01:59:56.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/uUVIepHmMJw.jpg",
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
    "date": "\"2019-08-07T01:59:55.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/30iHXafyXlw.jpg",
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
    "date": "\"2019-08-07T01:59:54.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/OLOjq-djqc8.jpg",
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
    "date": "\"2019-08-07T01:59:53.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/S4kJ5KaoF2Q.jpg",
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
    "date": "\"2019-08-07T01:59:52.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/qDcjuvWQH70.jpg",
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
    "date": "\"2019-08-07T01:59:51.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/LyIOwR6pmIU.jpg",
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
    "date": "\"2019-08-07T01:59:50.408Z\""
  },
  {
    "conference": "Kinda Funny Games",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/sCnaLFCzryU.jpg",
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
    "date": "\"2019-08-07T01:59:49.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/-ZUx1sXB12c.jpg",
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
    "date": "\"2019-08-07T01:59:48.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/WNctWD8DnvQ.jpg",
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
    "date": "\"2019-08-07T01:59:47.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/0FMdd1e06dQ.jpg",
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
    "date": "\"2019-08-07T01:59:46.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/th-qvZwoc4w.jpg",
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
    "date": "\"2019-08-07T01:59:45.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/wZFdBeSNzxw.jpg",
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
    "date": "\"2019-08-07T01:59:44.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/jI9EpQWRrdQ.jpg",
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
    "date": "\"2019-08-07T01:59:43.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/hRwU7HEHR9g.jpg",
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
    "date": "\"2019-08-07T01:59:42.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Gi31RjPCeHg.jpg",
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
    "date": "\"2019-08-07T01:59:41.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ASfUcaVTOpI.jpg",
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
    "date": "\"2019-08-07T01:59:40.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ZWT0YH1WFNk.jpg",
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
    "date": "\"2019-08-07T01:59:39.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/y66TJIUkWBc.jpg",
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
    "date": "\"2019-08-07T01:59:38.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/KpnzF5hAv6M.jpg",
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
    "date": "\"2019-08-07T01:59:37.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/3orYqGDSDUk.jpg",
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
    "date": "\"2019-08-07T01:59:36.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/a5Zsb6eYfbw.jpg",
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
    "date": "\"2019-08-07T01:59:35.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/HEqjlsy1QI4.jpg",
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
    "date": "\"2019-08-07T01:59:34.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/a3rJvDHw5Hw.jpg",
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
    "date": "\"2019-08-07T01:59:33.408Z\""
  },
  {
    "conference": "Ubisoft",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/vtx_mjjN9Hw.jpg",
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
    "date": "\"2019-08-07T01:59:32.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Smde5D2JNnc.jpg",
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
    "date": "\"2019-08-07T01:59:31.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/9d_zN8-puEU.jpg",
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
    "date": "\"2019-08-07T01:59:30.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/LxFZiuKC_38.jpg",
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
    "date": "\"2019-08-07T01:59:29.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/C6fG5h32amU.jpg",
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
    "date": "\"2019-08-07T01:59:28.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/cV3Cfed4RBU.jpg",
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
    "date": "\"2019-08-07T01:59:27.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/a1ixsDRnT_Q.jpg",
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
    "date": "\"2019-08-07T01:59:26.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/HOna9z_thIg.jpg",
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
    "date": "\"2019-08-07T01:59:25.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/RW9s86k2Y2o.jpg",
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
    "date": "\"2019-08-07T01:59:24.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/TNDPU28X3Zc.jpg",
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
    "date": "\"2019-08-07T01:59:23.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/TH7rl3oZUZs.jpg",
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
    "date": "\"2019-08-07T01:59:22.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/8ZK2Tz94n-Q.jpg",
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
    "date": "\"2019-08-07T01:59:21.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/DdFv6ZnvLUo.jpg",
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
    "date": "\"2019-08-07T01:59:20.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/aSAqTmwY2eY.jpg",
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
    "date": "\"2019-08-07T01:59:19.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/wyMAUjcRvr8.jpg",
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
    "date": "\"2019-08-07T01:59:18.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/rOy-0Folet4.jpg",
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
    "date": "\"2019-08-07T01:59:17.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/pcBei3JUz5s.jpg",
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
    "date": "\"2019-08-07T01:59:16.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/7n6qbv1lsiQ.jpg",
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
    "date": "\"2019-08-07T01:59:15.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/PeDoHNZthX4.jpg",
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
    "date": "\"2019-08-07T01:59:14.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/VmDbh9J2X6g.jpg",
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
    "date": "\"2019-08-07T01:59:13.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/RUecb1ABpeM.jpg",
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
    "date": "\"2019-08-07T01:59:12.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Hw4s0XnzaDw.jpg",
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
    "date": "\"2019-08-07T01:59:11.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/aEfm_lt4cos.jpg",
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
    "date": "\"2019-08-07T01:59:10.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/T8C1Jj9f8OQ.jpg",
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
    "date": "\"2019-08-07T01:59:09.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/BSYPEljXohk.jpg",
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
    "date": "\"2019-08-07T01:59:08.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "2019",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/pytazpmR6eE.jpg",
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
    "date": "\"2019-08-07T01:59:07.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/MPHYviL8lcA.jpg",
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
    "date": "\"2019-08-07T01:59:06.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/cFLXoGzXxJc.jpg",
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
    "date": "\"2019-08-07T01:59:05.408Z\""
  },
  {
    "conference": "The Pc Gaming Show",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/6KTvZtCOEEI.jpg",
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
    "date": "\"2019-08-07T01:59:04.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/RqA_t1l4ORQ.jpg",
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
    "date": "\"2019-08-07T01:59:03.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/w_iBM1o12IM.jpg",
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
    "date": "\"2019-08-07T01:59:02.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/nZyhVJYKWiU.jpg",
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
    "date": "\"2019-08-07T01:59:01.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/o0dXGp5Db04.jpg",
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
    "date": "\"2019-08-07T01:59:00.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/sE5j5ow6k14.jpg",
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
    "date": "\"2019-08-07T01:58:59.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/vTsuXZOsDxc.jpg",
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
    "date": "\"2019-08-07T01:58:58.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/2FoxozWfMtk.jpg",
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
    "date": "\"2019-08-07T01:58:57.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/nTxp-BfcOYA.jpg",
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
    "date": "\"2019-08-07T01:58:56.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/WYnmkeyAF8U.jpg",
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
    "date": "\"2019-08-07T01:58:55.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ZURWyejTovg.jpg",
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
    "date": "\"2019-08-07T01:58:54.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "2019",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/QRv7nSE620o.jpg",
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
    "date": "\"2019-08-07T01:58:53.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/FilA-i4-quk.jpg",
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
    "date": "\"2019-08-07T01:58:52.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/yKOXNJuM2mk.jpg",
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
    "date": "\"2019-08-07T01:58:51.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/PSNFZ0-QPSY.jpg",
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
    "date": "\"2019-08-07T01:58:50.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/-_jYJaIgYvw.jpg",
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
    "date": "\"2019-08-07T01:58:49.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/rXH9vUNktmM.jpg",
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
    "date": "\"2019-08-07T01:58:48.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/vgohRmx-YcI.jpg",
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
    "date": "\"2019-08-07T01:58:47.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/hwvl-z1xAlE.jpg",
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
    "date": "\"2019-08-07T01:58:46.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/_GyqOC8SXjA.jpg",
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
    "date": "\"2019-08-07T01:58:45.408Z\""
  },
  {
    "conference": "Uploadvr",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Y8y-aB3atPM.jpg",
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
    "date": "\"2019-08-07T01:58:44.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/5tpc6EYVF_o.jpg",
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
    "date": "\"2019-08-07T01:58:43.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/rzGoNlmLxDE.jpg",
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
    "date": "\"2019-08-07T01:58:42.408Z\""
  },
  {
    "conference": "Other",
    "day": "3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/F9GL-UcQl2E.jpg",
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
    "date": "\"2019-08-07T01:58:41.408Z\""
  },
  {
    "conference": "Other",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/VA2SB02TJGU.jpg",
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
    "date": "\"2019-08-07T01:58:40.408Z\""
  },
  {
    "conference": "Other",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/aTCmN8TtkgQ.jpg",
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
    "date": "\"2019-08-07T01:58:39.408Z\""
  },
  {
    "conference": "Other",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/-g4I7NOz2dA.jpg",
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
    "date": "\"2019-08-07T01:58:38.408Z\""
  },
  {
    "conference": "Other",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/QN6E6r0reNw.jpg",
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
    "date": "\"2019-08-07T01:58:37.408Z\""
  },
  {
    "conference": "Devolver Digital",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/q-AsYZCdpts.jpg",
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
    "date": "\"2019-08-07T01:58:36.408Z\""
  },
  {
    "conference": "Devolver Digital",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/GjmIWMataSI.jpg",
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
    "date": "\"2019-08-07T01:58:35.408Z\""
  },
  {
    "conference": "Devolver Digital",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/o-L0_TJ4i-o.jpg",
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
    "date": "\"2019-08-07T01:58:34.408Z\""
  },
  {
    "conference": "Devolver Digital",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/YusO47cGJdI.jpg",
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
    "date": "\"2019-08-07T01:58:33.408Z\""
  },
  {
    "conference": "Devolver Digital",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/A6cAS2hFvp0.jpg",
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
    "date": "\"2019-08-07T01:58:32.408Z\""
  },
  {
    "conference": "Devolver Digital",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/2OAVHWmeV0c.jpg",
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
    "date": "\"2019-08-07T01:58:31.408Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/2HOClc6Svg4.jpg",
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
    "date": "\"2019-08-07T01:58:30.408Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/SSWZQC0BVvU.jpg",
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
    "date": "\"2019-08-07T01:58:29.408Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/MXv5IDp8y74.jpg",
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
    "date": "\"2019-08-07T01:58:28.408Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/O6K_ZzMWTTo.jpg",
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
    "date": "\"2019-08-07T01:58:27.408Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/IzEFv4CyXQA.jpg",
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
    "date": "\"2019-08-07T01:58:26.408Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/RlKDNzwYoSE.jpg",
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
    "date": "\"2019-08-07T01:58:25.408Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/FtQjGPfkEe8.jpg",
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
    "date": "\"2019-08-07T01:58:24.407Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Mo50aybqlak.jpg",
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
    "date": "\"2019-08-07T01:58:23.407Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/9qrXLQqHkJk.jpg",
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
    "date": "\"2019-08-07T01:58:22.407Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/R2XdwS4lcZM.jpg",
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
    "date": "\"2019-08-07T01:58:21.407Z\""
  },
  {
    "conference": "Bethesda",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/wev_raLJ6PM.jpg",
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
    "date": "\"2019-08-07T01:58:20.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ZtgzKBrU1GY.jpg",
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
    "date": "\"2019-08-07T01:58:19.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/-ktN4bycj9s.jpg",
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
    "date": "\"2019-08-07T01:58:18.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/KpO1h81rek4.jpg",
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
    "date": "\"2019-08-07T01:58:17.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/2enbYOMtR4I.jpg",
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
    "date": "\"2019-08-07T01:58:16.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/nv8D0jUJ1Gw.jpg",
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
    "date": "\"2019-08-07T01:58:15.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ltVgvd-Me6A.jpg",
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
    "date": "\"2019-08-07T01:58:14.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/lq-wlu2pwdw.jpg",
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
    "date": "\"2019-08-07T01:58:13.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/BXfh_h6Ky6U.jpg",
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
    "date": "\"2019-08-07T01:58:12.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Z1jEkb8e-Lg.jpg",
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
    "date": "\"2019-08-07T01:58:11.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/GhbhXNNxW7s.jpg",
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
    "date": "\"2019-08-07T01:58:10.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/cASCytz8o9g.jpg",
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
    "date": "\"2019-08-07T01:58:09.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/3GHBQjPAiKI.jpg",
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
    "date": "\"2019-08-07T01:58:08.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/SYVw0KqQiOI.jpg",
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
    "date": "\"2019-08-07T01:58:07.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ErqsgG0HRR8.jpg",
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
    "date": "\"2019-08-07T01:58:06.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/QHHvML8ihTs.jpg",
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
    "date": "\"2019-08-07T01:58:05.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/1JxkLYU2zh4.jpg",
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
    "date": "\"2019-08-07T01:58:04.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/NI14_99oUQo.jpg",
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
    "date": "\"2019-08-07T01:58:03.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/GGtc5f0C3-4.jpg",
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
    "date": "\"2019-08-07T01:58:02.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/xV3LGhgDQbc.jpg",
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
    "date": "\"2019-08-07T01:58:01.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/XCXdCjpBVA8.jpg",
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
    "date": "\"2019-08-07T01:58:00.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ZOgBVR21pWg.jpg",
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
    "date": "\"2019-08-07T01:57:59.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ReDDgFfWlS4.jpg",
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
    "date": "\"2019-08-07T01:57:58.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/52fvz84Q2-g.jpg",
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
    "date": "\"2019-08-07T01:57:57.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/vAuEmR6EZB0.jpg",
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
    "date": "\"2019-08-07T01:57:56.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/2I9WK1-7PA8.jpg",
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
    "date": "\"2019-08-07T01:57:55.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/xyJI_uFRZSY.jpg",
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
    "date": "\"2019-08-07T01:57:54.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/YnuEvePlxWI.jpg",
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
    "date": "\"2019-08-07T01:57:53.407Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/LembwKDo1Dk.jpg",
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
    "date": "\"2019-08-07T01:57:52.404Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/m50j3t52TtY.jpg",
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
    "date": "\"2019-08-07T01:57:51.404Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/1wWkQXUMQYI.jpg",
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
    "date": "\"2019-08-07T01:57:50.404Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/G0yh51p9P80.jpg",
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
    "date": "\"2019-08-07T01:57:49.404Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/2reK8k8nwBc.jpg",
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
    "date": "\"2019-08-07T01:57:48.404Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/mpU8kyX6ae0.jpg",
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
    "date": "\"2019-08-07T01:57:47.404Z\""
  },
  {
    "conference": "Microsoft",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/2yijkEeUmx0.jpg",
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
    "date": "\"2019-08-07T01:57:46.404Z\""
  },
  {
    "conference": "Other",
    "day": "1",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/Pqug_QhooTk.jpg",
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
    "date": "\"2019-08-07T01:57:45.404Z\""
  },
  {
    "conference": "Other",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/qqD_cz85S1A.jpg",
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
    "date": "\"2019-08-07T01:57:44.404Z\""
  },
  {
    "conference": "Other",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/g3r1KbzSiT8.jpg",
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
    "date": "\"2019-08-07T01:57:43.404Z\""
  },
  {
    "conference": "Other",
    "day": "2",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/vFUNQsoDzsU.jpg",
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
    "date": "\"2019-08-07T01:57:42.404Z\""
  },
  {
    "conference": "Electronic Arts",
    "day": "1",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/ihFbmjYm7CQ.jpg",
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
    "date": "\"2019-08-07T01:57:41.404Z\""
  },
  {
    "conference": "Electronic Arts",
    "day": "1",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/0MVNCFoeD9I.jpg",
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
    "date": "\"2019-08-07T01:57:40.404Z\""
  },
  {
    "conference": "Electronic Arts",
    "day": "1",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/9E4HMgh7ZsE.jpg",
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
    "date": "\"2019-08-07T01:57:39.404Z\""
  },
  {
    "conference": "Electronic Arts",
    "day": "1",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/cSEy1MVhy_c.jpg",
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
    "date": "\"2019-08-07T01:57:38.404Z\""
  },
  {
    "conference": "Electronic Arts",
    "day": "1",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/8t4TW08Dw38.jpg",
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
    "date": "\"2019-08-07T01:57:37.404Z\""
  },
  {
    "conference": "Electronic Arts",
    "day": "1",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/s6QggWZFsN8.jpg",
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
    "date": "\"2019-08-07T01:57:36.404Z\""
  },
  {
    "conference": "Electronic Arts",
    "day": "1",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/8939aURV9Dc.jpg",
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
    "date": "\"2019-08-07T01:57:35.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/1rNYZYVR8P0.jpg",
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
    "date": "\"2019-08-07T01:57:34.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/2OuHmGfihfw.jpg",
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
    "date": "\"2019-08-07T01:57:33.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/QcX96Q6ZIu4.jpg",
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
    "date": "\"2019-08-07T01:57:32.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/u-4yqyCvfpE.jpg",
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
    "date": "\"2019-08-07T01:57:31.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/7lJyK95YkVQ.jpg",
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
    "date": "\"2019-08-07T01:57:30.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/lMdsrZ1otlA.jpg",
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
    "date": "\"2019-08-07T01:57:29.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/YKdKlMHykvM.jpg",
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
    "date": "\"2019-08-07T01:57:28.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/WAcJBgnbrKY.jpg",
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
    "date": "\"2019-08-07T01:57:27.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/pvGprYy0lZk.jpg",
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
    "date": "\"2019-08-07T01:57:26.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/JWJCztW5hQw.jpg",
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
    "date": "\"2019-08-07T01:57:25.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/GuWQn5oMIDQ.jpg",
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
    "date": "\"2019-08-07T01:57:24.404Z\""
  },
  {
    "conference": "Google Stadia",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/sdzu3xLtSQo.jpg",
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
    "date": "\"2019-08-07T01:57:23.404Z\""
  },
  {
    "conference": "Google Stadia",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/hUUCpdc9-6I.jpg",
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
    "date": "\"2019-08-07T01:57:22.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/OcP0WdH7rTs.jpg",
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
    "date": "\"2019-08-07T01:57:21.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/hNVicO5mBq0.jpg",
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
    "date": "\"2019-08-07T01:57:20.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/UQ5ifGqYWTI.jpg",
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
    "date": "\"2019-08-07T01:57:19.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/swQBJj251d4.jpg",
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
    "date": "\"2019-08-07T01:57:18.404Z\""
  },
  {
    "conference": "The Pokémon Company",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/p_dgvgpC8Nw.jpg",
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
    "date": "\"2019-08-07T01:57:17.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/vNFY8hWggT0.jpg",
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
    "date": "\"2019-08-07T01:57:16.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/seGW4vdfL7A.jpg",
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
    "date": "\"2019-08-07T01:57:15.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/I0I4tqV7n9U.jpg",
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
    "date": "\"2019-08-07T01:57:14.404Z\""
  },
  {
    "conference": "Other",
    "day": "pre-e3",
    "image": "https://e3recap2019.b-cdn.net/images/game-cards/V7MTwlUHdiA.jpg",
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
    "date": "\"2019-08-07T01:57:13.404Z\""
  }
];

module.exports = {
	conferences,
	games,
};
