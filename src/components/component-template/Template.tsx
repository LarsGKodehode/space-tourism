import { useState } from 'react';

interface Props {
  /**
   * Element to expand from
   */
  title: string;
  children: React.ReactNode;
}

/**
 * Accordion component
 */
export function sum(a: number, b: number) {
  return a + b;
}

/**
 * Simple accordion working as a template for new components
 */
export default function TemplateComponent({ title, children }: Props) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((oldState) => !oldState);
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={toggleShow}>{show ? 'Hide' : 'Show'}</button>
      {show && <div>{children}</div>}
    </div>
  );
}
