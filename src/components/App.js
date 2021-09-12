import React from 'react';
import './App.css';
import CircleMenu from './CircleMenu.js';
import TxtInfo from './TxtInfo';


class App extends React.Component {
  state = {
    messages: [],
    buttonId: '',
    centerLogo: true,
    bottomLogo: false
  }

  static defaultProps = {
    txtInfo: [
      { id: 1, h: 'HTML:', t: 'html5, boilerplate, web application, single page application' },
      { id: 2, h: 'TypeScript:', t: 'new way of better JavaScript application, and future solutions for backend' },
      { id: 3, h: 'MSQL:', t: 'manage, create, modify, optimalization for data bases in SQL' },
      { id: 4, h: 'Tailwind:', t: 'modern framework for CSS, easy to code, easy to manage' },
      { id: 5, h: 'CSS:', t: 'beauty and fast pages and applications with SASS preprossesors' },
      { id: 6, h: ' JavaScript:', t: 'jsa' },
      { id: 7, h: 'PHP:', t: 'PHP' },
      { id: 8, h: 'Laravel:', t: 'Laravel' },
      { id: 9, h: 'React:', t: 'React' },
      { id: 10, h: 'Bootstrap:', t: 'Bootstrap' },

    ]
  }

  switchButton(id) {
    console.log(id)
    let txtInfo = ''
    switch (true) {
      case id === "HTMLouterCircle":
        txtInfo = this.props.txtInfo[0]
        break;
      case id === "TSouterCircle":
        txtInfo = this.props.txtInfo[1]
        break;
      case id === "MSQLouterCircle":
        txtInfo = this.props.txtInfo[2]
        break;
      case id === "TWouterCircle":
        txtInfo = this.props.txtInfo[3]
        break;
      case id === "CSSouterCircle":
        txtInfo = this.props.txtInfo[4]
        break;
      case id === "JSouterCircle":
        txtInfo = this.props.txtInfo[5]
        break;
      case id === "PHPouterCircle":
        txtInfo = this.props.txtInfo[6]
        break;
      case id === "LRouterCircle":
        txtInfo = this.props.txtInfo[7]
        break;
      case id === "RCouterCircle":
        txtInfo = this.props.txtInfo[8]
        break;
      case id === "BSouterCircle":
        txtInfo = this.props.txtInfo[9]
        break;

      default:
        console.log('no button')
    }
    return txtInfo;

  }

  handleMenuClick(e) {
    const messages = [this.switchButton(e.target.id)];
    this.setState({
      messages
    })

  }

  handleMouseOver() {
    this.setState(prevState => ({
      centerLogo: false,
      bottomLogo: true

    }))
  }
  handleMouseLeave() {
    this.setState(prevState => ({
      centerLogo: true,
      bottomLogo: false

    }))
  }

  render() {
    const txtInfo = this.state.messages.map(message => (
      <TxtInfo key={message.id} h={message.h} t={message.t} />
    ))
    return (
      <>
        <div className="App">
          <CircleMenu
            className="Logo"
            click={this.handleMenuClick.bind(this)}
            mouseOver={this.handleMouseOver.bind(this)}
            mouseLeave={this.handleMouseLeave.bind(this)}
          />
          {txtInfo}
        </div>
      </>
    )
  }
}


export default App;
