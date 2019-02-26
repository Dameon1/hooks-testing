import React from "react";

class LiveDate extends React.Component {
  render() {
    return this.props.children({
      date: new Date().toLocaleString() || "loading..."
    });
  }
}

const LiveDateDisplay = () => (
  <div style={{textAlign:"center"}}>
    <p>Date and Time :</p>
    <p>
      <LiveDate>{liveDate => liveDate.date}</LiveDate>
    </p>
  </div>
);

export default LiveDateDisplay;
