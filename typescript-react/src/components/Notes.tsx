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

/** List of TypeScript types you will likely use in a React+TypeScript app */
type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** Array of a type */
  names: string[];
  /** String literals to specify exact string values, with a union type to join them together*/
  status: "watiing" | "success";
  /** Any object as long as you don't use its properties (NOT COMMON but useful as a placehoder) */
  obj: object;
  obj2: {}; // Almost the same as `object`, exactly the same as `Object`
  /** An object with any number of properties (PREFERRED) */
  obj3: {
    id: string;
    title: string;
  };
  /** Array of objects (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  /** A dictionary object with any number of properties of the same type */
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // equivalent to dict1
  /** Any function as long as you don't invoke it (NOT RECOMMENDED) */
  onSomething: Function;
  /** Function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** Function with named prop (VERY COMMON) */
  onChange: (id: number) => void;
  /** Alternative function type syntax that takes an event (VERY COMMON) */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** An optional prop (VERY COMMON) */
  optional?: OptionalType;
};

/** React Prop Types */
export declare interface ReactPropTypes {
  children1: JSX.Element; // Bad, doesn't account for arrays
  children2: JSX.Element | JSX.Element[]; // Doesn't accept strings
  children3: React.ReactChildren; // Despite the name, not at all an appropriate type. It is a utility
  children4: React.ReactChild[]; // Better
  children: React.ReactNode; // Best, accepts everything
  functionChildren: (name: string) => React.ReactNode; // Recommended function as a child render prop type
  style?: React.CSSProperties; // To pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // Form events. The generic parameter is the type of event.target
  props: Props & React.ComponentPropsWithoutRef<"button">; // To impersonate all the props of a button element and explicity not forwarding its ref
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // To impersonate all the props of MyButtonForwardedRef and explicity forwarding its ref
}

/**
 * JSX.Element vs React.ReactNode
 * A more technical explanation is that valid React node is not the same thing as
 * what is return by React.createElement. Regardless of what component ends up rendering,
 * React.createElementg always returns an object, which is the JSX.Elementg interface, but
 * React.ReactNode is the set of all possible retgurn values of a component.
 * 
 * JSX.Element -> Return value of React.createElement
 * React.ReactNode -> Return value of a component
 */

 /**
  * Types or Interfaces
  * Always use interface for public API's definition when authoring a library or 3rd party
  * ambient type definitions, as this allows a consumer to extend them via declaration merging
  * if some definitions are missing.
  * 
  * Consider using type for your React Component Props and State, for consistency and because it is more constrained.
  * 
  * Types are more useful for union types (e.g. type MyType = TypeA | TypeB) whereas Interfaces are better
  * for declaring dictionary shapes and then implementing or extending them.
  * 
  *         Aspect	                                  Type	  Interface
  * Can describe functions                            ✅	       ✅
  * Can describe constructors                         ✅	       ✅
  * Can describe tuples                               ✅	       ✅
  * Interfaces can extend it                          ⚠️	      ✅
  * Classes can extend it	                            🚫	      ✅
  * Classes can implement it (implements)             ⚠️	      ✅
  * Can intersect another one of its kind	            ✅	       ⚠️
  * Can create a union with another one of its kind	  ✅	       🚫
  * Can be used to create mapped types	              ✅	       🚫
  * Can be mapped over with mapped types	            ✅	       ✅
  * Expands in error messages and logs	              ✅	       🚫
  * Can be augmented                                  🚫	      ✅
  * Can be recursive	                                ⚠️	      ✅
  * 
  * ⚠️ In some cases
  * (source: https://twitter.com/karoljmajewski/status/1082413696075382785)
  */

  /**
   * Forms and Events
   * 
   */

export default Heading;
