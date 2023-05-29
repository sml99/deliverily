import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import { PRICE, PrismaClient } from "@prisma/client";
import {
    RestaurantCardType,
    SELECT_RESTAURANT_CARD_TYPE,
} from "../page";

const prisma = new PrismaClient();

const fetchRestaurants = async (
    city?: string,
    cuisine?: string,
    price?: PRICE
): Promise<RestaurantCardType[]> => {
    let restaurants: RestaurantCardType[] = [];

    try {
        const where: any = {};
        if (city) where.location = { name: city };
        if (cuisine) where.cuisine = { name: cuisine };
        if (price) where.price = price;

        if (where)
            return await prisma.restaurant.findMany({
                where: where,
                ...SELECT_RESTAURANT_CARD_TYPE,
            });

        return await prisma.restaurant.findMany({
            ...SELECT_RESTAURANT_CARD_TYPE,
        });
    } catch (err) {
        console.log(err);
    }
    return restaurants;
};

const SELECT_NAME = { select: { name: true } };

const fetchLocations = async () => {
    return getUniqueNameValues(
        await prisma.location.findMany(SELECT_NAME)
    );
};

const fetchCuisines = async () => {
    return getUniqueNameValues(
        await prisma.cuisine.findMany(SELECT_NAME)
    );
};

const getUniqueNameValues = (
    array: { name: string }[]
): string[] => {
    return Array.from(
        new Set(array.map((item: any) => item.name))
    );
};

export default async function Search({
    searchParams,
}: {
    searchParams: {
        city: string;
        cuisine: string;
        price: PRICE;
    };
}) {
    const { city, cuisine, price } = searchParams;
    const [restaurants, locations, cuisines] = [
        await fetchRestaurants(city, cuisine, price),
        await fetchLocations(),
        await fetchCuisines(),
    ];

    return (
        <main className="max-w-screen-2xl m-auto bg-white">
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar
                    params={searchParams}
                    locations={locations}
                    cuisines={cuisines}
                />
                <div className="w-5/6">
                    {restaurants?.length ? (
                        restaurants.map(
                            (
                                restaurant: RestaurantCardType
                            ) => (
                                <RestaurantCard
                                    key={restaurant.id}
                                    restaurant={restaurant}
                                />
                            )
                        )
                    ) : (
                        <p>
                            Sorry, No restaurants found in "
                            {city}"
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}
