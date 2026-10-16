import type { Lang } from '../i18n/ui';

/**
 * PUPA's WhatsApp, and the line each button opens the chat with. The line ends
 * with the page it came from, so whoever answers can record how the family
 * found PUPA (the staff portal's Enrolment, "Heard about PUPA from"). Nothing
 * is tracked: the visitor sees the line and can change it before sending,
 * which keeps the privacy statement's "no analytics" true.
 *
 * Korean visitors write to staff who read Indonesian and English, so their
 * lines are in English with a Korean greeting, as the Contact page did.
 */
export const WA_NUMBER = '62818533698';

export type WaPage = 'home' | 'enrollment' | 'programs' | 'contact' | 'workshops' | 'volunteer' | 'donate' | 'article' | 'website';

const KO = '안녕하세요. ';

const LINES: Record<WaPage, Record<Lang, string>> = {
  home: {
    id: 'Halo PUPA, saya ingin tahu tentang program PUPA. (dari halaman Beranda)',
    en: 'Hello PUPA, I would like to know about your programs. (from the Home page)',
    ko: `${KO}Hello PUPA, I would like to know about your programs. (from the Korean Home page)`,
  },
  enrollment: {
    id: 'Halo PUPA, saya ingin bertanya tentang pendaftaran. (dari halaman Pendaftaran)',
    en: 'Hello PUPA, I would like to ask about enrollment. (from the Enrollment page)',
    ko: `${KO}Hello PUPA, I would like to ask about enrollment. (from the Korean Enrollment page)`,
  },
  programs: {
    id: 'Halo PUPA, saya ingin bertanya tentang pendaftaran. (dari halaman Program)',
    en: 'Hello PUPA, I would like to ask about enrollment. (from the Programs page)',
    ko: `${KO}Hello PUPA, I would like to ask about enrollment. (from the Korean Programs page)`,
  },
  contact: {
    id: 'Halo PUPA, saya ingin tahu tentang program PUPA. (dari halaman Kontak)',
    en: 'Hello PUPA Center team, I would like to know more about your programs. Thank you. (from the Contact page)',
    ko: `${KO}Hello PUPA Center team, I would like to know more about your programs. Thank you. (from the Korean Contact page)`,
  },
  workshops: {
    id: 'Halo PUPA, saya ingin tahu lebih lanjut tentang workshop PUPA. (dari halaman Workshop)',
    en: "Hello PUPA, I would like to know more about PUPA's workshops. (from the Workshops page)",
    ko: `${KO}Hello PUPA, I would like to know more about PUPA's workshops. (from the Korean Workshops page)`,
  },
  volunteer: {
    id: 'Halo PUPA, saya ingin menjadi relawan. (dari halaman Ambil Bagian)',
    en: 'Hello PUPA, I would like to volunteer. (from the Get Involved page)',
    ko: `${KO}Hello PUPA, I would like to volunteer. (from the Korean Get Involved page)`,
  },
  donate: {
    id: 'Halo PUPA, saya ingin mengonfirmasi donasi. (dari halaman Donasi)',
    en: 'Hello PUPA, I would like to confirm a donation. (from the Donate page)',
    ko: `${KO}Hello PUPA, I would like to confirm a donation. (from the Korean Donate page)`,
  },
  article: {
    id: 'Halo PUPA, saya ingin tahu apakah PUPA cocok untuk kami. (dari halaman Artikel)',
    en: 'Hello PUPA, I would like to know if PUPA is the right fit for us. (from an article)',
    ko: `${KO}Hello PUPA, I would like to know if PUPA is the right fit for us. (from a Korean article)`,
  },
  website: {
    id: 'Halo PUPA, saya ingin tahu lebih lanjut tentang PUPA. (dari website)',
    en: 'Hello PUPA, I would like to know more about PUPA. (from the website)',
    ko: `${KO}Hello PUPA, I would like to know more about PUPA. (from the Korean website)`,
  },
};

export function waLink(lang: Lang, page: WaPage): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(LINES[page][lang])}`;
}
