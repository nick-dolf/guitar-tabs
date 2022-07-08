import React, { Component } from "react";
import Chord from "./chord";

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

  render() {
    return (
      <React.Fragment>
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
          console.log(chord);
        })}
        <button onClick={this.addChord}>Add chord</button>
      </React.Fragment>
    );
  }
}

export default Song;
