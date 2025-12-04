import Badge from "../Common/Badge"
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const PortfolioCard = ({ data }) => {
    return (
        <div className="group relative flex flex-col h-full bg-DeepNightBlack/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-Green/50 transition-all duration-300 hover:shadow-xl hover:shadow-Green/10 hover:-translate-y-1">

            {/* Image Section */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                    src={`/${data?.image}`}
                    alt={data?.projectName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-Snow group-hover:text-Green transition-colors duration-300">
                        {data?.projectName}
                    </h3>
                    <Link
                        href={data?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-LightGray hover:text-Green transition-colors duration-300 p-2 -mr-2 -mt-2"
                        aria-label="View Project"
                    >
                        <FaExternalLinkAlt className="w-4 h-4" />
                    </Link>
                </div>

                <p className="text-sm text-LightGray/80 leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {data?.projectDetail}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {data.technologiesUsed.map((tech, key) => (
                            <span key={key} className="text-xs font-medium text-Green bg-Green/10 px-2 py-1 rounded-md border border-Green/20">
                                {tech.tech}
                            </span>
                        ))}
                    </div>

                    <Link
                        href={data?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-DeepNightBlack bg-Green rounded-lg hover:bg-Green/90 transition-colors duration-300"
                    >
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard