import type { CompanyInfo, EstateInfo, NavItem } from '../types';

export const COMPANY: CompanyInfo = {
  name: "FALCO INVESTMENTS",
  legalName: "FALCO INVESTMENTS SP.ZO.O.",
  address: "UL. KOZIELSKA 38",
  city: "KRAPKOWICE",
  zipCode: "47-300",
  phone: "668374950",
  phoneFormatted: "668 374 950",
  email: "kontakt@przyjaznedomy.com",
  whatsapp: "48668374950",
  contactPerson: "Roland Garus",
  nip: "", // To be provided
  krs: "", // To be provided
  regon: "", // To be provided
};

export const ESTATE: EstateInfo = {
  name: {
    pl: "Osiedle Brzozowe Wzgórze",
    en: "Brzozowe Wzgórze Estate",
    de: "Wohnsiedlung Brzozowe Wzgórze"
  },
  location: "Brzeziny",
  description: {
    pl: "Osiedle Brzozowe Wzgórze zlokalizowane w Brzezinach to idealne miejsce dla tych, którzy szukają spokoju, a jednocześnie pragną cieszyć się bliskością większego miasta. Nasze nowe osiedle domków jednorodzinnych łączy nowoczesną architekturę z naturalnym otoczeniem, z ekologicznie zrównoważonymi rozwiązaniami, które zmniejszają koszty eksploatacji.",
    en: "Brzozowe Wzgórze Estate located in Brzeziny is the perfect place for those seeking tranquility while enjoying proximity to a larger city. Our new single-family home estate combines modern architecture with natural surroundings, featuring environmentally sustainable solutions that reduce operating costs.",
    de: "Die Wohnsiedlung Brzozowe Wzgórze in Brzeziny ist der ideale Ort für diejenigen, die Ruhe suchen und gleichzeitig die Nähe zu einer größeren Stadt genießen möchten. Unsere neue Einfamilienhaussiedlung verbindet moderne Architektur mit natürlicher Umgebung und bietet ökologisch nachhaltige Lösungen, die die Betriebskosten senken."
  },
  features: {
    pl: [
      "Spokojna okolica z dala od miejskiego zgiełku",
      "Bliskość natury - brzozowe lasy i tereny zielone",
      "Doskonała komunikacja z centrum miasta",
      "Pełna infrastruktura - sklepy, szkoły, przedszkola w pobliżu",
      "Nowoczesna architektura z funkcjonalnymi rozwiązaniami",
      "Energooszczędne rozwiązania",
      "Przestronne działki z możliwością aranżacji ogrodu",
      "Bezpieczne osiedle z monitoringiem"
    ],
    en: [
      "Quiet area away from city noise",
      "Close to nature - birch forests and green areas",
      "Excellent communication with the city center",
      "Full infrastructure - shops, schools, kindergartens nearby",
      "Modern architecture with functional solutions",
      "Energy-efficient solutions",
      "Spacious plots with garden arrangement possibilities",
      "Safe estate with monitoring"
    ],
    de: [
      "Ruhige Gegend abseits vom Stadtlärm",
      "Nähe zur Natur - Birkenwälder und Grünflächen",
      "Ausgezeichnete Verbindung zum Stadtzentrum",
      "Vollständige Infrastruktur - Geschäfte, Schulen, Kindergärten in der Nähe",
      "Moderne Architektur mit funktionalen Lösungen",
      "Energieeffiziente Lösungen",
      "Geräumige Grundstücke mit Gartenmöglichkeiten",
      "Sicheres Anwesen mit Überwachung"
    ]
  },
  coordinates: {
    lat: 50.6365,
    lng: 18.0144
  },
  totalHouses: 12,
  completionYear: 2024
};

