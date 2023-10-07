import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
        `
    }
    padding: 16px;
    font-size: 16px;
    font-family: "NotoSansKR-Regular", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    line-height: 20px;
    border: 1px solid #ccc;
    
    &:focus {
        outline: none;
    }
`;

function TextInput(props) {
    const { placeholder, height, value, onChange } = props;

    return <StyledTextarea placeholder={placeholder} height={height} value={value} onChange={onChange} />;
}

export default TextInput;