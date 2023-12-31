import React, { useState } from "react";

const Accordion = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpanded}>
        Header <span>{expanded ? "-" : "+"}</span>
      </button>
      {expanded && <div>Content</div>}
    </div>
  );
};

export default Accordion;
