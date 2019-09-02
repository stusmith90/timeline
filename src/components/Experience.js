import React from 'react';
import PropTypes from 'prop-types';
import { data } from '../data';
import styled from 'styled-components';

const ExperienceTitle = styled.section`
  font-size:30px;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  padding: 1em;
`;

const Experience = props => {
    switch (props.view) {
        case 1:
            return (
                <div>
                    <ExperienceTitle>
                        <p dangerouslySetInnerHTML={{ __html: data[1].title }}></p>
                    </ExperienceTitle>
                    <p dangerouslySetInnerHTML={{ __html: data[1].description }}></p>

                </div>
            );
        case 2:
            return (
                <div>
                    <ExperienceTitle>
                        <p dangerouslySetInnerHTML={{ __html: data[2].title }}></p>
                    </ExperienceTitle>
                    <p dangerouslySetInnerHTML={{ __html: data[2].description }}></p>

                </div>
            );
        case 3:
            return (
                <div>
                    <ExperienceTitle>
                        <p dangerouslySetInnerHTML={{ __html: data[3].title }}></p>
                    </ExperienceTitle>
                    <p dangerouslySetInnerHTML={{ __html: data[3].description }}></p>
                </div>
            );
        case 4:
            return (
                <div>
                    <ExperienceTitle>
                        <p dangerouslySetInnerHTML={{ __html: data[4].title }}></p>
                    </ExperienceTitle>
                    <p dangerouslySetInnerHTML={{ __html: data[4].description }}></p>
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