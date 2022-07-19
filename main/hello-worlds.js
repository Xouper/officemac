let company = {
  sales: [{
    name: 'John',
    salary: 3000,
  },
  {
    name: 'Lisa',
    salary: 1000,
  }],
  development: {
    sites: [{
      name: 'Alex',
      salary: 4500,
    },
    {
      name: "Kate",
      salary: 400,

  }],
    internals: [{
      name: "Dima",
      salary: 10000,
    }]
  }
}
function sumSalaries(dev) {
  let sum = 0
  if (Array.isArray(dev)) {
    return dev.reduce((prev, current) => prev + current.salary, sum)
  } else {
    for (el of Object.values(dev)){
      sum += sumSalaries(el)
    }
    return sum
  }
}
console.log(sumSalaries(company))