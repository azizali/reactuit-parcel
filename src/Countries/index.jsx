import React from 'react';

export default class Countries extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidUpdate(prevProp, prevState) {
    const url = `https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=${this.props.year}`;

    if (prevProp.year !== this.props.year) {
      this.makeCall(url);
    }
  }

  componentDidMount() {
    const url = `https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=${this.props.year}`;
    // Option 1: Then Way
    // fetch(url)
    //   .then((data) => data.json())
    //   .then((json) => {
    //     console.log(json);
    //   });

    // Option 2: Aync Await Away
    this.makeCall(url);
  }

  // Option 2: Aync Await Away
  async makeCall(url) {
    const data = await fetch(url);
    const json = await data.json();
    this.setState({
      data: json.data,
      isLoading: false,
    });
    console.log(json);
  }

  render() {
    return (
      <div>
        Countries
        {this.state.isLoading && <div>Loading...</div>}
        {!this.state.isLoading && this.state.data.map((item) => (
          <div>
            Year:
            {' '}
            {item['ID Year']}
            <br />
            Population:
            {' '}
            {item.Population}
          </div>
        ))}
      </div>
    );
  }
}
