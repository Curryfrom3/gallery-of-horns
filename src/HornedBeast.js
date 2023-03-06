import React from 'react';
import './HornedBeast.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  handleFav = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
  }

  handleBeastClick = () => {
    this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)
  
  }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={this.handleBeastClick} variant="top" src={this.props.image_url} alt={this.props.description} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>❤️{this.state.favorites} Favorites!</Card.Text>
            <Button onClick={this.handleFav} variant="outline-danger">Click to Favorite</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;