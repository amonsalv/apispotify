# APISpotify

APISpotify is a JavaScript library that allows you to interact with the Spotify API to retrieve information about artists, albums, tracks, and playlists.

## Requirements

- Node.js >= 22.17.0 (LTS recommended)
- npm >= 10.0.0

## Installation

You can install APISpotify using npm:

```bash
npm install apispotify
```

You can also include it directly in your HTML page using a `<script>` tag:

```html
<script src="path/to/apispotify.js"></script>
```

## Usage

To get started with APISpotify, you need to obtain a Spotify API key by following these steps:

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and create a new application.
2. Retrieve your `client_id` and `client_secret` from the created application.

Once you have your API key, you can start using APISpotify in your code:

```javascript
// Import the library
import APISpotify from 'apispotify';

// Create an instance of APISpotify with your API key
const api = new APISpotify({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET'
});

// Perform an artist search
api.searchArtists('Coldplay')
  .then(response => {
    // Manipulate the response
    console.log(response);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
```

## Available Methods

APISpotify provides the following methods to interact with the Spotify API:

- `searchArtists(query)`: Performs an artist search by name.
- `getArtist(artistId)`: Retrieves detailed information about an artist by their ID.
- `getArtistAlbums(artistId)`: Retrieves albums by an artist's ID.
- `getAlbum(albumId)`: Retrieves detailed information about an album by its ID.
- `getAlbumTracks(albumId)`: Retrieves tracks from an album by its ID.
- `searchTracks(query)`: Performs a track search by name.
- `getTrack(trackId)`: Retrieves detailed information about a track by its ID.
- `getTrackAudioFeatures(trackId)`: Retrieves audio features of a track by its ID.
- `getPlaylist(playlistId)`: Retrieves detailed information about a playlist by its ID.
- `getPlaylistTracks(playlistId)`: Retrieves tracks from a playlist by its ID.

Refer to the [official Spotify API documentation](https://developer.spotify.com/documentation/web-api/reference/) for more information on the data that can be obtained with each method.

## Contribution

If you'd like to contribute to the development of APISpotify, you can clone the repository and submit pull requests with your improvements.

### Development Setup

1. Ensure you have Node.js >= 22.17.0 installed
2. Clone the repository:
   ```bash
   git clone https://github.com/amonsalv/apispotify.git
   cd apispotify
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

### Testing

Make sure to run the unit tests before submitting your code:

```bash
npm test
```

## License

APISpotify is distributed under the [MIT License](https://opensource.org/licenses/MIT).
