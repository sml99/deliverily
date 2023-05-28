import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import { PrismaClient } from "@prisma/client";
import { RestaurantCardType, SELECT_RESTAURANT_CARD_TYPE } from "../page";

const prisma = new PrismaClient();

const fetchRestaurants = async (city: string): Promise<RestaurantCardType[]> => {
    let restaurants: RestaurantCardType[] = [];
    try {
        if (!city?.length) return await prisma.restaurant.findMany(SELECT_RESTAURANT_CARD_TYPE);

        return await prisma.restaurant.findMany({
            where: { location: { name: city } },
            ...SELECT_RESTAURANT_CARD_TYPE,
        });
    } catch (err) {
        console.log(err);
    }
    return restaurants;
};

const SELECT_NAME = { select: { name: true } };

const fetchLocations = async () => {
    return getUniqueNameValues(await prisma.location.findMany(SELECT_NAME));
};

const fetchCuisines = async () => {
    return getUniqueNameValues(await prisma.cuisine.findMany(SELECT_NAME));
};

const getUniqueNameValues = (array: { name: string }[]): string[] => {
    return Array.from(new Set(array.map((item: any) => item.name)));
};

export default async function Search({ searchParams: { city } }: { searchParams: { city: string } }) {
    const [restaurants, locations, cuisines] = [
        await fetchRestaurants(city),
        await fetchLocations(),
        await fetchCuisines(),
    ];

    return (
        <main className="max-w-screen-2xl m-auto bg-white">
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar locations={locations} cuisines={cuisines} />
                <div className="w-5/6">
                    {restaurants?.length ? (
                        restaurants.map((restaurant: RestaurantCardType) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))
                    ) : (
                        <p>Sorry, No restaurants found in "{city}"</p>
                    )}
                </div>
            </div>
        </main>
    );
}
