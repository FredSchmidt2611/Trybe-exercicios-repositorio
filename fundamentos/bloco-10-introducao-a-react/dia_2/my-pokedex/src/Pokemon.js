import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.pokemon.name}</p>
                <p>{this.props.pokemon.type}</p>
                <p>{(this.props.pokemon.averageWeight.value).measurementUnit}</p>
                <img scr={this.props.pokemon.image} alt='Pokemon'/>
            </div>
        )
    }
}

Pokemon.propTypes = {
        pokemon: PropTypes.shape({
          name: PropTypes.string,
          type: PropTypes.string,
          averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string,
            value: PropTypes.number,
          }),
          image: PropTypes.string,
        }).isRequired,
      };


export default Pokemon