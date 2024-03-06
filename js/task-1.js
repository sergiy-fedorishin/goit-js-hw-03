function slugify(title) {
  title = title.toLowerCase();
  let slug = title.split(' ').join('-');
  

  return slug;
}

console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
