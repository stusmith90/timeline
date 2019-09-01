import React from 'react';
import './App.css';
import { FaBatteryEmpty, FaBatteryFull, FaBatteryHalf, FaBatteryQuarter, FaBatteryThreeQuarters } from 'react-icons/fa';
import { IconContext } from "react-icons";
import styled from 'styled-components';
import Experience from './components/Experience'

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  display: flex;
  justify-content: center;
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

    this.state = {
      view: 0
    }
  }

  experienceDialog(e) {
    switch (e.target.className) {
      case "1-years":
        this.setState({
          view: 1
        })
        break;
      case "2-years":
        this.setState({
          view: 2
        })
        break;
      case "3-years":
        this.setState({
          view: 3
        })
        break;
      case "4-years":
        this.setState({
          view: 4
        })
        break;
      default:
    }
  }

  render() {
    return (
      <div>
        <h1>Experience</h1>
        <Wrapper>
          <IconContext.Provider value={{ className: "global-class-name", size: "5em" }}>
            <BatteryStyles>
              <FaBatteryQuarter />
              <TextStyles>
                <button className="1-years" onClick={this.experienceDialog}>1 years
                </button>
              </TextStyles>
            </BatteryStyles>
            <BatteryStyles>
              <FaBatteryHalf />
              <TextStyles>
                <button className="2-years" onClick={this.experienceDialog}>2 years
                </button>
              </TextStyles>
            </BatteryStyles>
            <BatteryStyles>
              <FaBatteryThreeQuarters />
              <TextStyles>
                <button className="3-years" onClick={this.experienceDialog}>3 years
                </button>
              </TextStyles>
            </BatteryStyles>
            <BatteryStyles>
              <FaBatteryFull />
              <TextStyles>
                <button className="4-years" onClick={this.experienceDialog}>4 years</button>
              </TextStyles>
            </BatteryStyles>
          </IconContext.Provider>
        </Wrapper>
        <Experience view={this.state.view} />
      </div>
    );
  }
}

export default App;
