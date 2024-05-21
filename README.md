# queue-handler

to install
```
git clone LexRiver/queue-handler
```

```
npm install
```

```
npm run start
```

First we add 3 functions.

Then we start listening for user input.

At the same time we start 2 timers to add 2 more functions.

On first user input we execute first function with first user input as parameter for this function. Then we remove 1st function and 1st parameter from queue.

On second user input we execute second function with second user parameters and so on.

If no more functions then we quit.

see `./src/index.ts` to start.
