import { PRICE } from "@prisma/client";
interface Props {
    price: PRICE;
}

export default function Price({ price }: Props) {
    return (
        <p className="flex mr-3">
            {price.includes("EXPENSIVE") ? (
                <span>$$$$</span>
            ) : price.includes("REGULAR") ? (
                <>
                    <span>$$$</span>
                    <span className="text-gray-400">$</span>
                </>
            ) : (
                <>
                    <span>$$</span>
                    <span className="text-gray-400">$$</span>
                </>
            )}
        </p>
    );
}
