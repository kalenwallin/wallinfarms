"use client";
import { useState } from "react";
import axios from "axios";
import { AxiosProgressEvent } from "axios";

export default function Home() {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [fileUrl, setFileUrl] = useState("");
    const [location, setLocation] = useState("");
    const [field, setField] = useState("");

    const fileSelectedHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSelectedFiles(event.target.files);
    };

    const fileUploadHandler = async () => {
        if (selectedFiles === null || selectedFiles.length === 0) {
            alert("Please select at least one file before uploading.");
            return;
        }

        const formData = new FormData();

        Array.from(selectedFiles).forEach((file) => {
            const acceptedFileTypes = [
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/gif",
                "application/pdf",
            ];
            if (!acceptedFileTypes.includes(file.type)) {
                alert(
                    `Invalid file type. The file ${file.name} was not uploaded.`
                );
                return;
            }
            formData.append("files", file, file.name);
        });

        formData.append("location", location);
        formData.append("field", field);
        console.log(formData);

        const config = {
            onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                let percentage = 0;
                if (progressEvent.total) {
                    percentage = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                } else {
                    // Indicate indeterminate progress somehow
                    // This could be setting percentage to a special value,
                    // setting a separate state variable, or something else depending on your UI
                    percentage = -1;
                }
                setUploadPercentage(percentage);
            },
        };

        try {
            const response = await axios.post(
                "/api/python/scalesnap",
                formData,
                config
            );
            console.log(response);
            setFileUrl(`/download/${response.data.fileUrl}`);
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error uploading file:", error);
                if (axios.isAxiosError(error) && error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error("Server response:", error.response.data);
                }
            }
            alert("There was an error uploading your file. Please try again.");
            return;
        }
        setTimeout(() => setUploadPercentage(0), 10000);
    };

    const onLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setField(event.target.value);
    };

    return (
        <main className="relative h-screen">
            <div className="relative flex flex-col items-center justify-center h-full space-y-8 text-center">
                <h1 className="text-5xl text-clampH1 font-bold text-white">
                    ScaleSnap
                </h1>
                <h2 className="text text-gray-300">Under development</h2>
                <div className="flex flex-col">
                    <label className="text-left ml-4" htmlFor="tickets">
                        Upload Tickets:
                    </label>
                    <input
                        className="m-4"
                        type="file"
                        name="tickets"
                        multiple
                        onChange={fileSelectedHandler}
                    />
                    <label className="text-left ml-4" htmlFor="location">
                        Sale Location:
                    </label>
                    <input
                        className="m-4"
                        type="text"
                        placeholder="Sale Location"
                        name="location"
                        value={location}
                        onChange={onLocationChange}
                    />
                    <label className="text-left ml-4" htmlFor="field">
                        Field Number:
                    </label>
                    <input
                        className="m-4"
                        type="text"
                        placeholder="Field"
                        name="field"
                        value={field}
                        onChange={onFieldChange}
                    />
                    <button onClick={fileUploadHandler}>Upload</button>
                    <div>
                        {/* {uploadPercentage < 0 ? (
                            <LinearProgress variant="indeterminate" />
                        ) : uploadPercentage < 100 ? (
                            <>
                                <div>{uploadPercentage}%</div>
                                <LinearProgress
                                    variant="determinate"
                                    value={uploadPercentage}
                                />
                            </>
                        ) : (
                            <div>Upload complete!</div>
                        )} */}
                    </div>
                    {fileUrl && (
                        <a href={fileUrl} download>
                            Download Excel
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}
