// Challenge 3 Starter
const product = {
  name: "Southern Spain",
  location: "Valencia",
  price: 100,
  agent: "John",
  bookingId: "25256A"
};

// Your code goes here
for(let property in product){
  console.log(property + ":" + product[property])
}

