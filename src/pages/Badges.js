import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import BadgesList from "../components/BadgesList";
import confLogo from "../assets/img/badge-header.svg";

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: [],
      },
    };
  }

  componentDidMount() {
    this.getCharactersData();
  }

  getCharactersData = () => {
    this.setState({ loading: true, error: null });

    try {
      axios
        .get(
          `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
        )
        .then((res) => {
          this.setState({
            loading: false,
            data: {
              info: res.data.info,
              results: [].concat(this.state.data.results, res.data.results),
            },
            nextPage: this.state.nextPage + 1,
          });
        });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    console.log(this.state.nextPage);
    if (this.state.error) {
      return `Error ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="" className="Badges_conf-logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-dark">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badge__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data.results} />
            {this.state.loading && (
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm-auto d-flex">
                    <Loader
                      className="mx-auto"
                      type="ThreeDots"
                      color="#343a40"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
              </div>
            )}

            {!this.state.loading && (
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 p-0 mb-5">
                    <button
                      onClick={() => this.getCharactersData()}
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
