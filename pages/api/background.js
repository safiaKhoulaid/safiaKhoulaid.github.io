import frTranslations from '../../locales/fr.json';
import enTranslations from '../../locales/en.json';

const translations = {
  fr: frTranslations,
  en: enTranslations,
};

export default function handler(req, res) {
    const locale = req.query.locale || 'fr';
    const t = translations[locale] || translations.fr;
    
    const background = [
        {
            eduCards: [
                {
                    id: 0,
                    title: t.backgroundData.education[0].title,
                    degree: t.backgroundData.education[0].degree,
                    detail: t.backgroundData.education[0].detail,
                    year: t.backgroundData.education[0].year
                },
                {
                    id: 1,
                    title: t.backgroundData.education[1].title,
                    degree: t.backgroundData.education[1].degree,
                    detail: t.backgroundData.education[1].detail,
                    year: t.backgroundData.education[1].year
                },
                {
                    id: 2,
                    title: t.backgroundData.education[2].title,
                    degree: t.backgroundData.education[2].degree,
                    detail: t.backgroundData.education[2].detail,
                    year: t.backgroundData.education[2].year
                },
            ]
        },
        {
            expCards: [
                {
                    id: 0,
                    title: t.backgroundData.experience[0].title,
                    role: t.backgroundData.experience[0].role,
                    desc: t.backgroundData.experience[0].desc,
                    year: t.backgroundData.experience[0].year,
                    location: t.backgroundData.experience[0].location
                },
                {
                    id: 1,
                    title: t.backgroundData.experience[1].title,
                    role: t.backgroundData.experience[1].role,
                    desc: t.backgroundData.experience[1].desc,
                    year: t.backgroundData.experience[1].year,
                    location: t.backgroundData.experience[1].location
                },
            ]
        }
    ];
    
    res.status(200).json(background);
}
