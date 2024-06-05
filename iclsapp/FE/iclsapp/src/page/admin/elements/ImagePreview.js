import React from 'react';

const ImagePreview = (props) => {
    return (
        <>
            <div className="col-sm-5 div-privew-img">
                <div>
                    <img id='img-upload' alt='' src={props.file}/>
                </div>
            </div>
        </>
    );
}

export default ImagePreview;
