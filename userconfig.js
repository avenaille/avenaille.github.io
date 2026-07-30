// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Paris",
    scale: "C",
    // Optional OpenWeatherMap API key — get a free one at https://openweathermap.org/api
    // Leave empty to keep the placeholder and skip the network request.
    appId: "",
  },
  clock: {
    format: "h:i p",
    icon_color: palette.red,
  },
  additionalClocks: [
  ],
  search: {
    engines: {
      //p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
      b: ["https://search.brave.com/search?q=", "Brave"],
    },
    default: "b",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://github.com/avenaille/avenaille.github.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "goofy",
      background_url: "src/img/banners/water-cat-cat.gif",
      categories: [
        {
          name: "music",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com/",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
            {
              name: "apple",
              url: "https://music.apple.com/fr",
              icon: "brand-apple",
              icon_color: palette.peach,
            },
            {
              name: "c'est top",
              url: "https://music.youtube.com/playlist?list=PLDp17kXsNkB4&si=WV7yUfTQ-dOTp2Qn",
              icon: "player-skip-back",
              icon_color: palette.red,
            },
            {
              name: "hihi",
              url: "https://music.youtube.com/playlist?list=PLHPO3DMDYxTM&si=fdFLb1pQdeQt85K1",
              icon: "player-pause",
              icon_color: palette.red,
            },
            {
              name: "oubliez les paroles",
              url: "https://music.youtube.com/playlist?list=PLHPO3DMDYxTM&si=fdFLb1pQdeQt85K1",
              icon: "player-skip-forward",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.peach,
            },
            {
              name: "docs",
              url: "https://docs.google.com",
              icon: "file-description",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "уп",
              url: "https://www.pravda.com.ua",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "mil.in.ua",
              url: "https://mil.in.ua",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "ґрунт",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
            {
              name: "village",
              url: "https://www.village.com.ua",
              icon: "home-2",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "hihi",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "gitlab",
              url: "https://gitlab.com",
              icon: "brand-gitlab",
              icon_color: palette.peach,
            },
            {
              name: "chatGPT",
              url: "https://https://chatgpt.com",
              icon: "sparkles-2",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "damn",
          links: [
            {
              name: "trackbear",
              url: "https://trackbear.app/",
              icon: "paw",
              icon_color: palette.green,
            },
            {
              name: "ellipsus",
              url: "https://ellipsus.com/",
              icon: "typography",
              icon_color: palette.peach,
            },
            {
              name: "ao3",
              url: "https://archiveofourown.org/",
              icon: "brand-ao3",
              icon_color: palette.red,
            },
            {
              name: "wordreference",
              url: "https://www.wordreference.com/",
              icon: "book-2",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "oups",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_18.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "tumblr",
              url: "https://tumblr.com",
              icon: "brand-tumblr",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.blue,
            },
            {
              name: "messenger",
              url: "https://www.messenger.com/",
              icon: "brand-messenger",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "infiniteBacklog",
              url: "https://infinitebacklog.net",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "disney+",
              url: "https://disneyplus.com",
              icon: "brand-disney",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "netflix",
              url: "https://netflix.com",
              icon: "brand-netflix",
              icon_color: palette.red,
            },
            {
              name: "movies",
              url: "https://flixmomo.app",
              icon: "movie",
              icon_color: palette.blue,
            },
            {
              name: "Twitch",
              url: "https://twitch.com",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
