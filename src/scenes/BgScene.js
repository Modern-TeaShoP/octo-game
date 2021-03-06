import 'phaser';

export default class BgScene extends Phaser.Scene {
  constructor() {
    super('BgScene');
  }

  preload() {
    // Preload Sprites
    // << LOAD SPRITE HERE >>
    this.load.tilemapTiledJSON('octoMap', 'assets/backgrounds/octoMap.json');
    this.load.image('walls', 'assets/tilesets/NewWalls.png');
    this.load.image('floors', 'assets/tilesets/Inside_A2.png');
  }

  create() {
    // Create Sprites
    // << CREATE SPRITE HERE >>
    const map = this.make.tilemap({ key: 'octoMap' });
    const floorTiles = map.addTilesetImage('Inside_A2', 'floors');
    const wallTiles = map.addTilesetImage('NewWalls', 'walls');
    const floor = map.createLayer('floor', floorTiles, 0, 0).resizeWorld();
    const wall = map.createLayer('walls', wallTiles, 0, 0);
    const topEdge = map.createLayer('topEdge', wallTiles, 0, 0);
    const leftEdge = map.createLayer('leftEdge', wallTiles, 0, 0);
    const rightEdge = map.createLayer('rightEdge', wallTiles, 0, 0);
    const bottomEdge = map.createLayer('bottomEdge', wallTiles, 0, 0);
    wall.setCollisionByExclusion(-1, true);
    topEdge.setCollisionByExclusion(-1, true);
    leftEdge.setCollisionByExclusion(-1, true);
    rightEdge.setCollisionByExclusion(-1, true);
    bottomEdge.setCollisionByExclusion(-1, true);

    this.game.camera.follow(this.player);
  }
}
