import { PRICE } from "@prisma/client";
import Link from "next/link";

export default function ({
    locations,
    cuisines,
    params,
}: {
    locations: string[];
    cuisines: string[];
    params: { city: string; cuisine: string; price: PRICE };
}) {
    const prices = [
        { price: PRICE.CHEAP, label: "$" },
        { price: PRICE.REGULAR, label: "$$" },
        { price: PRICE.EXPENSIVE, label: "$$$" },
    ];
    return (
        <div className="w-1/5">
            <div className="border-b pb-4 flex flex-col">
                <h1 className="mb-2">Region</h1>
                {locations?.map((location) => (
                    <Link
                        key={location}
                        className="font-light text-reg capitalize"
                        href={{
                            pathname: `/search`,
                            query: {
                                ...params,
                                city: location,
                            },
                        }}
                    >
                        {location}
                    </Link>
                ))}
            </div>
            <div className="border-b pb-4 mt-3 flex flex-col">
                <h1 className="mb-2">Cuisine</h1>
                {cuisines?.map((cuisine) => (
                    <Link
                        key={cuisine}
                        className="font-light text-reg capitalize"
                        href={{
                            pathname: `/search`,
                            query: {
                                ...params,
                                cuisine: cuisine,
                            },
                        }}
                    >
                        {cuisine}
                    </Link>
                ))}
            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                    {prices.map(({ price, label }) => (
                        <Link
                            href={{
                                pathname: "/search",
                                query: {
                                    ...params,
                                    price: price,
                                },
                            }}
                            className="border w-full text-reg font-light rounded-l p-2"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
