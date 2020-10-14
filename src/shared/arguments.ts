export const playlistGalleryArgs = {
  songImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71M8yXz6o7L._SX250_.jpg',
  songTitle: 'Kids with Guns',
  albumName: 'Demon Days',
  artist: 'Gorillaz',
};

export const playlistControlsArgs = {
  onClickPlaylist: () => console.log('Expand Playlist control clicked!'),
  onClickLike: () => console.log('Like Songs control clicked!'),
  onClickDislike: () => console.log('Dislike Song control clicked!'),
};

export const songProgressArgs = {
    timeTotal: 298000,
    timeElapsed: 64000,
};

export const songControlsArgs = {
    onClickRepeat: () => console.log('Repeat Song control clicked!'),
    onClickShuffle: () => console.log('Shuffle Songs control clicked!'),
    onClickSwitch: () => console.log('Switch Device control clicked!'),
};

export const volumeArgs = {
    volume: 40,
};