export const NAVIGATION: NavItem[] = [
  {
    label: {
      pl: "Strona główna",
      en: "Home",
      de: "Startseite"
    },
    href: "/"
  },
  {
    label: {
      pl: "Inwestycja",
      en: "Investment",
      de: "Investition"
    },
    href: "/inwestycja"
  },
  {
    label: {
      pl: "Dostępne domy",
      en: "Available houses",
      de: "Verfügbare Häuser"
    },
    href: "/domy"
  },
  {
    label: {
      pl: "O nas",
      en: "About us",
      de: "Über uns"
    },
    href: "/o-nas"
  },
  {
    label: {
      pl: "Kontakt",
      en: "Contact",
      de: "Kontakt"
    },
    href: "/kontakt"
  }
];

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/falcoinvestments",
  instagram: "https://instagram.com/falcoinvestments",
  linkedin: "https://linkedin.com/company/falco-investments"
};

// Property features that can be filtered
export const PROPERTY_FEATURES = {
  pl: {
    garage: "Garaż",
    garden: "Ogród",
    terrace: "Taras",
    balcony: "Balkon",
    basement: "Piwnica",
    attic: "Strych",
    airConditioning: "Klimatyzacja",
    fireplace: "Kominek",
    alarm: "System alarmowy",
    fenceGate: "Ogrodzenie"
  },
  en: {
    garage: "Garage",
    garden: "Garden",
    terrace: "Terrace",
    balcony: "Balcony",
    basement: "Basement",
    attic: "Attic",
    airConditioning: "Air conditioning",
    fireplace: "Fireplace",
    alarm: "Alarm system",
    fence: "Fence"
  },
  de: {
    garage: "Garage",
    garden: "Garten",
    terrace: "Terrasse",
    balcony: "Balkon",
    basement: "Keller",
    attic: "Dachboden",
    airConditioning: "Klimaanlage",
    fireplace: "Kamin",
    alarm: "Alarmsystem",
    fence: "Zaun"
  }
};

// Default SEO metadata
export const DEFAULT_SEO = {
  pl: {
    title: "Osiedle Brzozowe Wzgórze - Nowoczesne domy w Brzezinach | FALCO INVESTMENTS",
    description: "Odkryj Osiedle Brzozowe Wzgórze - ekskluzywne domy w otoczeniu natury. Nowoczesna architektura, przestronne działki, doskonała lokalizacja w Brzezinach.",
    keywords: ["osiedle Brzozowe Wzgórze", "domy Brzeziny", "nowe domy", "FALCO INVESTMENTS", "nieruchomości Brzeziny", "domy na sprzedaż"]
  },
  en: {
    title: "Brzozowe Wzgórze Estate - Modern homes in Brzeziny | FALCO INVESTMENTS",
    description: "Discover Brzozowe Wzgórze Estate - exclusive homes surrounded by nature. Modern architecture, spacious plots, excellent location in Brzeziny.",
    keywords: ["Brzozowe Wzgórze Estate", "homes Brzeziny", "new homes", "FALCO INVESTMENTS", "real estate Brzeziny", "homes for sale"]
  },
  de: {
    title: "Wohnsiedlung Brzozowe Wzgórze - Moderne Häuser in Brzeziny | FALCO INVESTMENTS",
    description: "Entdecken Sie die Wohnsiedlung Brzozowe Wzgórze - exklusive Häuser umgeben von Natur. Moderne Architektur, geräumige Grundstücke, ausgezeichnete Lage in Brzeziny.",
    keywords: ["Wohnsiedlung Brzozowe Wzgórze", "Häuser Brzeziny", "neue Häuser", "FALCO INVESTMENTS", "Immobilien Brzeziny", "Häuser zum Verkauf"]
  }
};

// Contact form settings
export const CONTACT_FORM = {
  recipientEmail: COMPANY.email,
  maxMessageLength: 1000,
  requiredFields: ['name', 'email', 'message', 'gdprConsent']
};

// Cookie banner settings
export const COOKIE_SETTINGS = {
  cookieName: 'falco-cookies-accepted',
  expirationDays: 365
};
