var axios = require('axios');

var TypeAheadFetcher = {
  fetch: (searchTerm) => {
    const apiUrl = "https://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/?number=10"
    return new Promise((resolve, reject) => {
      axios.get(apiUrl, {
          params: {
            search: searchTerm
          }
        })
        .then((response) => {
          resolve(response.data.posts);
        })
        .catch((response) => {
          reject(response);
        });
    });
  }
}

module.exports = TypeAheadFetcher;
