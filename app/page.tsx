import Image from "next/image";
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
                <source src={VIDEO_URL} type="video/mp4" />
            </video>
        </main>
    );
}
