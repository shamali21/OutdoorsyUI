import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const styles ={
  color: 'black',
  fontSize: '15px',
  paddingRight: '20px'
}
const options = [
  "All",
  "outdoors",
  "night time",
  "museum",
  "indoor",
  "cheap",
  "grade schoolers",
  "preschoolers",
  "art",
  "music",
  "science",
  "athletics",
  "virtual",
  "food",
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "All",
      courses: [],
      course: "",
    };
  }
  componentDidMount() {
    const courses = require("../data/eventData.json");
    this.setState({ courses: courses });
  }
  filterEvents = () => {
    const { courses, value } = this.state;
    if (value === "All") {
      return courses;
    } else {
      const filteredCourses = courses.filter((course) => {
        return course.tags.includes(value);
      });
      return filteredCourses;
    }
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value }, function () {
      this.filterEvents();
    });
  };

  render() {
    return (
      <div>
        <label className="right" style={styles}>
          Select Filter Options:
          <Select
            labelId="demo-simple-select-label"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {options.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </label>
        <h4 className="center blue-text" style={{fontSize:'20px', paddingRight:'800px'}}>Amazing things happen when you distance yourself from the screen!</h4>
        {this.filterEvents().map((event, index) => {
          return (
            <div className="post card center" key={index}>
              <img
                src={event.image_name}
                width="300"
                height="200"
                alt="logo"
              ></img>
              <div className="card-content">
                <span className="card-title blue-text ">{event.event_name}</span>
                <p >{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Home;
