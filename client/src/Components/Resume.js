import React, { Component } from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school}><h3><img className="schoolLogo" src={education.image}></img>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                    <p>{education.description}</p></div>
            })
            var work = this.props.data.work.map(function (work) {
                return <div key={work.company}><h3><img className="workLogo" src={work.image}></img>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                    <p>{work.description}</p>
                </div>
            })
            var skills = this.props.data.skills.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
            })
            var languages = this.props.data.languages.map(function (language) {
                return <div key={language.name} class="flags"><img className="flag" src={language.image}></img></div>
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
            </section>
        );
    }
}

export default Resume;
