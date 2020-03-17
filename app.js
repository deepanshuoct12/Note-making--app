//taking input from command line//
/*const command = process.argv[2]
console.log(process.argv)
if(command === 'add')
{
    console.log('adding the note')
}
else if(command === 'remove')
{
    console.log('removing the note')
}
*/

//yargs library//
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')// customize yargs version
//add command
yargs.command({
   command : 'add',
   describe : 'add a new note',
   builder :{
    title :{
         describe : 'Note title',
         demandOption: true,
         type : 'String'
    },
    body :{
        describe : 'Note body',
        demandOption: 'true',
        type:'string'
    }
},
   handler(argv){
      notes.addnotes(argv.title,argv.body)
       //console.log('Title' +': ' + argv.title + '  ' + 'Body' + ':' +  argv.body)
   } 
})

//remove command
yargs.command({
    command : 'remove',
    describe : 'add a new note',
    builder :{
     title :{
          describe : 'Note title',
          demandOption: true,
          type : 'String'
     }
    },
  //  describe : 'removing a  note',
    handler : function(argv){
        notes.removenote(argv.title)
       
    }
})
//list command
yargs.command({
    command : 'list',
    describe : 'list your notes',
    handler : function(){
        notes.listnotes()
        //console.log('list out all your notes')
    }
})
//read command
yargs.command({
    command : 'read',
    describe : 'read the note',
    builder :{
        title :{
             describe : 'Note title',
             demandOption: true,
             type : 'String'
        } 
    },
    handler : function(argv){
        notes.readnotes(argv.title)
        //console.log('read the note')
    }
})

yargs.parse()
//console.log(yargs.argv)// print yargs what contain

//get notes and write//
// const getnotes = require('./notes.js')
//  const msg = getnotes()
// console.log(msg)


//chk weather url is correct or not//
// const validator = require('validator')
// console.log(validator.isURL('htt/nead.io'))


//print success,message in green//
// const chalk = require('chalk')
// const msg = chalk.red.inverse.bold('message')
// console.log(msg)
//console.log(chalk.red('Success'))  


//add function//
// const add = require('./utils.js')
// const sum = add(4,3)
// console.log(sum)


//writing in a file fs//
// const fs = require('fs')
//fs.appendFileSync('notes.txt','  delhi technological university')
//fs.writeFileSync('notes.txt','my name is deepanshu')


//importing name//
// const name = require('./utils.js')
// console.log(name)