function collision(rect1, rect2) {
  if (
    rect1.xPos < rect2.xPos + rect2.width &&
    rect1.xPos + rect1.width > rect2.xPos &&
    rect1.yPos < rect2.yPos + rect2.height &&
    rect1.yPos + rect1.height > rect2.yPos
  ) {
    return true;
  }
  return false;
}
