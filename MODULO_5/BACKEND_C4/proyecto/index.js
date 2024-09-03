// import { createReadStream } from 'fs';
import { error } from "console"
import { readFile, appendFile, open, writeFile, write, unlink } from "fs"

unlink('file.txt', (error) => {
    if(error) console.error(error)
    else console.log("file deleted") 
})

// writeFile('file.txt', "Hello World 2", (error) => {
//     if (error) console.error(error)
//     else console.log("file created")
// })

// open('file.txt', 'w' , (error, file) => {
//     if(error) console.error(error)
//     else console.log("file opened")
// })

// readFile('file.txt', (error, data) => {
//     if (error) console.error(error)
//     else console.log(data)
// })

// appendFile('file.txt', ", hello world 2", (error) => {
//     if(error) console.log(error)
//     else console.log("file updated")
// })




// const dataToBuffer = Buffer.from("Hello World, this is a buffer");
// console.log(dataToBuffer);

// const stream = createReadStream('file.txt');
// console.log(stream)
// stream.on('readable', () => {
//     const data = stream.read(2);
//     if (data) {
//         console.log(data);
//         console.log(data.toString());
//     }
// });

// stream.on('open', () => {
//     console.log('file opened')
// })
// stream.on('data', (chunk) => {
//     console.log(chunk)
//     console.log(chunk.toString())
// })
// stream.on('close', () => {
//     console.log('file closed')
// })

// streaming 
// Buffer