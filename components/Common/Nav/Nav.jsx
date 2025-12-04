import { ImCross, ImHome } from 'react-icons/im'
import { FiAward } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'
import DrawerLayout from '../DrawerLayout'
import LanguageSwitcher from '../LanguageSwitcher'
import { useTranslation } from '../../../hooks/useTranslation'

const Nav = ({ setIsOpen, isOpen }) => {
    const { t } = useTranslation();

    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <div className="absolute z-50 flex flex-col justify-center lg:inset-y-0 -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] glass-nav shadow-2xl md:rounded-xl md:overflow-hidden">
                <div onClick={e => setIsOpen(false)} className="flex text-LightGray absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-transparent border-b border-white/5">
                    <ImCross className="hover:text-Green transition-colors duration-300 cursor-pointer" />
                </div>
                <div className="flex flex-col gap-y-2 px-6 w-full transition">
                    <div className="mb-4">
                        <LanguageSwitcher />
                    </div>
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={t('nav.home')} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/contact'} NavIcon={<FaHandshake />} NavText={t('nav.contact')} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/background'} NavIcon={<HiIdentification />} NavText={t('nav.background')} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/portfolio'} NavIcon={<FiAward />} NavText={t('nav.portfolio')} />
                </div>
            </div>
        </DrawerLayout>
    )
}

export default Nav