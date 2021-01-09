import React from "react";
import "../styles/toolbar.scss";
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import Rectangle from "../tools/Rectangle";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import Eraser from "../tools/Eraser";

const Toolbar = () => {
  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };

  const downloadHandler = () => {
    const dataUrl = canvasState.canvas.toDataURL();
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = canvasState.sessionId + ".jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() =>
          toolState.setTool(
            new Brush(
              canvasState.canvas,
              canvasState.socket,
              canvasState.sessionId
            )
          )
        }
      />
      <button
        className="toolbar__btn square"
        onClick={() =>
          toolState.setTool(
            new Rectangle(
              canvasState.canvas,
              canvasState.socket,
              canvasState.sessionId
            )
          )
        }
      />
      <button
        className="toolbar__btn circle"
        onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
      />
      <button
        className="toolbar__btn line"
        onClick={() => toolState.setTool(new Line(canvasState.canvas))}
      />
      <button
        className="toolbar__btn eraser"
        onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
      />
      <input
        type="color"
        style={{ marginLeft: 10 }}
        onChange={(e) => changeColor(e)}
      />
      <button
        className="toolbar__btn undo"
        onClick={() => canvasState.undo()}
      />
      <button
        className="toolbar__btn next"
        onClick={() => canvasState.redo()}
      />
      <button className="toolbar__btn save" onClick={() => downloadHandler()} />
    </div>
  );
};

export default Toolbar;
