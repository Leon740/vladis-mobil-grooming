import { useState, useRef, useEffect } from 'preact/hooks';
import { useWindowSize } from '@hooks/useWindowSize';
import { Icon } from '@components/global/Icon';
import { marked } from 'marked';

interface IFaqsItem {
  title: string;
  paragraph: string;
}

interface IFaqsProps {
  faqs: IFaqsItem[];
}

interface IFaqsItemProps {
  faq: IFaqsItem;
  isActive: boolean;
  handleClick?: () => void;
}

function FaqsItem({
  faq: { title, paragraph },
  isActive = false,
  handleClick = () => {}
}: IFaqsItemProps) {
  const toggleRef = useRef<HTMLDivElement>(null);
  const { width: windowWidth } = useWindowSize();

  const onClick = () => {
    handleClick();
    handleToggle();
  };

  const handleToggle = () => {
    console.log(isActive);
    if (toggleRef.current) {
      toggleRef.current.style.maxHeight = isActive ? `${toggleRef.current.scrollHeight}px` : '0';
    }
  };

  useEffect(() => {
    // handleToggle();
  }, [windowWidth]);

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`p-32 w-full flex flex-row items-center justify-between hover:text-sky-500 ${
          isActive ? 'text-sky-500' : ''
        }`}
      >
        <span className="text-ss3-20-bold text-left transition-all">{title}</span>
        <Icon
          icon="global_arrow"
          className={`text-20 transition-all ${isActive ? '-rotate-90' : 'rotate-90'}`}
        />
      </button>
      <div ref={toggleRef} className="overflow-hidden transition-all max-h-0">
        <div
          className="px-32 pb-32 text-ss3-20-regular leading-loose"
          dangerouslySetInnerHTML={{ __html: marked(paragraph) }}
        />
      </div>
    </>
  );
}

export function Faqs({ faqs }: IFaqsProps) {
  const [activeId, setActiveId] = useState<number | null>(0);

  return (
    <ul className="flex flex-col gap-32">
      {faqs.map((faq, index) => {
        const isActive = activeId === index;

        return (
          <li key={`FaqsItem_${index}`} className="bg-white rounded-16">
            <FaqsItem
              faq={faq}
              isActive={isActive}
              handleClick={() => {
                setActiveId(isActive ? -1 : index);
                console.log(activeId);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
