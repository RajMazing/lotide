//Looping

const bigFoot = {
  name: 'lisa',
  numToes: 10,
  isTall: true,
  relatives: ['yeti', 'gigantopihecus', 'chewbacca']
};

// c-style for loop / for .. of / for.. in 



for (const key in bigFoot) {
  console.log(key);
  console.log("bigFoot[key] ==>", bigFoot[key])
}
