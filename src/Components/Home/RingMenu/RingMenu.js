import React, { Component } from 'react';
import ToggleButton from './ToggleButton/ToggleButton';
import styles from './RingMenu.module.scss';
import MenuLinks from './MenuLinks/MenuLinks';

class RingMenu extends Component {
    state = {
        menuOpen: false
    }

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    render() {
        return (
            <div className={styles.ringMenuWrapper}>
                <ToggleButton
                    open={this.state.menuOpen}
                    clicked={this.toggleMenu}
                />

                <MenuLinks show={this.state.menuOpen} />
            </div>
        );
    }
}

export default RingMenu;