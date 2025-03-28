//  promosofied version of setTimeout

function promisifiedSetTimeOut(time) {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve();
    }, time);
  })
}

function printHello() {
  console.log("hello after 4 sec");
}

const p = promisifiedSetTimeOut(4000);
p.then(printHello);
