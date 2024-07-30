// process.stdin.pipe(process.stdout);

import { Readable, Writable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

class MultiplyByTenStream extends Writable {
  //Chunck: pedaço que a foi lido pela stream de leitura this.push(buf);
  //Encoding: tipo de codificação (utf8, latin1, etc)
  //Callback: quando o processo de escrita terminar
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream().pipe(new MultiplyByTenStream());
