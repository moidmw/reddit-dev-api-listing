import React from 'react';

// COMPONENT

const LoadingIndicator = () => (
    <div>
        {
            <div
                style={{
                    top: '50%',
                    left: '50%',
                    textAlign: 'center',
                    color: '#FF4500',
                    position: 'absolute',
                    transform: 'translate(-50%, 0)'
                }}>
                <i className="fa fa-spinner fa-pulse fa-4x fa-fw" />
            </div>
        }
    </div>
);

// CONFIGURE COMPONENT PROP TYPES


// EXPORT COMPONENT

export { LoadingIndicator };
