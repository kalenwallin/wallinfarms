import Image from "next/image";

export default function LogoLong(props?: {
    image_path?: string;
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
                </div>
            ) : null}
        </>
    );
}
