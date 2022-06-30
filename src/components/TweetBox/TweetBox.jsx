import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  return (
    <div className="tweet-box">
      <TweetInput />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  const { tweetText, charactersLeft } = props;
  const className = tweetText.length > 0 ? "red" : "";
  return (
    <span className={`tweet-length ${className}`}>
      {tweetText.length > 0 ? charactersLeft : ""}
    </span>
  );
}

export function TweetSubmitButton() {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button">Tweet</button>
    </div>
  );
}
