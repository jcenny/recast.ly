import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from './../data/exampleVideoData.js';
import YOUTUBE_API_KEY from './../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVid: exampleVideoData[0],
      allVids: exampleVideoData
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleClick(video) {
    this.setState({ currentVid: video });
  }

  handleSearch(q = 'cats') {
    return this.props.searchYouTube({query: q, key: YOUTUBE_API_KEY}, (data) => {
      return this.setState({
        currentVid: data[0],
        allVids: data
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em></h5><Search search={this.handleSearch} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Video Player</em></h5><VideoPlayer video={this.state.currentVid}/></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Video List</em></h5><VideoList click={this.handleClick} videos={this.state.allVids}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
