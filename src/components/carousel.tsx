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
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-[400px] h-[300px] flex items-center justify-center">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <p className="font-medium">{image?.caption || image.alt}</p>
            <button
                type="button"
                className="px-4 py-2 bg-zinc-200 rounded hover:bg-zinc-300 mb-6"
                onClick={changeImage}
            >
                Next Screenshot
            </button>
        </div>
    );
};

export default Carousel;
