import frTranslations from '../../locales/fr.json';
import enTranslations from '../../locales/en.json';

const translations = {
  fr: frTranslations,
  en: enTranslations,
};

export default function handler(req, res) {
    const locale = req.query.locale || 'fr';
    const t = translations[locale] || translations.fr;
    
    const expertise = [
        {
            id: 0,
            title: t.expertiseData[0].title,
            desc: t.expertiseData[0].desc,
        },
        {
            id: 1,
            title: t.expertiseData[1].title,
            desc: t.expertiseData[1].desc,
        },
        {
            id: 2,
            title: t.expertiseData[2].title,
            desc: t.expertiseData[2].desc,
        },
        {
            id: 3,
            title: t.expertiseData[3].title,
            desc: t.expertiseData[3].desc,
        },
        {
            id: 4,
            title: t.expertiseData[4].title,
            desc: t.expertiseData[4].desc,
        },
    ];
    
    res.status(200).json(expertise);
}