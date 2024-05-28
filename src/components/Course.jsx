import React from "react";
import "../styles/course.css";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 18rem;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
const CardImageWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
`;
const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #f1f1f1;
`;
const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;
const CardAuthor = styled.p` 
  font-size: 0.875rem;
  color: #333;
  `;
const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
const CardPrice = styled.div`
display: flex;
gap: 0.5rem;
font-size: 1.25rem;
  `;

const Course = ({ image, name, rating, author, currentPrice, previousPrice }) => {
  return (
    <>
      <CardContainer>
        <CardImageWrapper>
          <CardImage src={image} alt="Card Image" />
        </CardImageWrapper>
        <CardContent>
          <CardTitle>{name}</CardTitle>
          <CardAuthor>{author}</CardAuthor>
          <CardRating>
            <span>{rating}</span>
            <span className="text-amber-400">★</span>
            <span className="text-amber-400">★</span>
            <span className="text-amber-400">★</span>
            <span>(19,456)</span>
          </CardRating>
          <CardPrice>
            <div className="text-green-500 font-semibold">{currentPrice}</div>
            <div className="text-gray-400 line-through">{previousPrice}</div>
          </CardPrice>
        </CardContent>
      </CardContainer>
    </>
  );
};

export default Course;
