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

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/ExpressionAndArrowStyle$ mocha appTest.js 


  Simple Testing using expression style
    ✔ sayHello testing using expression style

  Simple Testing using arrow style
    ✔ sayHello testing using arrow style


  2 passing (16ms)

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/ExpressionAndArrowStyle$ cd ..
labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ mkdir SyncAsyncTest
labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ cd SyncAsyncTest/
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/SyncAsyncTest$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (syncasynctest) 
version: (1.0.0) 
description: Project on Asynchronous and Synchronous Mocha Node 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya Waghmare
license: (ISC) 
About to write to /home/labuser/Desktop/nodetestusingmocha/SyncAsyncTest/package.json:

{
  "name": "syncasynctest",
  "version": "1.0.0",
  "description": "Project on Asynchronous and Synchronous Mocha Node ",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya Waghmare",
  "license": "ISC"
}


Is this OK? (yes) 
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/SyncAsyncTest$ npm init -y
Wrote to /home/labuser/Desktop/nodetestusingmocha/SyncAsyncTest/package.json:

{
  "name": "syncasynctest",
  "version": "1.0.0",
  "description": "Project on Asynchronous and Synchronous Mocha Node ",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya Waghmare",
  "license": "ISC",
  "keywords": []
}


labuser@ubuntu2204:~/Desktop/nodetestusingmocha/SyncAsyncTest$ npm install mocha -D
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@8.1.0: Glob versions prior to v9 are no longer supported

added 72 packages, and audited 73 packages in 6s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/SyncAsyncTest/test$ npm test

> syncasynctest@1.0.0 test
> mocha test/*.js



  Function Testing 
    ✔ Synchronous Add Testing 
    ✔ Asynchronous Add Testing 


  2 passing (12ms)

labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ mkdir AssertionLibrary
labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ cd AssertionLibrary/
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/AssertionLibrary$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (assertionlibrary) 
version: (1.0.0) 
description: Project on Mocha
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya
license: (ISC) 
About to write to /home/labuser/Desktop/nodetestusingmocha/AssertionLibrary/package.json:

{
  "name": "assertionlibrary",
  "version": "1.0.0",
  "description": "Project on Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC"
}


Is this OK? (yes) 
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/AssertionLibrary$ npm init -y
Wrote to /home/labuser/Desktop/nodetestusingmocha/AssertionLibrary/package.json:

{
  "name": "assertionlibrary",
  "version": "1.0.0",
  "description": "Project on Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC",
  "keywords": []
}

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/AssertionLibrary$ npm install mocha -D
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@8.1.0: Glob versions prior to v9 are no longer supported

added 72 packages, and audited 73 packages in 7s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/AssertionLibrary$ mocha appTest.js 


  0 passing (1ms)

labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ mkdir PromiseTestUsingMocha
labuser@ubuntu2204:~/Desktop/nodetestusingmocha$ cd PromiseTestUsingMocha/
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (promisetestusingmocha) 
version: (1.0.0) 
description: Projects on Mocha
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya
license: (ISC) 
About to write to /home/labuser/Desktop/nodetestusingmocha/PromiseTestUsingMocha/package.json:

{
  "name": "promisetestusingmocha",
  "version": "1.0.0",
  "description": "Projects on Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC"
}


Is this OK? (yes) 
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha$ npm init -y
Wrote to /home/labuser/Desktop/nodetestusingmocha/PromiseTestUsingMocha/package.json:

{
  "name": "promisetestusingmocha",
  "version": "1.0.0",
  "description": "Projects on Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC",
  "keywords": []
}


labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha$ npm install mocha -D
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@8.1.0: Glob versions prior to v9 are no longer supported

added 72 packages, and audited 73 packages in 5s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha$ mkdir src test
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha$ cd src
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/src$ touch api.js app.js
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/src$ cd ..
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha$ cd test/
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/test$ touch appTest.js

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/test$ npm test

> promisetestusingmocha@1.0.0 test
> mocha test/*.js



  Promise Fake Test API
    ✔ Product Found Test (1003ms)
    ✔ Product Not Found Test (1000ms)


  2 passing (2s)

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha$ mkdir DetectMultipleCallUsingDone
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha$ cd DetectMultipleCallUsingDone/
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (detectmultiplecallusingdone) 
version: (1.0.0) 
description: Project using Mocha
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya
license: (ISC) 
About to write to /home/labuser/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone/package.json:

{
  "name": "detectmultiplecallusingdone",
  "version": "1.0.0",
  "description": "Project using Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC"
}


Is this OK? (yes) 
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone$ npm init -y
Wrote to /home/labuser/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone/package.json:

{
  "name": "detectmultiplecallusingdone",
  "version": "1.0.0",
  "description": "Project using Mocha",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC",
  "keywords": []
}


labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone$ npm install mocha -D
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@8.1.0: Glob versions prior to v9 are no longer supported

added 72 packages, and audited 73 packages in 6s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone$ mkdir src test
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone$ cd src/
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone/src$ touch app.js
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone/src$ cd ..
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone$ cd test/
labuser@ubuntu2204:~/Desktop/nodetestusingmocha/PromiseTestUsingMocha/DetectMultipleCallUsingDone/test$ touch appTest.js

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/DetectMultipleCallUsingDone/src$ npm install node-fetch-commonjs -D

added 3 packages, and audited 76 packages in 2s

22 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/DetectMultipleCallUsingDone/src$ npm install node-fetch

added 4 packages, and audited 80 packages in 2s

24 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/nodetestusingmocha/DetectMultipleCallUsingDone$ npm test

> detectmultiplecallusingdone@1.0.0 test
> mocha test/*.js



  Testing Fake Rest API
    ✔ Check Fake Rest API number of products  (834ms)
    ✔ Check Fake Rest API any product details using index position  (213ms)


  2 passing (1s)