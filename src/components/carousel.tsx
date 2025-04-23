import { useState } from 'react';

type CarouselProps = {
    images: Array<{
        src: string;
        alt: string;
        caption?: string;
    }>;
};

const Carousel = ({ images }: CarouselProps) => {
    const [index, setIndex] = useState(0);

    const changeImage = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="relative w-[400px] h-[300px]">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={`${process.env.PUBLIC_URL}${image.src}`}
                        alt={image.alt}
                        className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    />
                ))}
            </div>
            <p className="font-medium">
                {images[index]?.caption || images[index].alt}
            </p>
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
