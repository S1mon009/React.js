import { useState } from "react";
import Accordion from "./accordion/accordion";
import "./accordionContainer.scss";
const AccordionContainer = () => {
  const [activeAccordion, setActiveAccordion] = useState();

  const accordionsData = [
    {
      title: "React.js",
      content:
        "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    },
    {
      title: "Sass",
      content:
        "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml. It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, SCSS (Sassy CSS), uses block formatting like that of CSS.",
    },
  ];

  const onHandleActive = (index) => {
    activeAccordion === index
      ? setActiveAccordion()
      : setActiveAccordion(index);
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column accordion-container">
      {accordionsData.map((accordion, index) => {
        return (
          <Accordion
            accordion={accordion}
            accordionIndex={index}
            activeIndex={activeAccordion}
            onClick={onHandleActive}
          />
        );
      })}
    </div>
  );
};

export default AccordionContainer;
