function toggleBit(num, pos) {
  return num ^ (1 << pos);
}

function setBit(num, pos) {
  return num | (1 << pos);
}

function clearBit(num, pos) {
  return num & ~(1 << pos);
}

function isBitSet(num, pos) {
  return (num & (1 << pos)) !== 0;
}

function setMultipleBits(num, mask) {
  return num | mask;
}

function clearMultipleBits(num, mask) {
  return num & ~mask;
}

function toggleMultipleBits(num, mask) {
  return num ^ mask;
}
