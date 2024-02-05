'use client'
import { CloudUploadOutlined } from '@ant-design/icons';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

export default function Cloudinary() {
    let image_urls = []
    // Function to be called when the user is done uploading
    function userDoneUploading() {
        // Step 1: User indicates completion (e.g., by clicking a "Done" button)
        // Step 2: Send the URLs to your API
        fetch('/api/python/snapscale', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ images: image_urls }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data)
                // call the api
                // Send images to Google Cloud Vision API
                // Parse text into React Spreadsheet
            })
            .catch((error) => console.error('Error:', error));
    }

    const successCallBack = (result) => {
        console.log('Upload Done!');
        console.log(result);
        image_urls.push(result.info.url);
        if (image_urls.length > 0) {
            document.getElementById('doneButton').classList.remove('hidden');
            document.getElementById('doneButton').addEventListener('click', userDoneUploading);
        }
    }
    const failureCallBack = (response) => {
        console.log('Upload Failed!');
    }
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <WidgetLoader />
                <Widget
                    sources={['local', 'camera']} // set the sources available for uploading -> by default
                    // all sources are available. More information on their use can be found at
                    // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
                    // and ID's as an object. More information on their use can be found at
                    // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
                    resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
                    cloudName={'dab9joh7p'} // your cloudinary account cloud name.
                    // Located on https://cloudinary.com/console/
                    uploadPreset={'wallinfarms'} // check that an upload preset exists and check mode is signed or unisgned
                    buttonText={
                        <div className='flex items-center justify-center'>Upload Photos &nbsp; <CloudUploadOutlined className='text-xl/[0]' /></div>
                    }
                    // default 'Upload Files'
                    style={{
                        color: 'black',
                        border: 'none',
                        width: '240px',
                        backgroundColor: '#FFED48',
                        borderRadius: '0.25rem',
                        height: '40px',
                        margin: '1rem',
                    }} // inline styling only or style id='cloudinary_upload_button'
                    folder={'wallinfarms'} // set cloudinary folder name to send file
                    cropping={false} // set ability to crop images -> default = true
                    // cropping only allows 1 image to be uploaded at a time
                    // https://support.cloudinary.com/hc/en-us/articles/203062071-How-to-crop-images-via-the-Upload-Widget-#:~:text=Click%20on%20the%20%22Edit%22%20link,OK%22%20and%20Save%20the%20changes.
                    // more information here on cropping. Coordinates are returned or upload preset needs changing
                    multiple={true} // set to false as default. Allows multiple file uploading
                    // will only allow 1 file to be uploaded if cropping set to true
                    autoClose={true} // will close the widget after success. Default true
                    onSuccess={successCallBack} // add success callback -> returns result
                    onFailure={failureCallBack} // add failure callback -> returns 'response.error' + 'response.result'
                    logging={false} // logs will be provided for success and failure messages,
                    // set to false for production -> default = true
                    //customPublicId={'sample'} // set a specific custom public_id.
                    // To use the file name as the public_id use 'use_filename={true}' parameter
                    //eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
                    use_filename={false} // tell Cloudinary to use the original name of the uploaded
                    // file as its public ID -> default = true,
                    widgetStyles={{
                        palette: {
                            window: "#000000",
                            windowBorder: "#262626",
                            tabIcon: "#FFED48",
                            menuIcons: "#5A616A",
                            textDark: "#000000",
                            textLight: "#FFFFFF",
                            link: "#FFED48",
                            action: "#FFED48",
                            inactiveTabIcon: "#776311",
                            error: "#F44235",
                            inProgress: "#FFED48",
                            complete: "#20B832",
                            sourceBg: "#000000"
                        },
                        frame: {
                            background: "rgb(68 68 68 / 50%)"
                        },
                        fonts: {
                            default: null,
                            "sans-serif": {
                                url: null,
                                active: true
                            }
                        }
                    }} // ability to customise the style of the widget uploader
                />
                <button
                    id="doneButton"
                    className="hidden px-6 py-2 m-4 text-white bg-black border-2 rounded hover:shadow-xl hover:bg-white hover:text-black hover:border-black focus:shadow-400 focus:outline-none"
                >
                    <div className="flex items-center justify-center">
                        Continue
                    </div>
                </button>
            </div>
        </>
    )
}