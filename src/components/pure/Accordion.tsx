/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useRef, useEffect, ReactElement, createContext, useContext } from 'react';
import { useWindowSize } from './hooks/useWindowSize';

interface AccordionContextI {
  activeId: number;
  // eslint-disable-next-line no-unused-vars
  setActiveId: (id: number) => void;
}
const AccordionContext = createContext<AccordionContextI>({ activeId: 0, setActiveId: () => {} });

interface AccordionItemContextI {
  id: number;
  isActive: boolean;
}
const AccordionItemContext = createContext<AccordionItemContextI>({ id: 0, isActive: false });

interface AccordionHeaderPropsI {
  children: ReactElement | string;
  className?: string;
}
export function AccordionHeader({ children, className = '' }: AccordionHeaderPropsI) {
  const { setActiveId } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);
  const { isActive } = useContext(AccordionItemContext);

  return (
    <button
      type="button"
      onClick={() => (isActive ? setActiveId(-1) : setActiveId(id))}
      className={className}
      style={{ width: '100%' }}
    >
      {children}
    </button>
  );
}

interface AccordionBodyPropsI {
  children: ReactElement | string;
}
export function AccordionBody({ children }: AccordionBodyPropsI) {
  const ref = useRef<HTMLDivElement>(null);
  const { isActive } = useContext(AccordionItemContext);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.maxHeight = isActive ? `${ref.current.scrollHeight}px` : `0px`;
    }
  }, [isActive, windowSize]);

  return (
    <div ref={ref} style={{ overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
      {children}
    </div>
  );
}

interface AccordionItemPropsI {
  id: number;
  // eslint-disable-next-line no-unused-vars
  render: (isActive: boolean) => ReactElement;
}
export function AccordionItem({ id, render }: AccordionItemPropsI) {
  const { activeId } = useContext(AccordionContext);
  const isActive = activeId === id;

  return (
    <AccordionItemContext.Provider value={{ id, isActive }}>
      {render(isActive)}
    </AccordionItemContext.Provider>
  );
}

interface AccordionPropsI {
  defaultActiveId?: number;
  children: ReactElement | string;
}
export function Accordion({ defaultActiveId, children }: AccordionPropsI) {
  const [activeId, setActiveId] = useState<number>(defaultActiveId || -1);

  return (
    <AccordionContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </AccordionContext.Provider>
  );
}

export function AccordionConsumer() {
  interface AccordionItemI {
    header: string;
    body: string;
  }

  const DATA: AccordionItemI[] = [
    {
      header: 'Audi',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam facilis, voluptate qui consequuntur eligendi?'
    },
    {
      header: 'BMW',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam facilis, voluptate qui consequuntur eligendi?'
    },
    {
      header: 'Mercedes',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam facilis, voluptate qui consequuntur eligendi?'
    },
    {
      header: 'Lancer Evo',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam facilis, voluptate qui consequuntur eligendi?'
    },
    {
      header: 'Toyota Supra',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam facilis, voluptate qui consequuntur eligendi?'
    }
  ];

  return (
    <Accordion>
      {DATA.map(({ header, body }: AccordionItemI, index) => (
        <AccordionItem
          key={index}
          id={index}
          render={(isActive) => (
            <>
              <AccordionHeader>
                <span className={`${isActive ? 'text-red-500' : ''}`}>{header}</span>
              </AccordionHeader>
              <AccordionBody>
                <span className="">{body}</span>
              </AccordionBody>
            </>
          )}
        />
      ))}
    </Accordion>
  );
}
