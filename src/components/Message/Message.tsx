import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { initialFrequencies, Letters } from "../../App";

interface MessageProps {
  onType: (message: string) => void;
}

const Textarea = styled.textarea`
  width: 100%;
  padding: 20px;
  border: 1px solid #b9b9b9;
  border-radius: 15px;
  min-height: 300px;
  overflow-y: auto;
  resize: none;
  &:focus {
    border-radius: 15px;
    outline: none;
  }
`;

const Message: React.FC<MessageProps> = ({ onType }) => {
  const [text, setText] = useState<string>("");

  const messageChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      let sanitizedInput = event.target.value
        .toLowerCase()
        .trim()
        .split(" ")
        .join("");
      sanitizedInput = Array.from(sanitizedInput)
        .filter((c) => typeof initialFrequencies[c as Letters] !== "undefined")
        .join("");
      setText(sanitizedInput);
    },
    []
  );

  useEffect(() => {
    onType(text);
  }, [text, onType]);

  return (
    <Textarea
      placeholder="Code to analize ..."
      onChange={messageChangeHandler}
      value={text}
    />
  );
};

export default Message;
