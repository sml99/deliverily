import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";

export default function Search() {
    return (
        <main className="max-w-screen-2xl m-auto bg-white">
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar />
                <div className="w-5/6">
                    <RestaurantCard />
                </div>
            </div>
        </main>
    );
}
