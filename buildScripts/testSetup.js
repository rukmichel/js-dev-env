//Register babel to transpile before our tests run.
require('@babel/register')();

require.extensions['.css'] = function() {};
