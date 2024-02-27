import Image from "next/image";

export default function ComingSoon(props: {
    image_path: string;
    line_one: string;
    line_two: string;
}) {
    return (
        <div className="relative flex flex-col items-center justify-center h-full space-y-8 pb-20 text-center">
            <div>
                <div className="flex justify-center m-4">
                    <Image
                        alt=""
                        src={props.image_path}
                        width={70}
                        height={70}
                        style={{
                            width: "30%",
                            height: "auto",
                        }}
                    />
                </div>
                <h1 className="text-5xl text-clampH1 font-black text-primary">
                    {props.line_one}
                </h1>
                <h1 className="text-5xl text-clampH1 font-black text-secondary">
                    {props.line_two}
                </h1>
                <p className="text-base m-2 text-primary">COMING SOON</p>
            </div>
        </div>
    );
}
