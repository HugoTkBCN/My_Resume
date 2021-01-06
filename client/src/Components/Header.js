import React, { Component } from 'react';
import LanguageSelector from '../Components/LanguageSelector';

class Header extends Component {
    render() {

        if (this.props.data) {
            var titleHeader = this.props.data.titleHeader;
            var home = this.props.data.navigation.home;
            var about = this.props.data.navigation.about;
            var resume = this.props.data.navigation.resume;
            var works = this.props.data.navigation.works;
            var testimonials = this.props.data.navigation.testimonials;
            var contact = this.props.data.navigation.contact;
            var description = this.props.data.description;
            var networks = this.props.data.social.map(function (network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <header id="home">

                <nav id="nav-wrap">
                    <LanguageSelector />

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">{home}</a></li>
                        <li><a className="smoothscroll" href="#about">{about}</a></li>
                        <li><a className="smoothscroll" href="#resume">{resume}</a></li>
                        <li><a className="smoothscroll" href="#portfolio">{works}</a></li>
                        <li><a className="smoothscroll" href="#contact">{contact}</a></li>
                    </ul>

                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{titleHeader}</h1>
                        <h3>{description}</h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>


            </header>
        );
    }
}

export default Header;
