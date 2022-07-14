import React, { Component } from "react";
import Chord from "./chord";
import axios from "axios";
import TimeSignature from "./timeSignature";

class Song extends Component {
  state = {
    song: {
      name: "",
      time: { upper: 4, lower: 4 },
      chords: [],
    },
  };

  componentDidMount() {
    fetch("/api")
      .then((res) => res.json())
      .then((song) => {
        this.setState({ song });
      });
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

  handleUpper = () => {
    let time = this.state.song.time;

    time.upper = time.upper + 1;
    if (time.upper > 4) time.upper = 1;
    this.setState({ time });
  };

  handleLower = () => {
    let time = this.state.song.time;

    time.lower = time.lower + 1;
    if (time.lower > 4) time.lower = 1;
    this.setState({ time });
  };

  saveSong = () => {
    axios
      .post("/api", this.state.song)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { song } = this.state;

    return (
      <React.Fragment>
        <h1>{song.name}</h1>
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
        <TimeSignature
          onUpper={this.handleUpper}
          onLower={this.handleLower}
          upper={song.time.upper}
          lower={song.time.lower}
        />
        {song.chords.map((chord, index) => {
          return (
            <Chord
              key={index}
              strings={chord}
              chord_num={index}
              increaseFret={this.increaseFret}
              decreaseFret={this.decreaseFret}
              measurePos={index % song.time.upper}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Song;
