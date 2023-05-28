import { PrismaClient } from "@prisma/client";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

const prisma = new PrismaClient();

interface Restaurant {
    slug: string;
    id: number;
    name: string;
    description: string;
    images: string[];
    main_image: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug,
        },
        select: {
            id: true,
            name: true,
            description: true,
            images: true,
            main_image: true,
            slug: true,
        },
    });

    if (!restaurant) {
        throw new Error();
    }

    return restaurant;
};

export default async function RestaurantDetails({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const restaurant = await fetchRestaurantBySlug(slug);

    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <RestaurantNavBar slug={slug} />
                <Title name={restaurant.name} />
                <Rating />
                <Description description={restaurant?.description} />
                <Images images={restaurant?.images ?? []} />
                <Reviews />
            </div>
            <div className="w-[27%] relative text-reg">
                <ReservationCard />
            </div>
        </>
    );
}
