import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageSwitcher from '../Common/LanguageSwitcher';
import Image from 'next/image';

const Banner = () => {
    const { t } = useTranslation();

    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="absolute top-4 right-4 z-50 hidden md:block">
                    <LanguageSwitcher />
                </div>
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div className="">
                            <div className="animate-fade-in-up">
                                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">
                                    {t('banner.hello')}
                                </h1>
                            </div>
                            <div className="animate-fade-in-up-delay-1">
                                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                                    <span>{"<"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                        {">"} <span className="text-Snow sm:text-xl xl:text-2xl font-bold"> {t('banner.iam')}  <span className="inline-block text-Green">
                                            <Typewriter
                                                options={{
                                                    strings:
                                                        [t('banner.role1'),
                                                        t('banner.role2')],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                        </span> {"</"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>{">"} </span>
                                </div>
                            </div>
                            <div className="animate-fade-in-up-delay-2">
                                <Link to='intro' spy={true} smooth={true} duration={500} offset={-50} className="button shadow-lg hover:shadow-Green/50 transition-shadow duration-300">
                                    {t('banner.explore')}
                                </Link>
                            </div>
                        </div>
                        <div className="w-48 h-52 relative hidden md:block animate-fade-in-up">
                            <Image
                                src="/images/emoji.png"
                                alt="emoji"
                                fill
                                className="object-contain drop-shadow-2xl icon"
                            />
                        </div>
                    </div>
                </div>

                {/* details in row */}
                <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16 animate-fade-in-up-delay-2">

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>{t('banner.completedProjects')}</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>8+</span>
                        <span className='text-xs text-Snow'>{t('banner.freelanceClients')}</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>5+</span>
                        <span className='text-xs text-Snow'>{t('banner.honorsAwards')}</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>{t('banner.opensourceProjects')}</span>
                    </div>

                </div>
            </div>
        </BannerLayout>
    )
}

export default Banner