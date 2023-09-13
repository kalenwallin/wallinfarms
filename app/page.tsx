import Link from "next/link";

const VIDEO_URL = "https://i.kalenwallin.com/file/portfoliov2/sharex/hero.mp4";
const FALLBACK =
    "https://images.unsplash.com/photo-1606041974734-0341c2d2d988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80";

export default function Home() {
    return (
        <main className="relative h-screen">
            <video
                className="absolute inset-0 object-cover w-full h-full"
                playsInline
                autoPlay
                muted
                loop
                poster={FALLBACK}
                id="bgvid"
            >
                <source src="polina.webm" type="video/webm" />
                <source src={VIDEO_URL} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 text-center">
                <div>
                    <h1 className="text-5xl text-clampH1 font-bold text-white">
                        Wallin Farms
                    </h1>
                    <h2 className="text-2xl text-clampH2 m-4 text-gray-300">
                        Imperial, NE
                    </h2>
                </div>
                <Link
                    className="px-6 py-3 font-bold text-white bg-green-700 rounded hover:shadow-xl hover:bg-green-800 focus:outline-none"
                    href="/login"
                >
                    Sign in
                </Link>
            </div>
        </main>
    );
}
