import Phaser from "phaser";

class World extends Phaser.Scene {
  constructor() {
    super();
    this.tempx = 0;
    this.tempy = 0;

    this.players = {
      red: {
        down: [0, 2],
        left: [12, 14],
        right: [24, 26],
        up: [36, 38],
      },
      pink: {
        down: [3, 5],
        left: [15, 17],
        right: [27, 29],
        up: [39, 41],
      },
      darkBlue: {
        down: [6, 8],
        left: [18, 20],
        right: [30, 32],
        up: [42, 44],
      },
      lightBlue: {
        down: [9, 11],
        left: [21, 23],
        right: [33, 35],
        up: [45, 47],
      },
    };
  }

  preload() {
    const url = `/assets/people_sprites.png`;
    this.load.tilemapTiledJSON("world", "/assets/sapphire.json");
    this.load.image("overworld_proper", "/assets/overworld_proper.png");
    this.load.spritesheet("player", url, {
      frameWidth: 32,
      frameHeight: 32,
      startFrame: 5,
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
    this.player = this.physics.add.sprite(176, 624, "player").setScale(1);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.body.collideWorldBounds = true;
    this.physics.add.collider(this.player, collision);
    const chosenPlayer = this.players["lightBlue"];

    // lightBlue: {
    //   down: [9, 11],
    //   left: [21, 23],
    //   right: [33, 35],
    //   up: [45, 47],
    // },

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", {
        start: chosenPlayer.left[0],
        end: chosenPlayer.left[1],
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", {
        start: chosenPlayer.right[0],
        end: chosenPlayer.right[1],
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", {
        start: chosenPlayer.up[0],
        end: chosenPlayer.up[1],
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", {
        start: chosenPlayer.down[0],
        end: chosenPlayer.down[1],
      }),
      frameRate: 10,
      repeat: -1,
    });
    // this.anims.create({
    //   key: "idle",
    //   frames: this.anims.generateFrameNumbers("player", { start: 3, end: 3 }),
    //   frameRate: 10,
    //   repeat: -1,
    // });

    // Static EVENT GHOST Sprite:
    const eventGhost = this.physics.add.sprite(400, 496, "player").setScale(2);
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
      this.player.anims.play("right", true);
      this.player.body.setVelocityX(300);
    } else if (this.cursors.left.isDown) {
      this.player.anims.play("left", true);
      this.player.body.setVelocityX(-300);
    } else if (this.cursors.down.isDown) {
      this.player.anims.play("down", true);
      this.player.body.setVelocityY(300);
    } else if (this.cursors.up.isDown) {
      this.player.anims.play("up", true);
      this.player.body.setVelocityY(-300);
    } else {
      // this.player.anims.play("idle", true);
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
