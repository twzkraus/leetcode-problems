/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const counts = {};

  var count = (subdomain, num) => {
    if (!counts[subdomain]) {
      counts[subdomain] = 0;
    }
    counts[subdomain] += num;
  }

  cpdomains.forEach(cpdomain => {
    let [num, domain] = cpdomain.split(' ');
    let segments = domain.split('.');
    while (segments.length) {
      let miniDomain = segments.join('.');
      count(miniDomain, parseInt(num));
      segments = segments.slice(1);
    }
  });

  const result = [];
  for (let key in counts) {
    result.push(`${counts[key]} ${key}`);
  }

  return result;
};