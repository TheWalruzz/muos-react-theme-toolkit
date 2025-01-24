// Source: https://stackoverflow.com/questions/29652307/canvas-unable-to-generate-bmp-image-dataurl-in-chrome
export class CanvasToBMP {
  private view: DataView = new DataView(new ArrayBuffer(0));
  private pos = 0;

  toArrayBuffer(canvas: HTMLCanvasElement): ArrayBuffer {
    const w = canvas.width;
    const h = canvas.height;
    const w4 = w * 4;
    const idata = (
      canvas.getContext("2d") as CanvasRenderingContext2D
    ).getImageData(0, 0, w, h);
    const data32 = new Uint32Array(idata.data.buffer); // 32-bit representation of canvas

    const stride = Math.floor((32 * w + 31) / 32) * 4; // row length incl. padding
    const pixelArraySize = stride * h; // total bitmap size
    const fileLength = 122 + pixelArraySize; // header size is known + bitmap

    const file = new ArrayBuffer(fileLength); // raw byte buffer (returned)
    this.view = new DataView(file); // handle endian, reg. width etc.
    let x = 0;
    let y = 0;
    let p = 0;
    let s = 0;
    let alpha = 0;
    let abgr = 0;

    this.setU16(0x4d42); // BM
    this.setU32(fileLength); // total length
    this.pos += 4; // skip unused fields
    this.setU32(0x7a); // offset to pixels

    // DIB header
    this.setU32(108); // header size
    this.setU32(w);
    this.setU32(-h >>> 0); // negative = top-to-bottom
    this.setU16(1); // 1 plane
    this.setU16(32); // 32-bits (RGBA)
    this.setU32(3); // no compression (BI_BITFIELDS, 3)
    this.setU32(pixelArraySize); // bitmap size incl. padding (stride x height)
    this.setU32(2835); // pixels/meter h (~72 DPI x 39.3701 inch/m)
    this.setU32(2835); // pixels/meter v
    this.pos += 8; // skip color/important colors
    this.setU32(0xff0000); // red channel mask
    this.setU32(0xff00); // green channel mask
    this.setU32(0xff); // blue channel mask
    this.setU32(0xff000000); // alpha channel mask
    this.setU32(0x57696e20); // " win" color space

    // bitmap data, change order of ABGR to BGRA
    while (y < h) {
      p = 0x7a + y * stride; // offset + stride x height
      x = 0;
      while (x < w4) {
        abgr = data32[s++]; // get ABGR
        alpha = abgr >>> 24; // alpha channel
        this.view.setUint32(p + x, (abgr << 8) | alpha); // set BGRA
        x += 4;
      }
      y++;
    }
    return file;
  }

  // helper method to move current buffer position
  private setU16(data: number) {
    this.view.setUint16(this.pos, data, true);
    this.pos += 2;
  }
  private setU32(data: number) {
    this.view.setUint32(this.pos, data, true);
    this.pos += 4;
  }

  toDataURL(canvas: HTMLCanvasElement): string {
    const buffer = new Uint8Array(this.toArrayBuffer(canvas));
    let bs = "";
    let i = 0;
    const length = buffer.length;
    while (i < length) {
      bs += String.fromCharCode(buffer[i++]);
    }
    return "data:image/bmp;base64," + btoa(bs);
  }
}
