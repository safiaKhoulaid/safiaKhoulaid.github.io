import { Progress } from "antd"
import { useEffect, useState } from "react"
import { useTranslation } from '../../../hooks/useTranslation';

const Languages = () => {
    const { t } = useTranslation();
    const [francais, setFrancais] = useState(0)
    const [english, setEnglish] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (francais < 98) {
                setFrancais(prev => prev + 1);
            }
            if (english < 88) {
                setEnglish(prev => prev + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [francais, english])

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>{t('intro.languages')}</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={francais} size={75} />
                        <span className='text-xs font-bold text-Snow'>{t('intro.french')}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={75} />
                        <span className='text-xs font-bold text-Snow'>{t('intro.english')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages
