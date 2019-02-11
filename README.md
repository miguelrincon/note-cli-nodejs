# A simple notes app

The notes app saves notes using CLI commands and puts them in disk.

## Some notes

Use the debugger over the CLI
``` bash
$ node inspect app.js read --title="Note"
```

Use the debugger over the CLI and re-run when files are updated
``` bash
$ nodemon inspect app.js read --title="Note"
```

Use the debugger using Chrome Devtools open `chrome://inspect` and click on "Open dedicated DevTools for Node".
``` bash
$ node --inspect-brk app.js read --title="Note"
```
``` bash
$ nodemon --inspect-brk app.js read --title="Note"
```

Debugger commands:

``` bash
> list(10) # show 10 lines
> n # next line
> c # continue 
```