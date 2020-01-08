import React from "react";
import "./Header.css";

const Header = props => {
  const handlePopupData = () => {
    const obj = props.postData;
    props.onPopupChange(obj);
  };

  return (
    <div className="Dashboard">
      <h1 class="h2">Dashboard</h1>
      <div className="ButtonToolbar">
        <div className="ButtonGroup">
          <button variant="primary" onClick={() => handlePopupData()}>
            New Post
          </button>
          <button type="button" className="ExportButton">
            Export
          </button>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary dropdown-toggle"
        >
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
    </div>
  );
};

export default Header;
