import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

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
  const [text, setText] = useState<string>('');
  const [char, setChar] = useState<string>('');

  const messageChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
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