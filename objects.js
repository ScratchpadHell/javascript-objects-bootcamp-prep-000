var playlist = new Object({ JimiHendrix: 'Foxy Lady'});
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}