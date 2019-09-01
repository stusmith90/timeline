import React from 'react';
import PropTypes from 'prop-types';
import { data } from '../data';

const Experience = props => {
    switch (props.view) {
        case 1:
            return (
                <div>
                    {data[1].title}
                </div>
            );
        case 2:
            return (
                <div>
                    {data[2].title}
                </div>
            );
        case 3:
            return (
                <div>
                    {data[3].title}
                </div>
            );
        case 4:
            return (
                <div>
                    {data[4].title}
                </div>
            );
        default:
            return (
                <div>
                </div>
            );

    }
};

Experience.propTypes = {

};

export default Experience;