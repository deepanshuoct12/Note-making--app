const fs = require('fs')
const chalk = require('chalk')
/*const getnotes = function()
{
    return 'your string'
}*/

//const addnotes = function(title,body)
const addnotes = (title,body)=>{           // arrow function
    const notes = loadnotes()

   // const duplicatenode = notes.filter((note)=>note.title === title)
   /* const duplicatenode = notes.filter(function(note){  //true if duplicate exists
        return note.title === title
    })
*/
  const duplicatenote = notes.find((note)=> note.title === title)
  //if(duplicatenode.length==0)
    if(!duplicatenote)
    {
    notes.push({
        title : title,
        body : body
    })
    console.log('new note added')
   }

   else{
       console.log('note taken already')
   }
    savenotes(notes)
}
//const savenotes = function(notes
const savenotes = (notes) =>
{
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}

//const removenote = function(title) 
const removenote =(title)=>         // remove notes frpm file with a given title
{       
   // console.log(title)
  const notes =loadnotes()
  const notestokeep = notes.filter((note)=> note.title !==title)
   /*const notestokeep = notes.filter(function(note){       // if matching tittle do not found then keep copying data in notes to keep
       return note.title!==title
   })*/
    
   if(notes.length!== notestokeep.length) // if length not equal it means some title got match so instead of that title add rest of ur data in json file
   {
       console.log(chalk.green.inverse('note removed'))
       savenotes(notestokeep)
   }
   else
   {
       console.log(chalk.red.inverse('no note found'))
   }
  
}

const loadnotes =function(){         // read data from json file
    try{
    const databuffer = fs.readFileSync('notes.json')
    const datajson = databuffer.toString()
    return JSON.parse(datajson)
    }
    catch(e)
    {
        return []
    }
}

const listnotes = ()=>{

    console.log(chalk.inverse("Your notes"))

    const notes = loadnotes();
    notes.forEach( (note) => {console.log(note.title) })
}
const readnotes = (title)=>{

    const notes = loadnotes()
    const readnote = notes.find((note)=> note.title === title)

    if(readnote)
    {
        console.log(chalk.inverse(readnote.title))
        console.log(readnote.body)
    }
  
    else{
        console.log(chalk.red("not found"))
    }


}
module.exports = {
    addnotes : addnotes,
    removenote : removenote,
    listnotes : listnotes,
    readnotes : readnotes
}