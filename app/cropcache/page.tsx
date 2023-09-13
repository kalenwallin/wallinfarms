import Link from "next/link";

const VIDEO_URL = "https://i.kalenwallin.com/file/portfoliov2/sharex/hero.mp4";
const FALLBACK =
    "https://images.unsplash.com/photo-1606041974734-0341c2d2d988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80";

export default function Home() {
    return (
        <main className="relative h-screen">
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 text-center">
                <div>
                    <h1 className="text-5xl text-clampH1 font-bold text-white">
                        CropCache
                    </h1>
                    <h2 className="text-2xl text-clampH2 m-8 text-gray-300">
                        Coming soon
                    </h2>
                </div>
            </div>
        </main>
    );
}
