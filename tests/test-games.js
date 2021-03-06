var rpsGame = require('../');
var assert = require('assert');

var rpsopts = {
  rock: {beats: ["scissors", "lizard"]}
  ,scissors: {beats: ["paper", "lizard"]}
  ,paper: {beats: ["rock", "spock"]}
  ,spock: {beats: ["rock", "scissors"]}
  ,lizard: {beats: ["paper", "spock"]}
};

rpsopts.dynamite = {beats: []};
for(var i in rpsopts) {
  rpsopts.dynamite.beats.push(i);
}

var g = new rpsGame(rpsopts);

g.addPlayer({id: 1, sign: "spock"});
g.addPlayer({id: 2, sign: "rock"});
g.addPlayer({id: 3, sign: "spock"});
g.addPlayer(4, "rock").addPlayer(5, "paper").addPlayer(6, "dynamite");
g.addPlayer("dynamite");
g.play();
console.log(g.winner);
assert.equal(g.winner.length, 1);
assert.equal(g.winner[0].id, 6);
assert.equal(g.winner[0].sign, 'dynamite');

rpsopts6 = JSON.parse(JSON.stringify(rpsopts));
delete rpsopts6.dynamite;
var g6 = new rpsGame(rpsopts6);
var playerId = 1;
for(var i in rpsopts6) {
  g6.addPlayer(playerId++, i);
}
g6.play();
assert.equal(g6.winner.length, 0);