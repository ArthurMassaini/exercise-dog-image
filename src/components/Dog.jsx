import React from 'react';

class Dog extends React.Component {
  constructor() {
    super();

    this.fetchDog = this.fetchDog.bind(this);
    this.renderDogImage = this.renderDogImage.bind(this);
    this.oneMore = this.oneMore.bind(this);

    this.state = {
      imageDog: '',
      loading: true,
      allDogs: [],
    };
  }

  fetchDog() {
    this.setState(
      {
        loading: true,
      },
      () => {
        const url = 'https://dog.ceo/api/breeds/image/random';
        fetch(url)
          .then((response) => response.json())
          .then((response) =>
            this.setState({
              loading: false,
              imageDog: response.message,
            }),
          );
      },
    );
  }

  componentDidMount() {
    this.fetchDog();
  }

  oneMore() {
    this.setState((previousState) => ({
      allDogs: [...previousState.allDogs, previousState.imageDog],
    }));

    this.fetchDog();
  }

  renderDogImage() {
    return (
      <div>
        <figure>
          <img src={this.state.imageDog} alt="random-dog" className="image" />
        </figure>

        <button type="button" onClick={this.oneMore}>
          Mais um!
        </button>
      </div>
    );
  }

  render() {
    const loadingElement = <span>Loading...</span>;

    return (
      <div className="dog-conteiner">
        <figure>
          {this.state.allDogs.map((element) => (
            <img src={element} alt="random-dog" className="image" />
          ))}
        </figure>

        {this.state.loading ? loadingElement : this.renderDogImage()}
      </div>
    );
  }
}

export default Dog;
