import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectoryItems} from "../../redux/directory/directory.selectors";

class Directory extends React.Component {

    render() {
        return (
            <div className='directory-menu'>
                {this.props.directoryItems.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({directoryItems: selectDirectoryItems})
export default connect(mapStateToProps)(Directory);
