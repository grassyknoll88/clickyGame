import React, { Component } from "react";

import FadeIn from "./transitions/fade-in";
import CharacterBox from "./characterBox";
import ScoreDisplay from "./scoredisplay";

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const initialChars = [
  {
    name: "Angelica Pickles",
    img: "img/squares/Angelica_Pickles.png",
    clicked: false
  },
  {
    name: "Charles Finster",
    img: "img/square/Charles_Finster.png",
    clicked: false
  },
  {
    name: "Didi Pickles",
    img: "img/squares/Didi_Pickles.png",
    clicked: false
  },
  {
    name: "Dil Pickles",
    img: "img/squares/dil_pickles.png",
    clicked: false
  },
  {
    name: "Kimi Finster",
    img: "img/squares/Kimi_Finster.png",
    clicked: false
  },
  {
    name: "Lil DeVille",
    img: "img/squares/Lil_DeVille.png",
    clicked: false
  },
  {
    name: "Phil DeVille",
    img: "img/squares/Phil_DeVille.png",
    clicked: false
  },
  {
    name: "Stu Pickles",
    img: "img/squares/stu_pickles.jpg",
    clicked: false
  },
  {
    name: "Susie Carmichael",
    img: "img/squares/susie_carmichael.jpg",
    clicked: false
  },
  {
    name: "Tommy Pickles",
    img: "img/squares/tommy_pickles.png",
    clicked: false
  }
];

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        score: 0
      },
      characters: shuffleArray(initialChars)
    };
  }

  onCharacterClick = index => {
    if (!this.state.characters[index].clicked) {
      this.setState({
        characters: shuffleArray(
          this.state.characters.map((character, current) => {
            return current === index
              ? { ...character, clicked: true }
              : character;
          })
        ),
        user: {
          ...this.state.user,
          score: this.state.user.score + 1
        }
      });
      //and shuffle
    } else {
      this.setState({
        characters: shuffleArray(
          this.state.characters.map(character => {
            return { ...character, clicked: false };
          })
        ),
        user: {
          ...this.state.user,
          score: 0
        }
      });
      //and shuffle
    }
  };

  render() {
    return (
      <div className="Body">
        <FadeIn
          in={true}
          duration={450}
          length={"30px"}
          direction={"bottom"}
          delay={"1s"}
        >
          <h4>
            Try to click on every Rugrat once! After you click a character the
            cards will shuffle.<br />Try not to click the same character twice
            or the game will restart!
          </h4>
        </FadeIn>
        <FadeIn in={true} duration={500} direction={"bottom"} delay={"1.5s"}>
          <ScoreDisplay score={this.state.user.score} />
        </FadeIn>
        <CharacterBox
          characters={this.state.characters}
          onCharacterClick={this.onCharacterClick}
        />
      </div>
    );
  }
}
