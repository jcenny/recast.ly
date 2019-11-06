class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  render() {
    return (<div className="search-bar form-inline">
      <input className="form-control" type="text" value={this.state.inputValue} onChange={e => {
        e.preventDefault();
        this.setState({'inputValue': e.target.value});
        return setTimeout(() => this.props.search(this.state.inputValue), 1500);
      }}/>
      <button className="btn hidden-sm-down" onClick={e => {
        e.preventDefault();
        return this.props.search(this.state.inputValue);
      }}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
