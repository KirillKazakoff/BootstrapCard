/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    padding: 15px;
    background-color: white;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default function Card({ children }) {
    return <StyledCard>{children}</StyledCard>;
}
