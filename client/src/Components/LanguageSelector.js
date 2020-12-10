import React, { Component } from 'react';

class LanguageSelector extends Component {
    render() {
        return (
            <div className="languageSelector">
                <a href="/fr"><img src="/images/languages/french.jpg" alt="french flag" /></a>
                <a href="/es"><img src="/images/languages/spain.jpg" alt="spain flag" /></a>
                <a href="/"><img src="/images/languages/english.png" alt="usa flag" /></a>
            </div >
        );
    }
}

export default LanguageSelector;
