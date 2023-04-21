import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";


function Spinner({loading}) {
 
  let [color, setColor] = useState("#000000");

  return (
    <div className="sweet-loading">
    
      <ClipLoader
        color={color}
        loading={loading}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;