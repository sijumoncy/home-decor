import React from "react";

function LoaderLine({
  primaryColor = "#1f1f1f",
  secondaryColor = "#a0a59e",
  text,
}: {
  primaryColor?: string;
  secondaryColor?:string;
  text?: string;
}) {

  const styles = {
    '--primary-color' :primaryColor,
    '--secondary-color' :secondaryColor,
  } as React.CSSProperties ;

  return (
    <div className="loader" style={styles}>
      <span className="loader-text">loading</span>
      <span className="load"></span>
    </div>
  );
}

export default LoaderLine;
