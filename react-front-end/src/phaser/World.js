import Phaser from "phaser";

class World extends Phaser.Scene {
  constructor() {
    super();
    this.tempx = 0;
    this.tempy = 0;
    this.spriteView = {
      down: [0, 2],
      left: [3, 5],
      right: [6, 8],
      up: [9, 11],
    };
    //this is being declared in useColor.js
    this.color = window.selectColor;
  }

  preload() {
    const url = `/assets/character_sprites/sprite_${this.color}.png`;
    this.load.tilemapTiledJSON("world", "/assets/sapphire.json");
    this.load.image("overworld_proper", "/assets/overworld_proper.png");
    this.load.spritesheet("player", url, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("hulk", "/assets/sumoHulk_spriteSheet.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    // enter button test link:
    // this.load.image("button", "/assets/enter.png");
    this.load.image("button", "/assets/space.png");
  }

  create() {
    // MAP LOGIC:
    const map = this.add.tilemap("world");
    const tileset = map.addTilesetImage("overworld_proper", "overworld_proper");
    const collision = map
      .createStaticLayer("COLLISION", tileset, 0, 0)
      .setScale(2);
    const grass = map.createStaticLayer("GRASS", tileset, 0, 0).setScale(2);
    const rivers = map.createStaticLayer("RIVERS", tileset, 0, 0).setScale(2);
    const path = map.createStaticLayer("PATH", tileset, 0, 0).setScale(2);
    const bridges = map.createStaticLayer("BRIDGES", tileset, 0, 0).setScale(2);
    const trees = map.createStaticLayer("TREES", tileset, 0, 0).setScale(2);
    const hills = map.createStaticLayer("HILLS", tileset, 0, 0).setScale(2);
    const hills2 = map.createStaticLayer("HILLS 2", tileset, 0, 0).setScale(2);
    const clouds = map.createStaticLayer("CLOUDS", tileset, 0, 0).setScale(2);
    const mountains = map
      .createStaticLayer("MOUNTAINS", tileset, 0, 0)
      .setScale(2);
    const clouds2 = map
      .createStaticLayer("CLOUDS 2", tileset, 0, 0)
      .setScale(2);
    const mountains2 = map
      .createStaticLayer("MOUNTAINS 2", tileset, 0, 0)
      .setScale(2);
    const buildings = map
      .createStaticLayer("BUILDINGS", tileset, 0, 0)
      .setScale(2);
    collision.setCollisionBetween(0, 2);

    // DEPTH SO CHARACTER CAN WALK BEHIND OR IN FRONT:
    buildings.setDepth(0);
    grass.setDepth(0);
    path.setDepth(0);
    hills.setDepth(0);
    hills2.setDepth(0);
    trees.setDepth(0);
    clouds.setDepth(0);
    clouds2.setDepth(0);
    collision.setDepth(0);

    // PLAYER :
    this.player = this.physics.add.sprite(48, 528, "player").setScale(1);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.body.collideWorldBounds = true;
    this.physics.add.collider(this.player, collision);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", {
        start: this.spriteView.left[0],
        end: this.spriteView.left[1],
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", {
        start: this.spriteView.right[0],
        end: this.spriteView.right[1],
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", {
        start: this.spriteView.up[0],
        end: this.spriteView.up[1],
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", {
        start: this.spriteView.down[0],
        end: this.spriteView.down[1],
      }),
      frameRate: 5,
      repeat: -1,
    });

    //HULK COLLISION GHOSTS

    const hulk1 = this.physics.add
      .sprite(144, 528, "hulk")
      .setScale(2)
      .setVisible(false);
    hulk1.body.immovable = true;
    this.physics.add.collider(hulk1, this.player);

    const hulk2 = this.physics.add
      .sprite(336, 400, "hulk")
      .setScale(2)
      .setVisible(false);
    hulk2.body.immovable = true;
    this.physics.add.collider(hulk2, this.player);

    const hulk3 = this.physics.add
      .sprite(464, 240, "hulk")
      .setScale(2)
      .setVisible(false);
    hulk3.body.immovable = true;
    this.physics.add.collider(hulk3, this.player);

    const hulk4 = this.physics.add
      .sprite(624, 144, "hulk")
      .setScale(2)
      .setVisible(false);
    hulk4.body.immovable = true;
    this.physics.add.collider(hulk4, this.player);

    // Static EVENT GHOST Sprite:
    const scene1Ghost = this.physics.add.sprite(112, 528, "player");
    scene1Ghost.setVisible(false);
    const scene2Ghost = this.physics.add.sprite(304, 400, "player");
    scene2Ghost.setVisible(false);
    const scene3Ghost = this.physics.add.sprite(464, 272, "player");
    scene3Ghost.setVisible(false);
    const scene4Ghost = this.physics.add.sprite(624, 176, "player");
    scene4Ghost.setVisible(false);
    const scene5Ghost = this.physics.add.sprite(752, 80, "player");
    scene5Ghost.setVisible(false);

    // Create Scene button - set button to invisible until event:
    const button = this.add.image(0, 0, "button");
    const container = this.add.container(400, 580, [button]);
    container.setSize(button.width, button.height).setScale(0.3);
    container.setInteractive();
    container.setVisible(false);

    // Interaction with Ghost sprites - brings up option to enter new scene based on location and use space bar to enter scene!
    // Enter scene button appears on overlap with Ghost sprites!
    this.physics.add.overlap(
      this.player,
      scene1Ghost,
      () => {
        if (
          this.player.y === 528 &&
          this.player.x > 100 &&
          this.player.x < 120
        ) {
          container.setVisible(true);

          if (this.cursors.space.isDown) {
            window.advanceScene();
            hulk1.destroy();
            scene1Ghost.destroy();
            container.setVisible(false);
          }
        } else {
          container.setVisible(false);
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      scene2Ghost,
      () => {
        if (
          this.player.y === 400 &&
          this.player.x > 300 &&
          this.player.x < 320
        ) {
          container.setVisible(true);
          if (this.cursors.space.isDown) {
            window.advanceScene();
            hulk2.destroy();
            scene2Ghost.destroy();
            container.setVisible(false);
          }
        } else {
          container.setVisible(false);
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      scene3Ghost,
      () => {
        if (
          this.player.x === 464 &&
          this.player.y > 260 &&
          this.player.y < 280
        ) {
          container.setVisible(true);
          if (this.cursors.space.isDown) {
            window.advanceScene();
            hulk3.destroy();
            scene3Ghost.destroy();
            container.setVisible(false);
          }
        } else {
          container.setVisible(false);
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      scene4Ghost,
      () => {
        if (
          this.player.x === 624 &&
          this.player.y > 160 &&
          this.player.y < 180
        ) {
          container.setVisible(true);
          if (this.cursors.space.isDown) {
            window.advanceScene();
            hulk4.destroy();
            scene4Ghost.destroy();
            container.setVisible(false);
          }
        } else {
          container.setVisible(false);
        }
      },
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      scene5Ghost,
      () => {
        if (
          this.player.x === 752 &&
          this.player.y >= 80 &&
          this.player.y < 100
        ) {
          container.setVisible(true);
          if (this.cursors.space.isDown) {
            window.advanceScene();
            scene5Ghost.destroy();
            container.setVisible(false);
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
    if (document.getElementById("game-container").style.display === "block") {
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
    }

    // Console logging the player position x and y:
    //   if (this.tempx !== this.player.x || this.tempy !== this.player.y) {
    //     this.tempx = this.player.x;
    //     this.tempy = this.player.y;
    //     console.log("xy: ", this.tempx, this.tempy);
    //   }
  }
}
export default World;
