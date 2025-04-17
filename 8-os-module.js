const os = require("os");
const user = os.userInfo();
console.log(user);
console.log(`uptime ${os.uptime()} seconds`);

const currentos = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
  usedmem:os.totalmem-os.freemem
};
console.log(currentos);
