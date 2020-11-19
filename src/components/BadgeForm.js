import React from "react";

class BadgeForm extends React.Component {
  handleClick = (e) => console.log("form button was clicked");

  handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userInfo: this.state });
    console.log("form was submited");
  };

  render() {
    const { onChange } = this.props;
    const {
      firstName,
      lastName,
      email,
      jobTitle,
      twitter,
    } = this.props.formValues;

    return (
      <div>
        <h1>New Attendant</h1>

        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="mb-0 mt-2" htmlFor="">
              First Name
            </label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={firstName}
            />

            <label className="mb-0 mt-2" htmlFor="">
              Last Name
            </label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={lastName}
            />

            <label className="mb-0 mt-2" htmlFor="">
              Email
            </label>
            <input
              onChange={onChange}
              className="form-control"
              type="email"
              name="email"
              value={email}
            />

            <label className="mb-0 mt-2" htmlFor="">
              Job Title
            </label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={jobTitle}
            />

            <label className="mb-0 mt-2" htmlFor="">
              Twitter
            </label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-dark pl-5 pr-5">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
