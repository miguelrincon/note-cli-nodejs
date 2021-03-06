# A NodesJS CLI app

The notes app saves notes using CLI commands and puts them in disk.

Use `--help` for comand list and usage.

``` bash
$ node app.js --help
$ node app.js <command> --help
```


## Some interesting points

Create a command using `yargs` and returning the arguments on `argv`:

``` js
const argv = yargs
  .command('add', 'Add a new note.', {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    }
  })
```

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

