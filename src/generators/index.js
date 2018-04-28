const nodeZeroTwelve = require('./0_12');

const generators = {
  node_0_12: {
    key: 'node_0_12',
    name: 'Node (0.12.x)',
    language: 'JavaScript',
    description: 'Node client using the request http lib',
    attributes: [],
    generator: nodeZeroTwelve,
  },

  node_5_es5: {
    key: 'node_5_es5',
    name: 'Node (5.x.x)',
    language: 'JavaScript',
    description: 'Node 5 client - compiled version of node_5_es6',
    attributes: [],
  },

  node_5_es6: {
    key: 'node_5_es6',
    name: 'Node (5.x.x) ES6 / Babel',
    language: 'JavaScript',
    description: 'Node 5 client written in ES6 (requires babel or other compiler)',
    attributes: [],
  },

  js_isomorphic: {
    key: 'js_isomorphic',
    name: 'Javascript (Isomorphic)',
    language: 'JavaScript',
    description: 'Node 6 client written in ES6 (requires babel or other compiler). Leverages @flowio/lib-apidoc',
    attributes: [],
  },
};

module.exports = generators;
