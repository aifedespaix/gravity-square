import Phaser from "phaser";
import introImage from "./images/profile-picture.png";
import pkg from "phaser/package";

const width = 800;
const height = 600;

const config = {
  width,
  height,
  type: Phaser.AUTO,
  scene: { preload, create }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("study", introImage);
}

function create() {
  const centerX = width / 2;
  const centerY = height / 2;
  const welcomeMessage = `Welcome to Phaser ${pkg.version}`;

  this.add.image(centerX, centerY * 1.2, "study");

  this.add
    .text(centerX, centerY * 0.8, welcomeMessage, {
      font: "bold 19px Arial",
      fill: "#fff"
    })
    .setOrigin(0.5, 0.5);
}