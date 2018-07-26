// A simple util to parse IPV4 CIDR
export default function parsecidr(cidr) {
  const [netprefix, digit] = cidr.split('/');
  const start = [];
  const end = [];
  let addrInBit = '';
  netprefix.split('.').map(part => {
    let binary = parseInt(part, 10)
      .toString(2)
      .padStart(8, '0');
    addrInBit += binary;
  });
  let masked = addrInBit.slice(0, digit);
  let maskedMin = masked.slice(0, digit).padEnd(32, '0');
  let maskedMax = masked.slice(0, digit).padEnd(32, '1');
  for (let i = 0; i < 4; i++) {
    start.push(
      parseInt(maskedMin.substring(i * 8, (i + 1) * 8), 2).toString(10)
    );
    end.push(parseInt(maskedMax.substring(i * 8, (i + 1) * 8), 2).toString(10));
  }
  console.log(start.join('.'), '\n', end.join('.'));
}
