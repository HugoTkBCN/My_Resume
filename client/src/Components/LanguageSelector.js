import React, { Component } from 'react';

class LanguageSelector extends Component {
    redirectEn() {
        window.location.href = "/"
    }

    redirectEs() {
        window.location.href = "/es"
    }

    redirectFr() {
        window.location.href = "/fr"
    }

    render() {
        return (
            <div className="languageSelector">
                <button onClick={this.redirectEs}><img src="/images/languages/spain.jpg" alt="spain flag" /></button>
                <button onClick={this.redirectFr}><img src="/images/languages/french.jpg" alt="spain flag" /></button>
                <button onClick={this.redirectEn}><img src="/images/languages/usa.png" alt="spain flag" /></button>
            </div >
        );
    }
}

export default LanguageSelector;
