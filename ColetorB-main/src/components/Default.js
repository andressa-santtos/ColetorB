import React from 'react'
import styled from 'rn-css'

const ButtonMd = styled.TouchableOpacity`
  width: 50%;
  height: 48px;
  margin: 20px 0;
  padding: 12px 28px;
  border-radius: 20px;
  border: 1px solid #9A9A9A;
  background-color: ${props => props.bgColor};
  &:hover {
    background-color: ${props => props.hvColor};
  }
`;
const ButtonSm = styled.TouchableOpacity`
  width: 70%;
  height: 48px;
  margin: 20px 0 20px 0;
  padding: 12px 28px;
  border-radius: 20px;
  border: 1px solid #9A9A9A;
  background-color: ${props => props.bgColor};
  &:hover {
    background-color: ${props => props.hvColor};
  }
`;
const ButtonLk = styled.TouchableOpacity`
  font-size: 14px;
  margin: 5px 0 0px 0;
  &:hover {
    color: ${props => props.hvColor};
  }
`;
const ButtonText = styled.Text`
  font-size: 1em;
  letter-spacing: 1.5px;
  text-align: center;
  color:${props => props.bgColor};
  font-family: ${props => props.fontFamily};
`;

const PkButton = styled.TouchableOpacity`
  width: 50%;
  height: 48px;
  margin: 20px 0;
  padding: 12px 28px;
  border-radius: 20px;
  border: 1px solid #9A9A9A;
  background-color: ${props => props.bgColor};
  &:hover {
    background-color: ${props => props.hvColor};
  }
`;


export const ButtonMediun = ({ onPress, color, hover, text, textFont, textColor }) => (
  <ButtonMd onPress={onPress} bgColor={color} hvColor={hover}>
    <ButtonText fontFamily={textFont} bgColor={textColor}>{text}</ButtonText>
  </ButtonMd>
);
export const ButtonSmall = ({ onPress, color, hover, text, textFont, textColor }) => (
  <ButtonSm onPress={onPress} bgColor={color} hvColor={hover}>
    <ButtonText fontFamily={textFont} bgColor={textColor}>{text}</ButtonText>
  </ButtonSm>
);
export const ButtonLink = ({ onPress, text, textFont, textColor }) => (
  <ButtonLk onPress={onPress} >
    <ButtonText fontFamily={textFont} bgColor={textColor}>{text}</ButtonText>
  </ButtonLk>
);
export const PickerButton = ({ onPress, color, hover, text, textFont, textColor }) => (
  <PkButton onPress={onPress} bgColor={color} hvColor={hover}>
    <ButtonText fontFamily={textFont} bgColor={textColor}>{text}</ButtonText>
  </PkButton>
);

