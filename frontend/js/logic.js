const searchCharacter = (charactersArr, str) => {
  return charactersArr.filter((ele) => {
    return ele.name.toLowerCase().includes(str.toLowerCase());
  });
};

const searchUser = (charactersArr, str) => {
  const result = charactersArr.filter((ele) => {
    return ele.id === str;
  });

  return result[0];
};


module.exports = searchCharacter;