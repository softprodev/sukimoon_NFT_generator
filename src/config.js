const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Suki Moon";
const description = "Suki Moon is a collection of 8888  Suki Warriors  on the Solana Blockchain that come from the mystical lands that lie southeast of the Ushinatta river. The Suki Warriors comprise of  150+ traits  ensuring each Suki is completely unique and has their own story to tell. The SukiVerse is powered by the Seven Suki Pillars:  Suki Warriors, SukiSchool, SukiTribe, SukiStake, SukiScout, Monsters Of Nozomi & The Secret Suki Society";
const baseUri = "";

const solanaMetadata = {
  symbol: "SUKI",
  seller_fee_basis_points: 777, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "sukimoon.xyz",
  creators: [
    {
      address: "AnyreqcBoxYNyRwakh1HCNoRvTW4xDx91rmPiZehH73h",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 9,
    layersOrder: [
      { name: "Background" },
      { name: "Back" },
      { name: "Tribe" },
      { name: "Body" },
      { name: "Face" },
      { name: "Head" },
      { name: "Rune" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  "collection": {
    "name": "Suki Moon",
    "family": "Suki Moon NFT"
  },
  "category": "image",
  "author": "SoftProDev",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
