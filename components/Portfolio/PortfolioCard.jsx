import Badge from "../Common/Badge"
import Image from 'next/image'

const PortfolioCard = ({ data }) => {
    return (
        <div className="card_stylings overflow-hidden h-full relative group glass-card hover:border-Green/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative w-full h-48 md:h-64 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out">
                <Image
                    src={`/${data?.image}`}
                    alt={data?.projectName}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-Snow">
                            {data?.projectName}
                        </h3>
                        <a
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-Green hover:text-white transition-colors duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-sm text-LightGray mb-4 line-clamp-3">
                        {data?.projectDetail}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {data.technologiesUsed.map((tech, key) => (
                            <Badge key={key} title={tech.tech} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard