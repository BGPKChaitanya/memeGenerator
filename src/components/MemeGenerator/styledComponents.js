import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`

export const Heading = styled.label`
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: 5px;
`
export const CustomInput = styled.input`
  width: 200px;
  height: 30px;
  padding: 10px;
  margin-top: 10px;
`
export const CustomButton = styled.button`
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  border-style: none;
  background-color: '#0b69ff';
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  height: 100vh;
`

export const ImageText = styled.p`
  font-size: ${props => props.fontSize};
`
