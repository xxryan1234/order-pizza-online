import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const IngredientWrapper = styled.li`
  border-bottom: 2px solid #000;
  border-top: 1px solid #000;
  padding: 1rem 0;
  margin-bottom: 5px;
  clear: both;
  overflow: hidden;
  display: block;
  font-size: 13px;

  img {
    float: left;
    width: 150px;
    margin-right: 1rem;
  }
`;

class Ingredient extends React.Component {
  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    const { Name, TypeName, Url } = this.props;
    return (
      <IngredientWrapper>
        <img src={Url} alt={Name} />
        <h4>{Name}</h4>
        <p>Type: {TypeName}</p>
        <button>Add To Order</button>
      </IngredientWrapper>
    );
  }
}

export default Ingredient;
