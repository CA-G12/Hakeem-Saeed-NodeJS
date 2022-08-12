const searchCharacter = (charactersArr, str) => {
  return charactersArr.filter(item => {
    return item.name.includes(str);
  })
}