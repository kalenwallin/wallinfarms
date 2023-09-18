import ComingSoon from "../components/comingSoon";

export const CROP_CACHE_PROPS: {
    IMAGE_PATH: string;
    LINE_ONE: string;
    LINE_TWO: string;
    SLUG: string;
    IMAGE_WIDTH: string;
} = {
    IMAGE_PATH: "/amoled/cc-icon.svg",
    LINE_ONE: "CROP",
    LINE_TWO: "CACHE",
    SLUG: "/home",
    IMAGE_WIDTH: "1rem",
};

export default function CropCache() {
    return (
        <main className="relative h-screen">
            <ComingSoon
                image_path={CROP_CACHE_PROPS.IMAGE_PATH}
                line_one={CROP_CACHE_PROPS.LINE_ONE}
                line_two={CROP_CACHE_PROPS.LINE_TWO}
            />
        </main>
    );
}
