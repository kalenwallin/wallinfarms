import ComingSoon from "../components/comingSoon";

export default function Home() {
    return (
        <main className="relative h-screen">
            <ComingSoon
                image_path="/amoled/ss-icon.svg"
                line_one="SCALE"
                line_two="SNAP"
            />
        </main>
    );
}
