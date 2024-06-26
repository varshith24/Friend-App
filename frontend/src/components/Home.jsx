import React from 'react';
import { Card } from './Card';

export const Home = ({ darkMode, data }) => {
    return (
        <div
            className={`row bg-${darkMode ? "dark" : "light"} text-${!darkMode ? "dark" : "light"}`}
            style={{ width: "100%", minHeight: "100vh", margin: 0 }}
        >
            {data ? data.map((e, l) => (
                <div key={l} className="col-sm-3 mb-4">
                    <Card darkMode={darkMode} data={e} index={l} />
                </div>
            )) : <p>Loading..</p>}
        </div>
    );
};
