import React, { ReactElement } from "react";

interface Props {
  onClick: () => void;
  label: string;
}

export function Button({ onClick, label }: Props): ReactElement {
  return (
    <button onClick={onClick} type="submit">
      {label}
    </button>
  );
}
