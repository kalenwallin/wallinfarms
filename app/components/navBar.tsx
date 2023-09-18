import LogoLong from "./logoLong";
import { HOME_PROPS } from "../home/page";

export default function NavBar(props?: {
    image_path?: string;
    line_one?: string;
    line_two?: string;
    slug?: string;
}) {
    return (
        <div className="relative flex flex-row border-b border-neutral-800 w-full h-16 items-center justify-between">
            <div className="flex" id="nav-breadcrumbs">
                <a href={HOME_PROPS.SLUG} className="flex items-center">
                    <LogoLong
                        image_path={HOME_PROPS.IMAGE_PATH}
                        line_one={HOME_PROPS.LINE_ONE}
                        line_two={HOME_PROPS.LINE_TWO}
                        image_width={HOME_PROPS.IMAGE_WIDTH}
                        className="m-4"
                    />
                </a>
                {props ? (
                    <a
                        href={props.slug ? props.slug : "#"}
                        className="flex items-center"
                    >
                        <div className="relative flex flex-row items-center stroke-darkPrimary">
                            <svg
                                height="48"
                                role="separator"
                                viewBox="0 0 32 32"
                                width="48"
                            >
                                <path
                                    d="M22 5L9 28"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <LogoLong
                                image_path={props.image_path}
                                line_one={props.line_one}
                                line_two={props.line_two}
                            />
                        </div>
                    </a>
                ) : null}
            </div>
            <div className="flex">
                <LogoLong
                    image_path={props?.image_path}
                    line_one={props?.line_one}
                    line_two={props?.line_two}
                />
            </div>
        </div>
    );
}
