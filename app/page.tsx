import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";

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
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div>
                    <div className="flex justify-center m-4">
                        <Image
                            alt=""
                            src="/icon.svg"
                            width={75}
                            height={75}
                            style={{
                                width: "35%",
                                height: "auto",
                            }}
                        />
                    </div>
                    <h1 className="text-center text-5xl text-clampH1 font-black text-primary">
                        WALLIN
                    </h1>
                    <h1 className="text-center text-5xl text-clampH1 font-black text-secondary">
                        FARMS
                    </h1>
                </div>

                <Link
                    className="px-6 m-4 font-bold text-black bg-secondary rounded hover:shadow-xl hover:bg-yellow-300 focus:outline-none"
                    href="/login"
                >
                    <Button
                        type="primary"
                        icon="LockOutlined"
                    >
                        SIGN IN
                    </Button>
                </Link>
            </div>
        </main>
    );
}
