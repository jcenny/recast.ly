var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max || 5,
      part: 'snippet',
      safeSearch: 'strict',
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: (res) => callback(res.items),
    error: (error) => console.error('Failed to fetch videos', error),
    dataType: 'json'
  });
};

export default searchYouTube;
