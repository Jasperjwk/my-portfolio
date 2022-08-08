import React from "react";

const Resume = ({data}) => {
    if (data) {
        var skillmessage1 = data.skillmessage1;
        var skillmessage2 = data.skillmessage2;
        var skillmessage3 = data.skillmessage3;

        var education = data.education.map(function (education) {
            return (
                <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                        {education.degree} <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>

                    <p><span>&bull;</span> {education.description1}</p>

                    <p><span>&bull;</span> {education.description2}</p>

                    <h3>{education.school1}</h3>
                    <p className="info">
                        {education.degree1} <span>&bull;</span>
                        <em className="date">{education.graduated1}</em>
                    </p>

                    <p><span>&bull;</span> {education.description3}</p>
                    <p><span>&bull;</span> {education.description4}</p>

                    <h3>{education.school2}</h3>
                    <p className="info">
                        {education.degree2} <span>&bull;</span>
                        <em className="date">{education.graduated2}</em>
                    </p>

                    <p><span>&bull;</span> {education.description5}</p>

                    <p><span>&bull;</span> {education.description6}</p>

                </div>
            );
        });
        var work = data.work.map(function (work) {
            return (
                <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">
                        {work.title}
                        <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p><span>&bull;</span> {work.description}</p>
                    <p><span>&bull;</span> {work.description2}</p>
                    <p><span>&bull;</span> {work.description3}</p>

                    <h3>{work.company1}</h3>
                    <p className="info">
                        {work.title1}
                        <span>&bull;</span> <em className="date">{work.years1}</em>
                    </p>
                    <p><span>&bull;</span> {work.description4}</p>
                    <p><span>&bull;</span> {work.description5}</p>
                </div>
            );
        });

        var work1 = data.work1.map(function (work1) {
            return (
                <div key={work1.company}>
                    <h3>{work1.company}</h3>
                    <p className="info">
                        {work1.title}
                        <span>&bull;</span> <em className="date">{work1.years}</em>
                    </p>
                    <p><span>&bull;</span> {work1.description}</p>
                    <p><span>&bull;</span> {work1.description1}</p>
                    <p><span>&bull;</span> {work1.description2}</p>
                    <p><span>&bull;</span> {work1.description3}</p>
                    <p>{work1.description4}</p>
                </div>
            );
        });

        var hobbies = data.hobbies.map(function (hobbies) {
            var projectImage = "images/portfolio/" + hobbies.image;
            return (
                <div key={hobbies.company}>
                    <h3>{hobbies.company}</h3>
                    <p className="info">
                        {hobbies.title}
                        <span>&bull;</span> <em className="date">{hobbies.years}</em>
                    </p>
                    <p><span>&bull;</span> {hobbies.description1}</p>
                    <p><span>&bull;</span> {hobbies.description2}</p>
                    <p>
                        <a
                            title="My Artwork"
                            href="http://www.redbubble.com/people/youressentials">
                            Check out My Artwork
                        </a>
                    </p>
                    <h3 style={{textAlign: "center"}}>Best Sellers</h3>
                </div>

            );
        });

        var hobiess = data.hobbieImage.map(function (hobbieImage) {
            var projectImage = "images/portfolio/" + hobbieImage.image;
            return (
                <div key={hobbieImage.title} className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href={hobbieImage.url} title={hobbieImage.title}>
                            <img alt={hobbieImage.title} src={projectImage}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{hobbieImage.title}</h5>
                                    <p>{hobbieImage.category}</p>
                                </div>
                            </div>
                            <div className="link-icon">
                                <i className="fa fa-link"></i>
                            </div>
                        </a>
                    </div>
                </div>
            );
        });


        var skills = data.skills.map(function (skills) {
            var className = "bar-expand " + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span style={{width: skills.level}} className={className}></span>
                    <em>{skills.name}</em>
                </li>
            );
        });
    }

    return (
        <section id="resume">
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work Experience</span>
                    </h1>
                </div>

                <div className="nine columns main-col">{work1}</div>
            </div>


            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">{education}</div>
                    </div>
                </div>
            </div>

            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <p><span>&bull;</span> {skillmessage1}</p>
                    <p><span>&bull;</span> {skillmessage2}</p>
                    <p><span>&bull;</span> {skillmessage3}</p>


                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Voluntary Work</span>
                    </h1>
                </div>

                <div className="nine columns main-col">{work}</div>
            </div>

            <div className="row hobbies">
                <div className="three columns header-col">
                    <h1>
                        <span>Hobbies</span>
                    </h1>
                </div>

                <div className="nine columns main-col"

                >
                    <p>{hobbies}</p>

                    <div className="projects"
                         id="portfolio-wrapper"
                         className="bgrid-quarters s-bgrid-thirds cf"
                        // className="bgrid-halves s-bgrid-thirds cf"
                    >
                        {hobiess}
                    </div>
                    {/* <div className="bars">
            <ul className="skills">{skills}</ul>
          </div> */}
                </div>
            </div>
        </section>
    );
};

export default Resume;
