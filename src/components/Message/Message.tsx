import styled from "styled-components";

interface MessageProps {
    text?: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
    const TextField = styled.div`
        width: 100%;
        padding: 20px;
        border: 1px solid #b9b9b9;
        border-radius: 15px;
        min-height: 200px;
        max-height: 400px;
        overflow-y: auto;
        &:focus {
            border-radius: 15px;
            outline: none;
        }
    `;
    const Placeholder = styled.span`
        font-style: italic;
        color: #444;
    `;

    return (
        <TextField contentEditable>
            {text ?? <Placeholder>Code to analyze ...</Placeholder>}
        </TextField>
    );
};

export default Message;