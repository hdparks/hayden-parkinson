$(document).ready(()=>{
  let descriptors= $('.traits-list>*');

  let randNum = (x)=>{
    return Math.floor(Math.random() * x + 1);
  }

  let threeRandNumbers = (x) => {
    let seed = randNum(x - 1);
    let nums = [seed];
    seed = (seed+3 <= x ? seed+3 : seed+3 - x);
    nums.push(seed);
    seed = (seed+3 <= x ? seed+3 : seed+3 - x);
    nums.push(seed);
    return nums;
  }

  let adjectives = threeRandNumbers(descriptors.length);
  $(`.traits-list>li:nth-of-type(${adjectives[0]})`).css({"display":"inline", "top":"-50px", "opacity":"0"}).animate({"top":"0", "opacity":"1"},"slow", ()=>{
    setTimeout(()=>{
      $(`.traits-list>li:nth-of-type(${adjectives[0]})`).animate({"top":"50px","opacity":"0", "display":"none"},"slow");
      $(`.traits-list>li:nth-child(${adjectives[1]})`).css({"display":"inline", "top":"-50px", "opacity":"0"}).animate({"top":"0", "opacity":"1"},"slow", ()=>{
        setTimeout(()=>{
          $(`.traits-list>li:nth-of-type(${adjectives[1]})`).animate({"top":"50px","opacity":"0", "display":"none"},"slow");
          $(`.traits-list>li:nth-child(${adjectives[2]})`).css({"display":"inline", "top":"-50px", "opacity":"0"}).animate({"top":"0", "opacity":"1"},"slow", ()=>{
            setTimeout(()=>{
              $(`.traits-list>li:nth-of-type(${adjectives[2]})`).animate({"top":"50px","opacity":"0", "display":"none"},"slow");
              $(`li.name`).css({"display":"inline", "top":"-50px", "opacity":"0"}).animate({"top":"0", "opacity":"1"},"slow");
            },1000);
          });
        },1000);
      });
    },1000);
  });

});
