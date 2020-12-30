import { useCallback, useState } from "react";
import styled from "styled-components";

interface MessageProps {
  text?: string;
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

const Message: React.FC<MessageProps> = ({}) => {
  const [text, setText] = useState<string>();

  const messageChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    },
    []
  );

  return (
    <Textarea
      placeholder="Code to analize ..."
      onChange={messageChangeHandler}
      value={text}
    />
  );
};

export default Message;