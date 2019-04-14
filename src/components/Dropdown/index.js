import React from 'react';
import { Card, Container, Menu } from './style';

const iconStyle = { position: 'relative', top: 4, left: 4 };

class Dropdown extends React.PureComponent {
  state = {
    showDropdown: false,
  };

  toggleDropdown = () =>
    this.setState({ showDropdown: !this.state.showDropdown });

  props: {
    children: any,
    title: string,
  };

  render() {
    const { children, title } = this.props;
    const { showDropdown } = this.state;

    return (
      <Container
        onMouseEnter={this.toggleDropdown}
        onMouseLeave={this.toggleDropdown}
      >
        {title}
        <span className="icon-down" style={iconStyle} />
        {showDropdown && (
          <Menu>
            <Card>{children}</Card>
          </Menu>
        )}
      </Container>
    );
  }
}

export default Dropdown;
