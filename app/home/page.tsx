import ComingSoon from "../components/comingSoon";
import NavBar from "../components/navBar";

export const HOME_PROPS: {
    IMAGE_PATH: string;
    LINE_ONE: string;
    LINE_TWO: string;
    SLUG: string;
    IMAGE_WIDTH: string;
} = {
    IMAGE_PATH: "icon.svg",
    LINE_ONE: "WALLIN",
    LINE_TWO: "FARMS",
    SLUG: "/home",
    IMAGE_WIDTH: "1rem",
};

export default function Home() {
    return (
        <main className="relative h-screen">
            <NavBar />
            <ComingSoon
                image_path={HOME_PROPS.IMAGE_PATH}
                line_one={HOME_PROPS.LINE_ONE}
                line_two={HOME_PROPS.LINE_TWO}
            />
        </main>
    );
}
