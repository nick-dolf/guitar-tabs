import React, { Component } from "react";
import Chord from "./chord";
import axios from "axios";

class Song extends Component {
  state = {
    chords: [
      [
        { string: 0, finger: 0 },
        { string: 2, finger: 1 },
        { string: 4, finger: 2 },
      ],
    ],
  };

  componentDidMount() {
    fetch("/api")
      .then((res) => res.json())
      .then((song) => this.setState({ chords: song }));
  }

  addChord = () => {
    this.setState((prev) => ({ chords: [...prev.chords, []] }));
  };

  deleteChord = () => {
    const chords = this.state.chords;
    chords.pop();
    this.setState({ chords });
  };

  increaseFret = (chord_num, string_num) => {
    let chords = [...this.state.chords];
    let chord = chords[chord_num];

    let index = chord.findIndex((s) => {
      return s.string === string_num;
    });

    if (index != -1) {
      chord[index].finger += 1;
      console.log(chord);
    } else {
      chord.push({ string: string_num, finger: 0 });
    }
    this.setState({ chords });
  };

  decreaseFret = (chord_num, string_num) => {
    let chords = [...this.state.chords];
    let chord = chords[chord_num];

    let index = chord.findIndex((s) => {
      return s.string === string_num;
    });

    if (index != -1) {
      if (chord[index].finger === 0) {
        chord.splice(index, 1);
      } else {
        chord[index].finger -= 1;
      }
      console.log(chord);
    }
    this.setState({ chords });
  };

  saveSong = () => {
    axios
      .post("/api", this.state.chords)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <button className="btn btn-primary m-2" onClick={this.saveSong}>
            Save
          </button>
          <button className="btn btn-primary m-2" onClick={this.addChord}>
            Add chord
          </button>
          <button className="btn btn-danger m-2" onClick={this.deleteChord}>
            Delete chord
          </button>
        </div>
        {this.state.chords.map((chord, index) => {
          return (
            <Chord
              key={index}
              strings={chord}
              chord_num={index}
              increaseFret={this.increaseFret}
              decreaseFret={this.decreaseFret}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Song;
