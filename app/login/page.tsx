import Image from "next/image";

export default function Home() {
    return (
        <main className="relative h-screen">
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 text-center">
                <div>
                    <div className="flex justify-center m-4">
                        <Image
                            alt=""
                            src="/icon.svg"
                            width={37.75}
                            height={70}
                            style={{
                                width: "25%",
                                height: "auto",
                            }}
                        />
                    </div>
                    <h1 className="text-5xl text-clampH1 font-black text-darkPrimary">
                        SIGN
                    </h1>
                    <h1 className="text-5xl text-clampH1 font-black text-darkAlternate">
                        IN
                    </h1>
                    <span className="text-base m-4 text-darkPrimary">
                        COMING SOON
                    </span>
                </div>
            </div>
        </main>
    );
}
