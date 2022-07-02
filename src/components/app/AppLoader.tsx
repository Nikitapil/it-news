import React from "react";

export const AppLoader = () => {
  return (
    <div className="lds-grid" data-testid='loader'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
