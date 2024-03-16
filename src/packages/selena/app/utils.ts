function formatBytes(Ebit: string): string {
  var mb = Number(Ebit) / 1000000;
  var pointless = String(mb).split(".")[0] + "mb";

  return pointless;
}

function bitToMb(a: any, b: any = 2) {
  if (!+a) return "0 Bytes";
  const c = 0 > b ? 0 : b,
    d = Math.floor(Math.log(a) / Math.log(1024));
  return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${
    ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"][d]
  }`;
}

function prettifyTitle(title: string, using: string = " ") {
  var disallowed = ["/", "\\", ":", "*", "?", '"', "<", ">", "|", ":"];
  disallowed.forEach((n) => {
    title = title.replaceAll(n, using);
  });
  return title;
}

function widthToK(width: string) {
  
  var widthN = Number(width)

  if (widthN >= 7000) {
    return "8K";
  } else if (widthN >= 3000) {
    return "4K";
  } else if (widthN >= 2000) {
    return "2K";
  } else if (widthN >= 1000) {
    return "HD";
  } else if (widthN >= 760) {
    return "low";
  } else {
    return 'poor'
  }
}


function colN(widthN: number) {
  if (widthN >= 2200) {
    return 6;
  } else if (widthN > 1600) {
    return 6;
  } else if (widthN > 1440) {
    return 5;
  } else if (widthN > 1200) {
    return 4;
  } else if (widthN > 1100) {
    return 3;
  } else if (widthN > 850) {
    return 2;
  } else {
    return 1
  }
}

export {
    bitToMb, prettifyTitle, widthToK,colN
}