import React, { Component } from 'react';
import '../loading/style.css';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet';
import PacmanLoader from "react-spinners/PacmanLoader";

class Loading extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
    ReactGA.initialize("UA-154721739-1");
    ReactGA.pageview('Loading Screen');
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/home" />
      : <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Oluwaseun Ismaila</title>
                <link rel="canonical" href="http://seun.com.ng/" />
                <meta name="description" content="Oluwaseun Ismaila - Frontend Developer| Software Developer| Product Manager | Project Manager" />
         </Helmet>
        <div className="Loading-header">
          <PacmanLoader
            margin={1}
            size={30}
            color={"#fff"}
            loading={true}
          />
        </div>
        </div>
  }
}

export default Loading;
