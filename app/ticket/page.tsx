"use client";
import { useState } from "react";
import axios from "axios";
import { AxiosProgressEvent } from "axios";
import { LinearProgress } from "@material-ui/core";

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
                "/api/python/autocornticket",
                formData,
                config
            );
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
        <div>
            <input type="file" multiple onChange={fileSelectedHandler} />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={onLocationChange}
            />
            <input
                type="text"
                placeholder="Field"
                value={field}
                onChange={onFieldChange}
            />
            <button onClick={fileUploadHandler}>Upload</button>
            <div>
                {uploadPercentage < 0 ? (
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
                )}
            </div>
            {fileUrl && (
                <a href={fileUrl} download>
                    Download Excel
                </a>
            )}
        </div>
    );
}
