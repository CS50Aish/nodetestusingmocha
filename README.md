# nodetestusingmocha
Project on Node Test using mocha

labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodetestusingmocha) 
version: (1.0.0) 
description: Project on Mocha
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya Waghmare
license: (ISC) 
About to write to /home/labuser/Desktop/nodetestusingmocha/package.json:

{
  "name": "nodetestusingmocha",
  "version": "1.0.0",
  "description": "Project on Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya Waghmare",
  "license": "ISC"
}


Is this OK? (yes) 
labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ npm init -y
Wrote to /home/labuser/Desktop/nodetestusingmocha/package.json:

{
  "name": "nodetestusingmocha",
  "version": "1.0.0",
  "description": "Project on Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya Waghmare",
  "license": "ISC",
  "keywords": []
}

labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ npm install mocha -D 
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@8.1.0: Glob versions prior to v9 are no longer supported

added 72 packages, and audited 73 packages in 6s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ touch Operation.js
labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ touch OperationTest.js

labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ mocha OperationTest.js 


  Operation Testing
    ✔ Addition Testing


  1 passing (3ms)

labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ mkdir ExpressionAndArrowStyle
labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ cd ExpressionAndArrowStyle/
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/ExpressionAndArrowStyle$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (expressionandarrowstyle) 
version: (1.0.0) 
description: Project on Mocha
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya Waghmare
license: (ISC) 
About to write to /home/labuser/Desktop/nodetestusingmocha/ExpressionAndArrowStyle/package.json:

{
  "name": "expressionandarrowstyle",
  "version": "1.0.0",
  "description": "Project on Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya Waghmare",
  "license": "ISC"
}


Is this OK? (yes) 
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/ExpressionAndArrowStyle$ npm init -y
Wrote to /home/labuser/Desktop/nodetestusingmocha/ExpressionAndArrowStyle/package.json:

{
  "name": "expressionandarrowstyle",
  "version": "1.0.0",
  "description": "Project on Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya Waghmare",
  "license": "ISC",
  "keywords": []
}


labuser@ubuntu2204:~/Desktop/nodetestusingmocha/ExpressionAndArrowStyle$ npm install mocha -D
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@8.1.0: Glob versions prior to v9 are no longer supported

added 72 packages, and audited 73 packages in 4s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities