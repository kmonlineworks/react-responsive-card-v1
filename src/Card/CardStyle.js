import Styled from 'styled-components';

export const CardContainer = Styled.div`
    width: 100%;
    // height: 250px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s ease-out;

    &:hover{
        box-shadow: 0 1px 5px rgba(0,0,0,0.1);
    }
`;

export const CardMediaContainer = Styled.div`
    width: 100%;
    position: relative;
`;

export const CardMedia = Styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
`;

export const CardCategory = Styled.p`
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 15px;
    position: absolute;
    bottom: 5px;
    background-color: rgba(0,0,0,0.5);
`;

export const CardTitle = Styled.h3`
    color: #222;
    font-size: 16px;
    padding: 15px;
`;

export const CardDesc = Styled.p`
    color: #333;
    font-size: 15px;
    padding: 0 15px;
    margin-bottom: 15px;
`;
