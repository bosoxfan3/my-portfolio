import { useState, useMemo } from 'react';

type CarouselProps = {
    images: Array<{
        src: string;
        alt: string;
        caption?: string;
    }>;
};

const Carousel = ({ images }: CarouselProps) => {
    const [index, setIndex] = useState(0);

    const image = useMemo(() => images[index], [images, index]);

    const changeImage = () => {
        const newIndex = index + 1;
        if (newIndex > images.length - 1) {
            setIndex(0);
        } else {
            setIndex(newIndex);
        }
    };

    return (
        <div>
            <img
                src={image.src}
                alt={image.alt}
                className="rounded-xl shadow mb-6"
            />
            {image.caption && <p>{image.caption}</p>}
            <button
                type="button"
                className="px-4 py-2 bg-zinc-200 rounded hover:bg-zinc-300 mb-6"
                onClick={changeImage}
            >
                Next Photo
            </button>
        </div>
    );
};

export default Carousel;
