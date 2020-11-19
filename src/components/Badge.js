import React from "react";

import confLogo from "../assets/img/badge-header.svg";

class Badge extends React.Component {
  render() {
    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;

    return (
      <div className="Badge">
        <div>
          <figure className="Badge__header">
            <img src={confLogo} alt="logo de la conferencia" />
          </figure>
        </div>

        <div className="info-badge">
          <div className="Badge__section-name">
            <figure>
              <img className="Badge__avatar" src={avatarUrl} alt="" />
            </figure>
            <h1>
              {firstName} <br /> {lastName}
            </h1>
          </div>

          <div className="Badge__section-info">
            <p>{jobTitle}</p>
            <p className="m-0">@{twitter}</p>
          </div>

          <div className="Badge__footer">
            <p className="m-0">#PlatziConf</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
