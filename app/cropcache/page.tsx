import { redirect } from "next/navigation";
import ComingSoon from "../components/comingSoon";
import LargeNavBar from "../components/nav/largeNavBar";
import readUserSession from "../lib/actions";
import { CROP_CACHE_PROPS } from "./props";
import NavBar from "../components/nav/navBar";

export default async function CropCache() {
    const { data } = await readUserSession();
    if (!data.session) {
        return redirect('/signin');
    }
    return (
        <>
            <NavBar current_page="cropcache" image_path={CROP_CACHE_PROPS.IMAGE_PATH} slug={CROP_CACHE_PROPS.SLUG} />
            <main className="relative h-screen" style={{ height: "85vh" }}>
                <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <ComingSoon

                        image_path={CROP_CACHE_PROPS.IMAGE_PATH}
                        line_one={CROP_CACHE_PROPS.LINE_ONE}
                        line_two={CROP_CACHE_PROPS.LINE_TWO}
                    />
                    <div className="h-16"></div>
                </div>
            </main>
        </>
    );
}
