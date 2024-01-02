"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/80v2rkV1I7h
 */
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import { useEffect } from "react";

export default function ExcelExportPreview() {
    const parseTableToExcel = () => {
        return console.log("Convert TODO: Convert HTML Table to Excel Sheet");
    };
    const downloadTable = () => {
        parseTableToExcel();
        console.log("Download TODO: Print this new layout");
        return;
    };
    const printTable = () => {
        parseTableToExcel();
        console.log("Print TODO: Print this new layout");
        return window.print();
    };

    // Use useEffect for client-side logic, if needed
    useEffect(() => {
        // Any client-side setup can go here
    }, []);

    return (
        <div className="bg-black text-white p-4">
            <div className="flex justify-left items-center mb-4">
                {/* <IconPrinter className="text-white" /> */}
                <IconFileexcel className="text-green-500 mr-2" />
                <p className="text-lg font-semibold">Excel report ready:</p>
                {/* <Button
                    className="bg-yellow-400 text-black"
                    variant="secondary"
                >
                    Download Excel report
                </Button> */}
            </div>
            <div className="bg-neutral-700 text-white rounded-t p-2">
                <Tabs>
                    <div>
                        <div className="font-semibold text-sm">
                            Preview file
                        </div>
                    </div>
                </Tabs>
            </div>
            <div className="bg-neutral-700 text-white text-black rounded-b overflow-auto max-h-[500px] overflow-x-auto">
                <table className="table-fixed min-w-full">
                    <thead>
                        <tr className="bg-neutral-800">
                            <th className="w-1/4 p-2">A</th>
                            <th className="w-1/4 p-2">B</th>
                            <th className="w-1/4 p-2">C</th>
                            <th className="w-1/4 p-2">D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2" colSpan={4}>
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="Jeff Wallin"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2" colSpan={4}>
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="PO Box 240"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2" colSpan={4}>
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="Imperial NE 69033"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2" colSpan={4} />
                        </tr>
                        <tr>
                            <td className="p-2" colSpan={4} />
                        </tr>
                        <tr>
                            <td className="p-2 font-semibold">Sold To:</td>
                            <td className="p-2 font-semibold">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="FVC"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2" colSpan={4} />
                        </tr>
                        <tr>
                            <td className="p-2" colSpan={4} />
                        </tr>
                        <tr className="bg-neutral-800 font-semibold">
                            <td className="p-2">Date</td>
                            <td className="p-2">Ticket</td>
                            <td className="p-2">Gross</td>
                            <td className="p-2">Tare</td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="05/20/2021"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="505348"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="91920"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="24920"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="05/20/2021"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="505346"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="92380"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="25000"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="05/20/2021"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="505344"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="96160"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="27240"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr className="font-semibold">
                            <td className="p-2">Totals</td>
                            <td className="p-2" />
                            <td className="p-2">280460</td>
                            <td className="p-2">77160</td>
                        </tr>
                        <tr>
                            <td className="p-2" colSpan={4} />
                        </tr>
                        <tr>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue="Acres"
                                    type="text"
                                />
                            </td>
                            <td className="p-2">
                                <input
                                    className="w-full bg-transparent border-transparent"
                                    defaultValue=""
                                    type="text"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-1 text-yellow-300">
                    <IconInformationCircle className="text-yellow-300 mr-1" />
                    <span>Click any field to edit</span>
                </div>
                <div className="flex space-x-4">
                    <button onClick={downloadTable}>
                        <IconDownload className="text-white" />
                    </button>
                    <button onClick={printTable}>
                        <IconPrinter className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function IconDownload(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    );
}

function IconInformationCircle(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="8" />
        </svg>
    );
}

function IconExclamationtriangle(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    );
}

function IconFileexcel(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M8 13h2" />
            <path d="M8 17h2" />
            <path d="M14 13h2" />
            <path d="M14 17h2" />
        </svg>
    );
}

function IconPrinter(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect width="12" height="8" x="6" y="14" />
        </svg>
    );
}
