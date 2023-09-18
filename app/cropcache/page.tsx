import Image from "next/image";

export default function Home() {
    return (
        <main className="relative h-screen">
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 text-center">
                <div>
                    <div className="flex justify-center m-4">
                        <Image
                            alt=""
                            src="/amoled/cc-icon.svg"
                            width={70}
                            height={70}
                            style={{
                                width: "30%",
                                height: "auto",
                            }}
                        />
                    </div>
                    <h1 className="text-5xl text-clampH1 font-black text-darkPrimary">
                        CROP
                    </h1>
                    <h1 className="text-5xl text-clampH1 font-black text-darkAlternate">
                        CACHE
                    </h1>
                    <h2 className="text-base m-4 text-darkPrimary">
                        COMING SOON
                    </h2>
                </div>
            </div>
        </main>
    );
}
