import React, { Component } from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school}><h3><img alt="schoolLogo" className="schoolLogo" src={education.image}></img>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                    <p>{education.description}</p></div>
            })
            var work = this.props.data.work.map(function (work) {
                return <div key={work.company}><h3><img alt="workLogo" className="workLogo" src={work.image}></img>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                    <p>{work.description}</p>
                </div>
            })
            var skills = this.props.data.skills.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
            })
            var languages = this.props.data.languages.map(function (language) {
                return <div key={language.name} className="flags"><img alt="flag" className="flag" src={language.image}></img></div>
            })
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row language">
                    <div className="three columns header-col">
                        <h1><span>Languages</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <ul className="Languages">
                            {languages}
                        </ul>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="waveResume">
                    <path fill="#ffffff" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,176C384,149,480,107,576,117.3C672,128,768,192,864,197.3C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </section>
        );
    }
}

export default Resume;
