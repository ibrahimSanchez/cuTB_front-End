import Image from "next/image"

interface Props {
    srcImage: string;
    title: string;
    text: string;
}


export const HomeCard = ({ srcImage, text, title }: Props) => {
    return (
        <div className="text-center p-6 bg-page_background2 rounded-lg shadow-lg animateMove">
            <Image
                src={srcImage}
                alt="Comunidad"
                width={80}
                height={64}
                className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-secondary mb-2">
                {title}
            </h3>
            <p className="text-primary">
                {text}
            </p>
        </div>
    )
}
