import React from "react";

class BadgesList extends React.Component {
  render() {
    const { badges } = this.props;

    return (
      <ul className="list-unstyled">
        {badges.map((badge) => (
          <li key={badge.id}>
            <div className="card mb-2 badge-card">
              <div className="card-body d-flex">
                <figure className="mr-3">
                  <img className="rounded-circle" src={badge.image} alt="" />
                </figure>
                <div>
                  <p className="font-weight-bold">{badge.name}</p>

                  <a href="">
                    <i className="fab fa-twitter"></i> @
                    {badge.name.split(" ")[0]}
                  </a>
                  <p>{badge.species}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default BadgesList;
