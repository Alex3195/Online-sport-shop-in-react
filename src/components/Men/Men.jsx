import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Men extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="card">

      </div>
    );
  }
}
export default Men;
