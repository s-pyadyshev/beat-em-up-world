import React, { Component } from 'react';

// import ErrorIndicator from '../../components/ErrorIndicator';
// import Spinner from '../../components/Spinner';

const withData = (View, getData) => {
  return class extends Component {

    constructor() {
      super();
      this.state = {
        data: null,
        loading: true,
        error: false
      }
    }
  
    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {

      const { data } = this.state;

      if (!data) {
        return <div>Loading...</div>;
      }
  
      return <View {...this.props} data={data}/>
    }
  };
};

export default withData;