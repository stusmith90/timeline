import React from 'react';
import './App.css';
import { FaBatteryEmpty, FaBatteryFull, FaBatteryHalf, FaBatteryQuarter, FaBatteryThreeQuarters } from 'react-icons/fa';
import { IconContext } from "react-icons";
import styled from 'styled-components';
import { data } from './data';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  display: flex;
  justify-content: center;
`;

const ExperienceStyles = styled.h1`
  text-align:center;
  font-size:20px;  
`;

const BatteryStyles = styled.section`
  padding: 4em;
`;
const TextStyles = styled.div`
  margin-left:10px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.experienceDialog = this.experienceDialog.bind(this);
  }
  
  experienceDialog(e){
  console.log("hi");
  }
  render(){
    return (
    <div>
      <h1>Experience</h1>
      <Wrapper>
        <IconContext.Provider value={{ className: "global-class-name", size: "5em" }}>
          <BatteryStyles>
            <FaBatteryEmpty /> <TextStyles><button onClick={this.experienceDialog}>0 years</button></TextStyles>
          </BatteryStyles>
          <BatteryStyles>
            <FaBatteryQuarter /> <TextStyles>1 years</TextStyles>
          </BatteryStyles>
          <BatteryStyles>
            <FaBatteryHalf /> <TextStyles>2 years</TextStyles>
          </BatteryStyles>
          <BatteryStyles>
            <FaBatteryThreeQuarters /> <TextStyles>3 years</TextStyles>
          </BatteryStyles>
          <BatteryStyles>
            <FaBatteryFull /> <TextStyles>4 years</TextStyles>
          </BatteryStyles>
        </IconContext.Provider>
      </Wrapper>
    </div>
  );
  }
}

export default App;
