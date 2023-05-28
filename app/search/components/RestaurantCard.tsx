import { RestaurantCardType } from "@/app/page";
import Link from "next/link";

export default function RestaurantCard({
    restaurant,
}: {
    restaurant: RestaurantCardType;
}) {
    const { name, main_image, slug, cuisine, location } = restaurant;
    return (
        <div className="border-b flex pb-5">
            <img src={main_image} alt="" className="w-44 rounded" />
            <div className="pl-5">
                <h2 className="text-3xl">{name}</h2>
                <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <p className="mr-4">$$$</p>
                        <p className="mr-4">{cuisine.name}</p>
                        <p className="mr-4">{location.name}</p>
                    </div>
                </div>
                <div className="text-red-600">
                    <Link href={`/restaurant/${slug}`}>
                        View more information
                    </Link>
                </div>
            </div>
        </div>
    );
}
