import React, { useEffect, useState } from 'react';
import { Card } from './Card';
const data =
    [
        {
            "id": 1,
            "name": "John Doe",
            "role": "Developer",
            "description": "Experienced full-stack developer.",
            "gender": "male",
            "img_url": "http://example.com/images/john_doe.jpg"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "role": "Designer",
            "description": "Creative graphic designer with 5 years of experience.",
            "gender": "female",
            "img_url": "http://example.com/images/jane_smith.jpg"
        },
        {
            "id": 3,
            "name": "Alice Johnson",
            "role": "Product Manager",
            "description": "Skilled product manager leading agile teams.",
            "gender": "female",
            "img_url": "http://example.com/images/alice_johnson.jpg"
        },
        {
            "id": 4,
            "name": "Bob Brown",
            "role": "Tester",
            "description": "QA tester with a keen eye for detail.",
            "gender": "male",
            "img_url": "http://example.com/images/bob_brown.jpg"
        },
        {
            "id": 5,
            "name": "Charlie Davis",
            "role": "DevOps Engineer",
            "description": "DevOps engineer specializing in CI/CD pipelines.",
            "gender": "male",
            "img_url": "http://example.com/images/charlie_davis.jpg"
        },
        {
            "id": 6,
            "name": "Eve Martin",
            "role": "Data Scientist",
            "description": "Data scientist with expertise in machine learning.",
            "gender": "female",
            "img_url": "http://example.com/images/eve_martin.jpg"
        },
        {
            "id": 7,
            "name": "Frank Green",
            "role": "Systems Analyst",
            "description": "Systems analyst with a background in IT infrastructure.",
            "gender": "male",
            "img_url": "http://example.com/images/frank_green.jpg"
        },
        {
            "id": 8,
            "name": "Grace Lee",
            "role": "Marketing Specialist",
            "description": "Marketing specialist focused on digital campaigns.",
            "gender": "female",
            "img_url": "http://example.com/images/grace_lee.jpg"
        },
        {
            "id": 9,
            "name": "Henry White",
            "role": "HR Manager",
            "description": "HR manager with a passion for employee development.",
            "gender": "male",
            "img_url": "http://example.com/images/henry_white.jpg"
        },
        {
            "id": 10,
            "name": "Ivy King",
            "role": "Content Writer",
            "description": "Content writer with a knack for storytelling.",
            "gender": "female",
            "img_url": "http://example.com/images/ivy_king.jpg"
        }
    ]
export const Home = ({ darkMode }) => {

    return (
        <div className="row">
            {
                data ? data.map((e, l) => (
                    <div key={l} className="col-sm-3 mb-4">
                        <Card darkMode={darkMode} data={e} />
                    </div>
                )) : null
            }
        </div>
    );
};
