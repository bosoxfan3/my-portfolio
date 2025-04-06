import { Link } from 'react-router-dom';

type FeatureCardProps = {
    title: string;
    image: string;
    shortDescription: string;
    route: string; // e.g. "/projects/nba-picks"
};

export default function ProjectCard({
    title,
    image,
    shortDescription,
    route,
}: FeatureCardProps) {
    return (
        <Link
            to={route}
            className="group block rounded-2xl shadow hover:shadow-lg transition overflow-hidden bg-white dark:bg-zinc-900"
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition">
                    {title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                    {shortDescription}
                </p>
            </div>
        </Link>
    );
}
