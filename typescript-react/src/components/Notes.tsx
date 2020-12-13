import React from "react";

interface Props {
  name: string;
  color: string;
}

type OtherProps = {
  name: string;
  color: string;
};

/**
 * Written as function declaration.
 * Returns React.Node
 *
 * Props: always use interface for public API's definition when
 *        authoring a library or 3rd-party ambient type definitions.
 */
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>;
}

// or

/**
 * Written as function expression.
 * Returns a function
 *
 * Props: Consider using a tpye for your React Component Props and State,
 *        because it is more constrained.
 */
const OtherHeading: React.FC<OtherProps> = ({ name, color }) => (
  <h1>My Website Heading</h1>
);

// Practical example
type PracticalProps = {
  /** color to use for the background */
  color?: string; // ? Indicates optional
  /** standard children prop: accepts any valid React Node */
  children: React.ReactNode;
  /** callback function passed to the onClick handler*/
  onClick: () => void;
};

const Button: React.FC<PracticalProps> = ({
  children,
  color = "tomato",
  onClick,
}) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
};

// Hooks

// Extending Component Props
type ButtonProps = {
  /** the background color of the button */
  color: string;
  /** the text to show inside the button */
  text: string;
};

type ContainerProps = ButtonProps & {
  /** the height of the container (value used with 'px') */
  height: number;
};

// or using interface

interface OtherButtonProps {
  /** the background color of the button */
  color: string;
  /** the text to show inside the button */
  text: string;
}

interface OtherContainerProps extends OtherButtonProps {
  /** the height of the container (value used with 'px') */
  height: number;
}

export default Heading;
