import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          
          {this.props.data.map((hornedbeast) => {
            return (
            <HornedBeast 
              title={hornedbeast.title} 
              image_url={hornedbeast.image_url} 
              description={hornedbeast.description} 
              key={hornedbeast._id} 
              handleOpenModal={this.props.handleOpenModal}
              />
          )})}
        </main>
      </>
    )
  }
}

export default Main;