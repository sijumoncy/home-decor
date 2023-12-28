import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface IErrorField {
  cssColor?: string;
  fontSize?: string;
  errorText: string;
  explanation?: string;
}

function ErrorField({
  errorText,
  explanation,
  cssColor = "#dc3545",
  fontSize = "12px",
}: IErrorField) {
  return (
    <div className="error-field">
      <span style={{ color: cssColor, fontSize: fontSize, fontWeight: "500" }}>
        {errorText}
      </span>
      {explanation && (
        <IoMdInformationCircleOutline
          className="info-icon"
          title={explanation}
        />
      )}
    </div>
  );
}

export default ErrorField;
