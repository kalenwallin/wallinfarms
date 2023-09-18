import Image from "next/image";

export default function LogoLong(props?: {
    image_path?: string;
    line_one?: string;
    line_two?: string;
    image_width?: string;
    className?: string;
}) {
    return (
        <>
            {props ? (
                <div className="relative flex flex-row items-center">
                    <Image
                        alt=""
                        src={props.image_path ? props.image_path : ""}
                        width={25}
                        height={25}
                        style={{
                            maxWidth: props.image_width
                                ? props.image_width
                                : "2rem",
                            height: "auto",
                        }}
                        className={
                            props.className ? props.className : "m-4 ml-0"
                        }
                    />
                    <span className="text-3xl font-black text-primary mr-4">
                        {props.line_one ? props.line_one : ""}
                    </span>
                    <span className="text-3xl font-black text-secondary">
                        {props.line_two ? props.line_two : ""}
                    </span>
                </div>
            ) : null}
        </>
    );
}
