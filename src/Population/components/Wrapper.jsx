import React from 'react';
import Table from './Table'
import Select from './Select'

export default class Wrapper extends React.Component {
  state = {
    years: ['2017', '2016', '2015'],
    drilldowns: ['Nation', 'State'],
    selection: {
      year: '2017',
      drilldown: 'State'
    },
    data: []
  }

  componentDidMount(){
    this.getPopulation()
  }

  componentDidUpdate(prevProps, prevState){
    if(
      prevState.selection.year !== this.state.selection.year ||
      prevState.selection.drilldown !== this.state.selection.drilldown
    ){
      this.getPopulation()
    }
  }

  async getPopulation(){
    const {drilldown, year} = this.state.selection
    const url = `https://datausa.io/api/data?drilldowns=${drilldown}&measures=Population&year=${year}`

    const data = await fetch(url)
    const json = await data.json()

    this.setState({
      data: json.data
    })


  }


  render() {
    return (
      <div>
        <Select
          label='Year:'
          option={this.state.years}
          selection={this.state.selection.year}
          handleChange={(e)=>{
            this.setState({
              selection: {
                ...this.state.selection,
                year: e.target.value
              }
            })
          }}
        />
        <Select
          label='Drill down:'
          option={this.state.drilldowns}
          selection={this.state.selection.drilldown}
          handleChange={(e)=>{
            this.setState({
              selection: {
                ...this.state.selection,
                drilldown: e.target.value
              }
            })
          }}
        />
        {
          this.state.data.map((item)=>{
            return <div>{item['ID State']}</div>
          })
        }
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}
