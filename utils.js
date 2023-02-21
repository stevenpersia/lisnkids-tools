const cloudinaryTransformations = [
  // iPhone SE, 5, ...
  { width: 320, dpr: 1, crop: "scale" },
  { width: 320, dpr: 1.5, crop: "scale" },
  { width: 320, dpr: 2, crop: "scale" },
  { width: 320, dpr: 3, crop: "scale" },

  // iPhone, Samsung, Huawei, Honor, Motorola, HTC, LG, ...
  { width: 360, dpr: 1, crop: "scale" },
  { width: 360, dpr: 1.5, crop: "scale" },
  { width: 360, dpr: 2, crop: "scale" },
  { width: 360, dpr: 3, crop: "scale" },
  { width: 360, dpr: 4, crop: "scale" },

  // iPhone 6, 7, 8, XS, 11 Pro, ...
  { width: 375, dpr: 1, crop: "scale" },
  { width: 375, dpr: 1.5, crop: "scale" },
  { width: 375, dpr: 2, crop: "scale" },
  { width: 375, dpr: 3, crop: "scale" },

  // Samsung Galaxy S21 Ultra, S20+, ...
  { width: 384, dpr: 1, crop: "scale" },
  { width: 384, dpr: 1.5, crop: "scale" },
  { width: 384, dpr: 2, crop: "scale" },
  { width: 384, dpr: 3.75, crop: "scale" },

  // iPhone 12, 12 Pro, ...
  { width: 390, dpr: 1, crop: "scale" },
  { width: 390, dpr: 1.5, crop: "scale" },
  { width: 390, dpr: 2, crop: "scale" },
  { width: 390, dpr: 3, crop: "scale" },

  // Google Pixel, Xiaomi Mi, Xiaomi Redmi Note, ...
  { width: 393, dpr: 1, crop: "scale" },
  { width: 393, dpr: 1.5, crop: "scale" },
  { width: 393, dpr: 2, crop: "scale" },
  { width: 393, dpr: 2.75, crop: "scale" },
  { width: 393, dpr: 3, crop: "scale" },

  // OnePlus, Samsung Galaxy, Google Pixel, ...
  { width: 411, dpr: 1, crop: "scale" },
  { width: 411, dpr: 1.5, crop: "scale" },
  { width: 411, dpr: 2, crop: "scale" },
  { width: 411, dpr: 2.625, crop: "scale" },
  { width: 411, dpr: 3.5, crop: "scale" },

  // iPhone 11, 11 Pro, XS Max, XR, ...
  { width: 414, dpr: 1, crop: "scale" },
  { width: 414, dpr: 1.5, crop: "scale" },
  { width: 414, dpr: 2, crop: "scale" },
  { width: 414, dpr: 3, crop: "scale" },

  // Google Pixel, ...
  { width: 415, dpr: 1, crop: "scale" },
  { width: 415, dpr: 1.5, crop: "scale" },
  { width: 415, dpr: 2, crop: "scale" },
  { width: 415, dpr: 2.6, crop: "scale" },
  { width: 415, dpr: 3, crop: "scale" },

  // iPhone 12 Pro Max, ...
  { width: 428, dpr: 1, crop: "scale" },
  { width: 428, dpr: 1.5, crop: "scale" },
  { width: 428, dpr: 2, crop: "scale" },
  { width: 428, dpr: 3, crop: "scale" },
];

module.exports = { cloudinaryTransformations };
