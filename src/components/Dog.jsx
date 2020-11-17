import React from 'react';

class Dog extends React.Component {
  constructor() {
    super();

    this.fetchDog = this.fetchDog.bind(this);

    this.state = {
      imageDog: '',
      loading: true,
    };
  }

  fetchDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          imageDog: response.message,
        }),
      );
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    return (
      <div className="dog-conteiner">
        <img src={this.state.imageDog} alt="random-dog"></img>
      </div>
    );
  }
}

export default Dog;
