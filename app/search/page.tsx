import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import { PrismaClient, Restaurant } from "@prisma/client";
import { RestaurantCardType } from "../page";

const prisma = new PrismaClient();

const fetchRestaurants = async (
    city: string
): Promise<RestaurantCardType[]> => {
    let restaurants: RestaurantCardType[] = [];
    try {
        restaurants = await prisma.restaurant.findMany({
            where: { location: { name: city } },
            select: {
                id: true,
                name: true,
                main_image: true,
                cuisine: true,
                location: true,
                price: true,
                slug: true,
            },
        });
    } catch (err) {
        console.log(err);
    }
    return restaurants;
};

export default async function Search({
    searchParams: { city },
}: {
    searchParams: { city: string };
}) {
    const restaurants = await fetchRestaurants(city);
    console.log(restaurants);

    return (
        <main className="max-w-screen-2xl m-auto bg-white">
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar />
                <div className="w-5/6">
                    {restaurants?.length ? (
                        restaurants.map((restaurant: RestaurantCardType) => (
                            <RestaurantCard
                                key={restaurant.id}
                                restaurant={restaurant}
                            />
                        ))
                    ) : (
                        <p>No restaurants found in {city}</p>
                    )}
                </div>
            </div>
        </main>
    );
}
