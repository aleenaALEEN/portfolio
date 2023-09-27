import React from "react";
import { SkillsList } from "../utils/skillsList";
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

const Skills = () => {
  return (
    <>
      <div className="container skills py-5" id="skills">
        <RubberBand>
        <h2 className="mt-3 mb-1 text-center">
          My <span>Skills</span>
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Including progammming Languages, frameworks, databases, front-end
          and back-end tools, and APIs.
        </p>
        </RubberBand>
        <div className="row">
          {SkillsList.map((skill) => {
            return (
              <Fade right>
              <div key={skill._id} className="col-12 col-md-4  col-lg-4 col-xl-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center align-items-center">
                        <div className="align-self-center">
                          <skill.icon className="skill-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{skill.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
