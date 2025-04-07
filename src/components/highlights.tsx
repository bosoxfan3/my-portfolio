type HighlightsProps = {
    highlights: string[];
};

const Highlights = ({ highlights }: HighlightsProps) => {
    return (
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
                {highlights.map((highlight) => (
                    <span className="bg-zinc-200 text-sm px-2 py-1 rounded">
                        {highlight}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Highlights;
