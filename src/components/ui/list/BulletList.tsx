
interface Props {
    items: string[];
}


export const BulletList = ({ items }: Props) => (
    <ul className="space-y-3">
        {items.map((item, index) => (
            <li key={index} className="leading-7 flex items-start">
                <span className="font-bold text-xl text-blue-950 mr-3">•</span>
                {item}
            </li>
        ))}
    </ul>
);
