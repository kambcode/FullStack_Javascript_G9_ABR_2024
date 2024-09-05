// import { createReadStream } from 'fs';

import { readFile, appendFile, open, writeFile, write, unlink } from "fs"

// CRUD -> Create, Read, Update, Delete

// unlink('file.txt', (error) => {
//     if(error) console.error(error) 
//     else console.log("file deleted") 
// })

// open('file.txt', 'w', (err, file) => {
//     if (err) throw err;
//     const buffer = Buffer.from('Hola mundo');
//     write(file, buffer, 0, buffer.length, null, (err, written) => {
//       if (err) throw err;
//       console.log(`Bytes escritos: ${written}`);
//       close(file, (err) => {
//         if (err) throw err;
//       });
//     });
//   });

// readFile('file.txt', (error, data) => {
//     if (error) console.error(error)
//     else console.log(data.toString())
// })

// appendFile('file.txt', ", hello world 4", (error) => {
//     if(error) console.log(error)
//     else console.log("file updated")
// })

// writeFile('file.txt', "esto es una prueba", (error) => {
//     if (error) console.error(error)
//     else console.log("file created")
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