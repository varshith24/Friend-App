import React from 'react';
import { Card } from './Card';

export const Home = ({ darkMode, data }) => {
    return (
        <div className="row">
            {
                data ? data.map((e, l) => (
                    <div key={l} className="col-sm-3 mb-4">
                        <Card darkMode={darkMode} data={e} index={l} />
                    </div>
                )) : null
            }
        </div>
    );
};
