// Property types
export type PropertyStatus = 'available' | 'reserved' | 'sold';

export interface House {
  id: string;
  model: string;
  status: PropertyStatus;
  price: number;
  area: number;      // m²
  plotArea: number;  // m²
  rooms: number;
  bathrooms: number;
  floors: number;
  garage: boolean;
  garageSpaces?: number;
  garden: boolean;
  terrace: boolean;
  images: string[];
  floorPlans: string[];
  features: LocalizedContent;
  description: LocalizedContent;
  shortDescription?: LocalizedContent;
  completionDate?: string;
  energyClass?: string;
  availableFrom?: string;
  plotNumber?: string;
}

// Localization types
export type Locale = 'pl' | 'en' | 'de';

export interface LocalizedContent {
  pl: string | string[];
  en: string | string[];
  de: string | string[];
}

export interface Translation {
  [key: string]: string | Translation;
}

export interface Translations {
  pl: Translation;
  en: Translation;
  de: Translation;
}

// Company information
export interface CompanyInfo {
  name: string;
  legalName: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  whatsapp: string;
  contactPerson: string;
  nip?: string;
  krs?: string;
  regon?: string;
}

// Estate information
export interface EstateInfo {
  name: LocalizedContent;
  location: string;
  description: LocalizedContent;
  features: LocalizedContent;
  coordinates?: {
    lat: number;
    lng: number;
  };
  totalHouses: number;
  completionYear: number;
}

// SEO types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  alternates?: {
    [key in Locale]?: string;
  };
}

// Admin types
export interface AdminUser {
  email: string;
  role: 'admin' | 'editor';
}

// API Response types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyId?: string;
  preferredContact?: 'email' | 'phone' | 'whatsapp';
  gdprConsent: boolean;
}

// Navigation types
export interface NavItem {
  label: LocalizedContent;
  href: string;
  isExternal?: boolean;
  children?: NavItem[];
}

// Filter types
export interface PropertyFilters {
  status?: PropertyStatus;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  rooms?: number[];
  features?: string[];
}

// Cloudflare KV types
export interface KVReservation {
  houseId: string;
  status: PropertyStatus;
  updatedAt: string;
  updatedBy?: string;
  notes?: string;
}
