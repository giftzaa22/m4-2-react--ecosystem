import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ListItem(props) {
  console.log(props.item);
  return (
    <div>
      <CardLink to={`/items/${props.item.id}`}>
        <Wrapper>
          <FruitPic src={props.item.imageSrc} />
          <Name>{props.item.name}</Name>
          <Decoration />
          <LatinName>{props.item.latinName}</LatinName>
        </Wrapper>
      </CardLink>
    </div>
  );
}

const CardLink = styled(Link)`
  text-decoration: none;
  transition: transform 250ms;
`;

const Wrapper = styled.div`
  padding: 36px;
  border-radius: 16px;
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FruitPic = styled.img`
  border-radius: 12px;
  margin-top: -48px;
  width: 80%;
`;

const Name = styled.h3`
  font-size: 24px;
  color: #333;
  margin-top: 12px;
`;

const LatinName = styled.h5`
  color: #999;
  font-style: italic;
  font-size: 16px;
  font-weight: 300;
`;

const Decoration = styled.div`
  width: 50px;
  height: 5px;
  border-radius: 0 0 50% 50%;
  background: #000;
  opacity: 0.1;
  margin: 12px auto;
`;

export default ListItem;
