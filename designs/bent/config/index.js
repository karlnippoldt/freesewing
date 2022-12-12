import { version } from '../package.json'

export default {
  version,
  name: 'bent',
  design: 'Joost De Cock',
  code: 'Joost De Cock',
  department: 'tops',
  type: 'block',
  difficulty: 3,
  optionGroups: {
    fit: [
      'chestEase',
      'collarEase',
      'bicepsEase',
      'cuffEase',
      'shoulderEase',
      'lengthBonus',
      'sleeveLengthBonus',
      'sleeveBend',
      'draftForHighBust',
    ],
    style: ['s3Collar', 's3Armhole'],
    advanced: [
      'acrossBackFactor',
      'armholeDepthFactor',
      'backNeckCutout',
      'frontArmholeDeeper',
      'shoulderSlopeReduction',
      'sleevecapHeight',
      'sleevecapEase',
    ],
  },
  measurements: [
    'biceps',
    'chest',
    'hpsToWaistBack',
    'waistToHips',
    'neck',
    'shoulderSlope',
    'shoulderToElbow',
    'shoulderToShoulder',
    'shoulderToWrist',
    'wrist',
  ],
  optionalMeasurements: ['highBust'],
  dependencies: {
    back: 'base',
    front: 'back',
    topSleeve: ['sleeve', 'front'],
    underSleeve: ['sleeve', 'front'],
  },
  inject: {
    back: 'base',
    front: 'back',
    topSleeve: 'sleeve',
    underSleeve: 'sleeve',
  },
  hide: ['base', 'sleeve'],
  options: {
    // Constants
    brianFitSleeve: true,
    brianFitCollar: true,
    collarFactor: 4.8,

    // Percentages
    acrossBackFactor: { pct: 97, min: 93, max: 100 },
    armholeDepthFactor: { pct: 60, min: 50, max: 70 },
    backNeckCutout: { pct: 5, min: 2, max: 8 },
    bicepsEase: { pct: 20, min: 10, max: 40 },
    chestEase: { pct: 8, min: -4, max: 20 },
    collarEase: { pct: 3.5, min: 0, max: 10 },
    cuffEase: { pct: 40, min: 2, max: 100 },
    frontArmholeDeeper: { pct: 0.5, min: 0, max: 1.5 },
    lengthBonus: { pct: 0, min: -4, max: 60 },
    shoulderEase: { pct: 0, min: -2, max: 6 },
    shoulderSlopeReduction: { pct: 0, min: 0, max: 80 },

    sleeveBend: { deg: 10, min: 0, max: 20 },
    sleevecapHeight: { pct: 45, min: 40, max: 60 },
    sleevecapEase: { pct: 1, min: 0, max: 10 },
    sleeveLengthBonus: { pct: 0, min: -20, max: 15 },
    // s3 is short for Shoulder Seam Shift
    s3Collar: { pct: 0, min: -100, max: 100 },
    s3Armhole: { pct: 0, min: -100, max: 100 },

    // draft for high bust
    draftForHighBust: { bool: false },
  },
}