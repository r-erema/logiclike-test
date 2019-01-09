import React from 'react';
import PropTypes from 'prop-types';

class RemoveButton extends React.Component {
    render() {
        return <div style={{display: 'inline-block', margin: '5px'}}>
                   <a href="#" onClick={this.props.onRemoveButtonClick}>remove</a>
               </div>
    }
}

RemoveButton.propTypes = {
    onRemoveButtonClick: PropTypes.func.isRequired,
};

export default RemoveButton;