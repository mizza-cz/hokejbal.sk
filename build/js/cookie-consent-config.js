window.cookieConsentSettings = {
  current_lang: "sk",

  autoclear_cookies: true, // default: false

  theme_css: "css/cookie-consent.css", // 🚨 replace with a valid path

  page_scripts: true, // default: false

  languages: {
    sk: {
      consent_modal: {
        title: "Táto webová stránka používa cookies",

        description:
          'Tieto webové stránky používajú súbory cookies na poskytovanie služieb, personalizáciu reklám a analýzu návštevnosti. Niektoré z nich sú nevyhnutné na fungovanie stránky, o niektorých však môžete rozhodnúť sami. Viac o používaní súborov cookies sa dozviete nižšie. Môžete povoliť všetky, vybrať jednotlivé alebo všetky odmietnuť. Viac informácií získate kedykoľvek na stránke Zásady používania súborov cookies. <button type="button" data-cc="c-settings" class="cc-link">Nastavenie cookies</button>',

        primary_btn: {
          text: "Prijať všetko",
          role: "accept_all", // 'accept_selected' or 'accept_all'
        },

        secondary_btn: {
          text: "Iba nevyhnutné",
          role: "accept_necessary", // 'settings' or 'accept_necessary'
        },
      },

      settings_modal: {
        title: "Nastavenie cookies",

        save_settings_btn: "Uložiť moje voľby",

        accept_all_btn: "Prijať všetko",

        reject_all_btn: "Odmietnuť všetko",

        close_btn_label: "Zavrieť",

        cookie_table_headers: [
          { col1: "Názov" },
          { col2: "Doména" },
          { col3: "Platnosť do" },
          { col4: "Popis" },
        ],

        blocks: [
          {
            title: "Používanie cookies",

            description:
              "Tieto webové stránky používajú súbory cookies na poskytovanie služieb, personalizáciu reklám a analýzu návštevnosti. Niektoré z nich sú nevyhnutné na fungovanie stránky, o niektorých však môžete rozhodnúť sami.",
          },

          {
            title: "Funkčné cookies – vždy povolené",

            description:
              "Tieto súbory cookies sú nevyhnutné pre základné funkcie stránky, a preto sú vždy povolené.",

            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },

          {
            title: "Štatistické cookies",

            description:
              "Štatistické cookies umožňujú majiteľom webových stránok sledovať návštevnosť webových stránok. Anonymne zhromažďujú a poskytujú informácie, ktoré pomáhajú zlepšovať obsah stránok.",

            toggle: {
              value: "analytics", // your cookie category
              enabled: false,
              readonly: false,
            },

            /*
            cookie_table: [
              // list of all expected cookies
              {
                col1: '^_ga', // match all cookies starting with "_ga"
                col2: 'google.com',
                col3: '2 years',
                col4: 'description ...',
                is_regex: true,
              },
              {
                col1: '_gid',
                col2: 'google.com',
                col3: '1 day',
                col4: 'description ...',
              },
            ],
            */
          },

          {
            title: "Marketingové cookies",

            description:
              "Marketingové cookies sa používajú na sledovanie návštevníkov na webových stránkach. Ich cieľom je zobrazovať reklamu, ktorá je relevantná a zaujímavá pre jednotlivého používateľa, a tým hodnotnejšia pre vydavateľov a inzerentov tretích strán.",

            toggle: {
              value: "targeting",
              enabled: false,
              readonly: false,
            },
          },

          {
            title: "Sociálne médiá",

            description:
              "So súhlasom s cookies sociálnych médií sa môžete pripojiť k svojim sociálnym sieťam a prostredníctvom nich zdieľať obsah z našej webovej stránky. Pri ich vypnutí sa nebude zobrazovať obsah zo sociálnych sietí (Facebook, Twitter, YouTube a ďalšie).",

            toggle: {
              value: "social",
              enabled: false,
              readonly: false,
            },
          },
        ],
      },
    },
  },
};

window.addEventListener(
  "message",
  function (e) {
    if (e.data === "cc-settings") {
      document.querySelector('[data-cc="c-settings"]').click();
    }
  },
  false
);

document
  .querySelectorAll(
    '[data-src][data-cookiecategory="social"][data-placeholder]'
  )
  .forEach(function (el) {
    el.src = "/inc/cookie-consent-frame.html";
  });

document.querySelectorAll("[data-cookie-placeholder]").forEach(function (el) {
  el.addEventListener("click", function () {
    if (typeof el.dataset.cookiePlaceholder !== "undefined") {
      document.querySelector('[data-cc="c-settings"]').click();
    }
  });
});