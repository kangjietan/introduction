import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
  text-align: center;
`;

const DropDownContainer = styled.div`
  display: flex;
  /* text-align: left; */
`;

const SelectBox = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;

  & label {
    cursor: pointer;
  }
`;

const OptionsContainer = styled.div`
  background: #2f3640;
  color: #f5f6fa;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  order: 1;

  &::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 8px 8px 0;
  }
`;

const Option = styled.div`
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    background: #414b57;
  }
`;

const Select = styled.div`
  background: #2f3640;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #f5f6fa;
  position: relative;
  order: 0;
  padding: 12px 24px;
  cursor: pointer;
`;

const SelectAfter = styled.div`
    background: url('./images/arrow-down.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    height: 100%;
    width: 32px;
    right: 10px;
    top: 5px;
    transition: all 0.4s;
`;

const SelectInput = styled.input`
  display: none;
`;

function RandomDropDown(props) {
  const [optionsActive, setOptionsActive] = useState(false);
  const [activeOption, setActiveOption] = useState('custom-list');

  let activeOptionsContainerStyle = optionsActive ? { maxHeight: '240px', opacity: 1, overflowY: scroll } : {};

  let activeSelectStyle = optionsActive ? { transform: 'rotate(180deg)', top: '-6px' } : {};

  return (
    <Container>
      <h1>Not sure where to eat? Have a random business chosen for you.</h1>
      <DropDownContainer>
        <SelectBox onClick={() => setOptionsActive(!optionsActive)}>
          <OptionsContainer style={activeOptionsContainerStyle}>
            <Option onClick={() => setOptionsActive(false)}>
              <SelectInput type='radio' id='term-location' name='category' />
              <label htmlFor='term-location'>Term and Location</label>
            </Option>
            <Option onClick={() => setOptionsActive(false)}>
              <SelectInput type='radio' id='favorites-list' name='category' />
              <label htmlFor='favorites-list'>Your favorites</label>
            </Option>
            <Option onClick={() => setOptionsActive(false)}>
              <SelectInput type='radio' id='custom-list' name='category' />
              <label htmlFor='custom-list'>Custom list</label>
            </Option>
          </OptionsContainer>
          <Select>
            Select Randomizing Option
          <SelectAfter style={activeSelectStyle} />
          </Select>
        </SelectBox>
        <RandomSelectedOption />
      </DropDownContainer>
    </Container>
  );
}

export default RandomDropDown;
