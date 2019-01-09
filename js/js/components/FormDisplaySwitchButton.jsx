import React from 'react';
import PropTypes from 'prop-types';

class FormDisplaySwitchButton extends React.Component {
    render() {
        return <div style={{display: 'inline-block', margin: '5px'}}>
                    <a href="#" onClick={this.props.onFormDisplaySwitchButtonClick}>{this.props.title}</a>
               </div>;
    }
}

FormDisplaySwitchButton.propTypes = {
    title: PropTypes.string.isRequired,
    onFormDisplaySwitchButtonClick: PropTypes.func.isRequired,
};

export default FormDisplaySwitchButton;