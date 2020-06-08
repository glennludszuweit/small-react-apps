import React from 'react';
import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal';
import ErrorBoundary from '../ErrorBoundary';
import ThemeContext from '../context/ThemeContext';

class DetailsPage extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       loading: true,
  //     };
  //   }
  state = { loading: true, showModal: false };
  componentDidMount() {
    // throw new Error('lol');
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state},`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <p></p>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className='details'>
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          {/*<button>Adopt {name}</button>*/}
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className='buttons'>
                  <ThemeContext.Consumer>
                    {(themeHook) => (
                      <button
                        onClick={this.adopt}
                        style={{ backgroundColor: themeHook[0] }}
                      >
                        Yes! please.
                      </button>
                    )}
                  </ThemeContext.Consumer>
                  <ThemeContext.Consumer>
                    {(themeHook) => (
                      <button
                        onClick={this.toggleModal}
                        style={{ backgroundColor: themeHook[0] }}
                      >
                        No! thanks.
                      </button>
                    )}
                  </ThemeContext.Consumer>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsPageWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsPage {...props} />
    </ErrorBoundary>
  );
}
