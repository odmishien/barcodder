setInterval(() => {
  let stringSpansHTMLCollections = document.getElementsByClassName(
    "css-901oao css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0"
  );
  let hashtagSpansHTMLCollections = document.getElementsByClassName(
    "css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"
  );
  let colorHashtagSpansHTMLCollections = document.getElementsByClassName(
    "css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1n1174f r-1loqt21 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"
  );

  let timeHTMLCollections = document.getElementsByTagName("time");

  let stringSpans = Array.prototype.slice.call(stringSpansHTMLCollections);
  let hashtagSpans = Array.prototype.slice.call(hashtagSpansHTMLCollections);
  let colorHashtagSpans = Array.prototype.slice.call(
    colorHashtagSpansHTMLCollections
  );
  let times = Array.prototype.slice.call(timeHTMLCollections);

  let qrCanvasSpans = stringSpans.concat(hashtagSpans);
  qrCanvasSpans = stringSpans.concat(colorHashtagSpans);
  qrCanvasSpans = stringSpans.concat(times);

  qrCanvasSpans.forEach(element => {
    console.log(element.tagName);
    if (element.tagName !== "A") {
      let strings = element.textContent;
      if (strings !== "") {
        element.innerText = "";
        let canvas = document.createElement("canvas");
        writeQr(canvas, strings);
        element.insertAdjacentElement("afterbegin", canvas);
      }
    } else {
      element.textContent = null;
    }
  });
}, 1000);

function writeQr(canvas, data) {
  return new Promise((res, rej) => {
    QRCode.toCanvas(
      canvas,
      data,
      {
        margin: 2,
        scale: 2
      },
      (err, tg) => (!err ? res(tg) : rej(err))
    );
  });
}
