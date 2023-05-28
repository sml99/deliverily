export default function Header({ name }: { name: string }) {
    const renderTitle = (title: string) => {
        const nameArray = title.split("-");
        return `
            ${nameArray.slice(0, nameArray.length - 1).join(" ")} (${
            nameArray[nameArray.length - 1]
        })
        `;
    };

    return (
        <div className="h-96 overflow-hidden">
            <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
                <h1 className="text-7xl text-white capitalize text-shadow text-center">
                    {`${renderTitle(name)}`}
                </h1>
            </div>
        </div>
    );
}
