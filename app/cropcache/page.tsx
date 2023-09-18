import ComingSoon from "../components/comingSoon";

export default function Home() {
    return (
        <main className="relative h-screen">
            <ComingSoon
                image_path="/amoled/cc-icon.svg"
                line_one="CROP"
                line_two="CACHE"
            />
        </main>
    );
}
