import React from 'react';
import styled from 'styled-components';

const StyledCardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default function CardBody({ title, text }) {
    return (
        <StyledCardBody>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{text}</p>

            <a
                href='/#'
                className='btn btn-primary'
            >
                Go somewhere
            </a>
        </StyledCardBody>
    );
}
