import React from "react";
import "../styles/toolbar.scss";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button className="toolbar__btn brush" />
      <button className="toolbar__btn square" />
      <button className="toolbar__btn circle" />
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
