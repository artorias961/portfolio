export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
  googlescholar = 'googlescholar',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@artorias9611',
  site: 'christopher-morales.vercel.app',
  calendly: 'https://calendly.com/artorias961',
  links: {
    github: 'https://github.com/artorias961',
    linkedin: 'https://linkedin.com/in/artorias961',
    googlescholar:
      'https://scholar.google.com/',
    twitter: 'https://twitter.com/',
    youtube: 'https://www.youtube.com/channel/UCQMCcW51kCojQtxdr8c4-pw',
    email: 'mailto:contact@artorias962.com',
    buymeacoffee: 'https://www.buymeacoffee.com/',
  },
};
