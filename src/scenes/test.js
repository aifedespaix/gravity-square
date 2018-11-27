import Phaser from 'phaser';

import CharacterManager from '../Managers/CharacterManager';
import LoadingManager from '../Managers/LoadingManager';
import SoundManager from '../Managers/SoundManager';
import MapTestManager from '../Managers/MapTestManager';

class Test extends Phaser.Scene {
  constructor() {
    super();
    this.managers = {};
    this.init();
  }

  init() {
    this.initManagers();
  }

  initManagers() {
    this.managers = {
      sound: new SoundManager(this),
      loading: new LoadingManager(this),
      map: new MapTestManager(this),
      character: new CharacterManager(this),
    };
  }

  preload() {
    Object.values(this.managers)
      .forEach((manager) => {
        manager.preload();
      });
  }

  create() {
    Object.values(this.managers)
      .forEach((manager) => {
        manager.create();
      });
    // Add physic player + map
    this.physics.add.collider(this.managers.character.player, this.managers.map.colidableWalls);
    this.physics.add.collider(
      this.managers.character.player,
      this.managers.map.colidableObstacles,
      this.bite,
      null,
      this,
    );
  }

  bite(player) {
    console.log('Game Over');
    player.destroy();
  }

  update() {
    Object.values(this.managers)
      .forEach((manager) => {
        manager.update();
      });
    // this.debug.inputInfo(32, 32); //todo : debug manager en cas de node ENV DEBUG
  }
}

export default Test;
