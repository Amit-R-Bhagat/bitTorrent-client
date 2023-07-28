const fs = require('fs');
const torrent = fs.readFileSync('mint.torrent');
console.log(torrent.toString('utf-8'));