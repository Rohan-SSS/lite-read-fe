import React, { useContext } from "react";
import { StoryContext } from "../StoryProvider";

const Text = () => {
  const storyFromContext = useContext(StoryContext).story;

  return (
    <div
      className="text-container"
      dangerouslySetInnerHTML={{ __html: storyFromContext }}
    />
  );
};

export default Text;
