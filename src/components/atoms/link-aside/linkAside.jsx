import React from 'react';
import './linkAside.scss';

function LinkAside({ texto }) {

    return (
        <div className="a-nav-link">
            <div className="a-aling">
                {texto}
            </div>
        </div>
    )
}
export default LinkAside; 