import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import Radio from "@material-ui/core/Radio";
// import Paper from "@material-ui/core/Paper";
import "./userSelect.css";

export default function UserSelect() {
  return (
    <div class="outer">
      <div class="middle">
        <div class="inner">
          <a href="https://www.google.com">
            <input type="button" value="Join Presentation" id="button1" />
          </a>
          <a href="https://www.youtube.com">
            <input type="button" value="Host a Poll" id="button2" />
          </a>
        </div>
      </div>
    </div>
  );
}
