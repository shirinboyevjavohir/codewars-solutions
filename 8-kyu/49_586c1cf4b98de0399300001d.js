function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0;
}

console.log(combat(10, 5));
