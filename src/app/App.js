// /* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import CardBody from './components/CardBody';

const cardFull = {
    img: './img/img.png',
    title: 'Example Title',
    text: 'There is some text here',
};

const CardList = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
`;

export default function App() {
    return (
        <CardList>
            <Card src='./img/img.png'>
                <img
                    src={cardFull.img}
                    alt={cardFull.title}
                />
                <CardBody
                    title={cardFull.title}
                    text={cardFull.text}
                />
            </Card>

            <Card src='./img/img.png'>
                <CardBody
                    title={cardFull.title}
                    text={cardFull.text}
                />
            </Card>
        </CardList>
    );
}
