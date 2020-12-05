import React from "react";
import "../styles/toolbar.scss";
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import Rectangle from "../tools/Rectangle";
import Circle from "../tools/Circle";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
      />
      <button
        className="toolbar__btn square"
        onClick={() => toolState.setTool(new Rectangle(canvasState.canvas))}
      />
      <button
        className="toolbar__btn circle"
        onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
      />
      <button className="toolbar__btn eraser" />
      <button className="toolbar__btn line" />
      <input type="color" style={{ marginLeft: 10 }} />
      <button className="toolbar__btn undo" />
      <button className="toolbar__btn next" />
      <button className="toolbar__btn save" />
    </div>
  );
};

export default Toolbar;
