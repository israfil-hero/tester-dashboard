import React from 'react';
import '../../sass/progressbar.scss';

const ProgressBar = ({progress}) => {

    const myprogressBar = {
        width: `${progress?.courseProgress}%`,
        height: `12px`,
        backgroundColor: `#3AC55A`,
        textAlign: `center`,
        lineHeight: `32px`,
        color: `$blackColor`,
        borderRadius: `10px`,
    }
    return (
        <div className="Progress_Status">
            <div style={myprogressBar}></div>
        </div>
    );
};

export default ProgressBar;