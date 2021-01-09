import React from "react";
import toolState from "../store/toolState";

const SettingBar = () => {
  return (
    <div className="toolbar toolbar--setting">
      <label htmlFor="line-width">Толщина линии</label>
      <input
        id="line-width"
        type="number"
        style={{ margin: "0 10px" }}
        onChange={({ target }) => toolState.setLineWidth(target.value)}
        defaultValue={1}
        min={1}
        max={50}
      />
      <label htmlFor="stroke-color">Цвет обводки</label>
      <input
        id="stroke-color"
        type="color"
        onChange={({ target }) => toolState.setStrokeColor(target.value)}
      />
    </div>
  );
};

export default SettingBar;
