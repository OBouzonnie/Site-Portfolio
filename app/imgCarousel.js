'use strict'

const imgCarousel = [
  "../ressources/artiom-vallat-h9m8Xsy-n0Q-unsplash.jpg",
  "../ressources/easycab-mauritius-BOvUo1X_Zx0-unsplash.jpg",
  "../ressources/fabienne-sypowski-meyer-EBUBRr9i4bk-unsplash.jpg",
  "../ressources/francesco-ungaro-3SwFM8WtdI8-unsplash.jpg",
  "../ressources/easycab-mauritius-L2KPNPVvM6o-unsplash.jpg",
  "../ressources/jeremy-wermeille-lKLph2PRYVE-unsplash.jpg",
  "../ressources/jeremy-wermeille-wAgVenPLKfM-unsplash.jpg",
  "../ressources/jeremy-wermeille-ZR3WHOQeidI-unsplash.jpg",
  "../ressources/shubham-bochiwal-BYYu5nvQoUM-unsplash.jpg",
  "../ressources/teodor-kuduschiev-Dldhc4YiWrU-unsplash.jpg"
]

const index = 0;

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  shuffleArray(imgCarousel);

export default imgCarousel