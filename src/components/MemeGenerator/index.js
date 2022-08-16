import {Component} from 'react'
import {
  Form,
  Heading,
  CustomInput,
  CustomButton,
  ImageContainer,
  ImageText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    fontSize: 8,
    topText: '',
    bottomText: '',
    imageUrl: '',
    showImage: false,
  }

  onChangeUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTM = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBM = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeOption = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {fontSize, topText, bottomText, imageUrl} = this.state
    this.setState({showImage: true})
    console.log(fontSize, topText, bottomText, imageUrl)
  }

  render() {
    const {showImage, topText, bottomText, imageUrl, fontSize} = this.state

    return (
      <div>
        <div>
          <h1>Meme Generator</h1>
          <Form onSubmit={this.onSubmitForm}>
            <Heading htmlFor="imageUrl">Image Url</Heading>
            <CustomInput
              id="imageUrl"
              placeholder="Enter the Image Url"
              onChange={this.onChangeUrl}
            />
            <Heading htmlFor="topMsg">Top Text</Heading>
            <CustomInput
              id="topMsg"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTM}
            />
            <Heading htmlFor="bottomMsg">Bottom Text</Heading>
            <CustomInput
              id="bottomMsg"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBM}
            />
            <Heading htmlFor="bottomMsg">Font Size</Heading>
            <select onChange={this.onChangeOption}>
              {fontSizesOptionsList.map(each => (
                <option value={each.displayText} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <CustomButton type="submit">Generate</CustomButton>
          </Form>
        </div>
        <div>
          {showImage && (
            <ImageContainer imageUrl={imageUrl} data-testid="meme">
              <ImageText fontSize={fontSize}>{topText}</ImageText>
              <ImageText fontSize={fontSize}>{bottomText}</ImageText>
            </ImageContainer>
          )}
        </div>
      </div>
    )
  }
}

export default MemeGenerator
