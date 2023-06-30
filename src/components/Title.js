import React from 'react';
import PropTypes from 'prop-types';
import '../style/title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 class="subtitle is-2 has-text-black-bis">{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
