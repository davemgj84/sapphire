import Phaser from "phaser";

class World extends Phaser.Scene {
  constructor() {
    super();
    this.tempx = 0;
    this.tempy = 0;
  }

  preload() {
    this.load.tilemapTiledJSON("world", "/assets/sapphire.json");
    this.load.image("overworld_proper", "/assets/overworld_proper.png");
    this.load.spritesheet("hulk", "/assets/sumoHulk_spriteSheet.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    // enter button test link:
    this.load.image("button", "/assets/enter.png");
  }

  create() {
    // MAP LOGIC:
    const map = this.add.tilemap("world");
    const tileset = map.addTilesetImage("overworld_proper", "overworld_proper");
    const collision = map
      .createStaticLayer("Collision", tileset, 0, 0)
      .setScale(2);
    const grass = map.createStaticLayer("Grass", tileset, 0, 0).setScale(2);
    const path = map.createStaticLayer("Path", tileset, 0, 0).setScale(2);
    const buildings = map
      .createStaticLayer("Building", tileset, 0, 0)
      .setScale(2);
    collision.setCollisionBetween(0, 2);
    buildings.setDepth(0);
    grass.setDepth(0);
    path.setDepth(0);
    collision.setDepth(0);

    // PLAYER :
    this.player = this.physics.add.sprite(176, 624, "hulk").setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.body.collideWorldBounds = true;
    this.physics.add.collider(this.player, collision);

    // Static EVENT GHOST Sprite:
    const eventGhost = this.physics.add.sprite(400, 496, "hulk").setScale(2);
    eventGhost.setVisible(false);

    // Create Scene button - set button to invisible until event:
    const button = this.add.image(0, 0, "button");
    const container = this.add.container(400, 450, [button]);
    container.setSize(button.width, button.height).setScale(0.3);
    container.setInteractive();
    container.setVisible(false);

    // Interaction with Ghost sprite - brings up option to enter new scene based on location and use space bar to enter scene!
    // Enter scene button appears on overlap with Ghost sprite!
    this.physics.add.overlap(
      this.player,
      eventGhost,
      () => {
        if (
          this.player.x === 400 &&
          this.player.y > 480 &&
          this.player.y < 500
        ) {
          container.setVisible(true);
          if (this.cursors.space.isDown) {
            window.advanceScene();
          }
        } else {
          container.setVisible(false);
        }
      },
      null,
      this
    );
  }

  update() {
    // CONTROLS :
    if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(300);
    } else if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-300);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(300);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-300);
    } else {
      this.player.body.setVelocity(0);
    }

    // Console logging the player position x and y:
    // if (this.tempx !== this.player.x || this.tempy !== this.player.y) {
    //   this.tempx = this.player.x;
    //   this.tempy = this.player.y;
    //   console.log("xy: ", this.tempx, this.tempy);
    // }
  }
}
export default World;
