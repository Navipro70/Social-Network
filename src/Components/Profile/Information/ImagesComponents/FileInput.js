import React from "react";
import "./FileInput.css";

const FileInput = ({onChanger}) => {
    return (
        <div>
            <input type="file" name="fileInput" id="fileInput" onChange={onChanger}/>
            <label htmlFor="fileInput" id="fileLabel"> Choose a file </label>
        </div>
    )
};

export default FileInput;
