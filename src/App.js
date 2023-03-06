
// 1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data.json'
import SelectedBeast from './SelectedBeast';
import { Form } from 'react-bootstrap';

// 2nd Class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      image_url: '',
      description: '',
      sortedData: data,
    }
  }

  handleOpenModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description
    });
    console.log(this.state.description)
  }
  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleSelect = (event) => {
    let selected = event.target.value;
    if (selected === '1') {
      let newData = data.filter(num => num.horns === 1);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '2') {
      let newData = data.filter(num => num.horns === 2);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '3') {
      let newData = data.filter(num => num.horns === 3);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '100') {
      let newData = data.filter(num => num.horns === 100);
      this.setState({
        sortedData: newData
      });
    } else if (selected === 'all') {
      this.setState({
        sortedData: data
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option>Open this select menu</option>
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Main
          data={this.state.sortedData}
          handleOpenModal={this.handleOpenModal}
        />

        <SelectedBeast
          data={data}
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
        />
        <Footer />
      </>
    )
  }
}


// 3rd export component soo other files can import
export default App;