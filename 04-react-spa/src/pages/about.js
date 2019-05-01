import React from 'react';
import queryString from 'query-string';
import { NavLink } from 'react-router-dom';
const About = ({ location, match }) => {
    const query = queryString.parse(location.search);
    return (
        <div>
            <h2>About {match.params.name}</h2>
        </div>
    );
};
export default About;