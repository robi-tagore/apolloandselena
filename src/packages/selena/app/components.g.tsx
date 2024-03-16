"use client";

import {
  downloadServerRequest,
  resolvedFormats,
  revisedFormat,
} from "@/global";
import React, {
  CSSProperties,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Processer, Rechiever } from "./loader";
import { bitToMb, prettifyTitle } from "./utils";
import env from "@/ENVs";
var h1 = "1.5rem";
var h2 = "1.20rem";
var p = ".95rem";
var s = ".75rem";
var ps = ".85rem";
function GradientText({
  colors,
  deg,
  speed,
  children,
  style,
  animated,
  size,
}: {
  colors?: string[];
  deg?: string;
  speed?: string;
  children: any;
  animated?: boolean;
  style?: CSSProperties;
  size?: string;
}) {
  colors = colors ?? ["#ff00ff", "#00ffff"];
  deg = deg ?? "45";
  speed = speed ?? "2000ms";
  animated = animated ?? false;

  var useColor: string = "";
  colors.forEach((c) => {
    useColor += "," + c;
  });

  return (
    <span
      style={{
        background: `linear-gradient(${deg}deg ${useColor})`,
        backgroundClip: "text",
        color: "transparent",
        backgroundSize: animated ? "200%" : "100%",
        display: "inline-block",
        fontSize: size,
        animation: animated
          ? `animateGradientText ${speed} linear 0s infinite alternate`
          : "none",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function Logo({ size }: { size?: string }) {
  return (
    <GradientText
      style={{
        fontSize: size,
        fontFamily: "Product Sans Regular",
      }}
      // colors={["#FF69B4", "#7FFFD4"]}
      // colors={["#007ACC", "#43C6AC"]}
      deg="-45"
      speed="1000ms"
      key={1}
      animated={true}
    >
      Apollo & Selena
    </GradientText>
  );
}

function Text({
  size,
  children,
  style,
}: {
  size: string;
  children: any;
  style?: CSSProperties;
}) {
  return (
    <GradientText
      style={{
        fontSize: size,
        fontWeight: 400,
        fontFamily: "Product Sans Regular",
        ...style,
      }}
      colors={["#808080", "#808080"]}
    >
      {children}
    </GradientText>
  );
}

function Loader({
  height,
  width,
  speed,
  bglength,
  colors,
  deg,
}: {
  height: string;
  width: string;
  speed: string;
  bglength: string;
  deg: string;
  colors: string[];
}) {
  var useColor: string = "";
  colors.forEach((c) => {
    useColor += "," + c;
  });

  return (
    <span
      style={{
        height: height,
        width: width,
        background: `linear-gradient(${deg}deg ${useColor})`,
        backgroundSize: bglength,
        animation: `animateGradientText ${speed} linear 0s infinite alternate`,
        display: "block",
        borderRadius: "100px",
        // boxShadow:'var(--floatL1)'
      }}
    ></span>
  );
}

function Format({
  format,
  divHeight,
  divWidth,
  style,
  urlPath,
  title,
}: {
  format: revisedFormat;
  divHeight: string;
  divWidth: string;
  urlPath: string;
  title: string;
  style?: CSSProperties;
}) {
  var { ext, media, spec } = format;
  var {
    approxDurationMs,
    audioBitrate,
    audioCodec,
    container,
    contentLength,
    hasAudio,
    hasVideo,
    videoCodec,
    fps,
    height,
    itag,
    width,
    UIVID,
  } = spec;

  var [progress, progressTo] = useState("");
  var [progressBarStyle, progressBarStyleTo]: [CSSProperties, any] = useState(
    {}
  );

  var [progressStyle, progressStyleTo]: [CSSProperties, any] = useState({
    width: "0px",
    opacity: "0",
  });
  var [buttonStyle, buttonStyleTo]: [CSSProperties, any] = useState({});

  var [buttonContent, buttonContentTo] = useState(
    <GradientText
      style={{ fontSize: "2rem" }}
      animated={true}
      deg="45"
      speed="500ms"
    >
      ⤓
    </GradientText>
  );

  async function download() {
    if (progress == "Downloaded") {
      return;
    }

    progressBarStyleTo({
      width: "100%",
      display: "flex",
      padding: "0 10px",
      justifyContent: "space-between",
      borderRadius: "100px",
    });

    buttonStyleTo({
      boxShadow: "none",
      borderRadius: "100px",
      backgroundColor: "transparent",
    });
    buttonContentTo(<Processer></Processer>);

    await new Promise(async (s, f) => {
      setTimeout(() => {
        progressTo("Processing");
        progressStyleTo({ opacity: "1" });
        s("");
      }, 500);
    });

    var requestCred: downloadServerRequest = {
      url: urlPath,
      format: format,
    };

    fetch(env.DOWNLOAD_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        identity: "selena",
      },
      mode: "cors",
      body: JSON.stringify(requestCred),
    })
      .then((d) => {
        if (d.status == 513) {
          return Promise.reject(d.status);
        }

        progressTo("Rechieving");
        buttonContentTo(<Rechiever></Rechiever>);
        return d.blob();
      })
      .then((blobed) => {
        var tempButton = document.createElement("a");
        tempButton.href = URL.createObjectURL(blobed);
        tempButton.download = `${prettifyTitle(title)}.${container}`;

        tempButton.click();
        progressTo("Downloaded");
        buttonContentTo(
          <GradientText
            style={{ fontSize: "2rem" }}
            animated={true}
            deg="45"
            speed="500ms"
          >
            ✓
          </GradientText>
        );
      })
      .catch((e) => {
        var errMsg: string = "";
        if (e.message == "Failed to fetch") {
          errMsg = "Network Err ✗";
        } else if ((e = 513)) {
          errMsg = "Err Processing ✗";
        } else {
          errMsg = "Err (CC) ✗";
        }

        progressTo(errMsg);
        buttonContentTo(
          <GradientText
            style={{ fontSize: "2rem" }}
            animated={true}
            deg="45"
            speed="500ms"
          >
            ⟳
          </GradientText>
        );
      });
  }

  return (
    <div
      className="selenaFormat"
      style={{
        height: divHeight,
        width: divWidth,
        margin: "5%",
        ...style,
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
        className="cxy"
      >
        <div
          style={{
            height: "calc(100% - 40px)",
            width: "calc(100% - 45px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div style={{ height: "90px", width: "100%" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "8px",
                boxShadow: "none",
              }}
              className="cxy"
            >
              <GradientText animated={true} size={h2}>
                {media == "a" ? "audio " : "video "}.{container}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <GradientText
                  animated={true}
                  size={h1}
                  style={{ fontFamily: "Product Sans Black" }}
                  speed="500ms"
                >
                  {!["poor", "low"].includes(UIVID) ? `${UIVID}` : ""}
                </GradientText>
              </GradientText>
            </div>
          </div>

          <div style={{ height: "auto", width: "100%" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                lineHeight: "1.5",
                flexDirection: "column",
              }}
              className="cxy"
            >
              {!hasVideo ? (
                ""
              ) : (
                <div>
                  <Text size={p}>
                    {" "}
                    <Text size={s}> Resoluton :</Text> {width + "x" + height}
                    px
                  </Text>
                </div>
              )}

              <div>
                <Text size={p}>
                  <Text size={s}>Bitrate</Text> : {audioBitrate}kbps{" "}
                </Text>
              </div>

              <Text size={p}>
                <Text size={s}>Size</Text> : ≈{bitToMb(contentLength)}{" "}
              </Text>

              {!hasVideo ? (
                ""
              ) : (
                <Text size={p}>
                  <Text size={s}>FPS</Text> : {fps}{" "}
                </Text>
              )}

              <span style={{ margin: "10px 0" }}></span>

              {!hasVideo ? (
                ""
              ) : (
                <Text size={p}>
                  <Text size={s}>Video Codec</Text> :{" "}
                  {videoCodec.slice(0, 13 ^ 2)}...{" "}
                </Text>
              )}

              <Text size={p}>
                <Text size={s}>Audio Codec</Text> : {audioCodec}{" "}
              </Text>
            </div>
          </div>

          <div
            style={{
              height: "100px",
              width: "100%",
              display: "flex",
              margin: "30px 0 0 0",
            }}
            className="cy"
          >
            <div className="webdownload" style={progressBarStyle}>
              <div style={progressStyle}>
                {" "}
                <GradientText
                  style={{ margin: "0 0 0 20px " }}
                  size={p}
                  animated={true}
                  speed="500ms"
                >
                  {progress}
                </GradientText>
              </div>
              <button
                style={buttonStyle}
                type="button"
                className="cxy"
                onClick={download}
              >
                {buttonContent}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormatList({
  formats,
  spacing,
  minWidth,
  divHeight,
  url,
  title,
}: {
  formats: revisedFormat[];
  spacing: string;
  minWidth: string;
  divHeight: string;
  url: string;
  title: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
        columnGap: spacing,
        rowGap: spacing,
      }}
    >
      {formats.map((f, i) => (
        <div key={i} style={{ display: "inline-flex" }} className="cxy">
          <Format
            title={title}
            urlPath={url}
            divHeight={divHeight}
            divWidth="100%"
            format={f}
          ></Format>
        </div>
      ))}
    </div>
  );
}

function CheckishList({
  parentStyle,
  childStyle,
  children,
  childClass,
  parentClass,
  passer,
}: {
  parentStyle: CSSProperties;
  childStyle: CSSProperties;
  children: object;
  childClass?: any;
  parentClass?: any;
  passer?: any;
}) {
  var options = children;
  var [field, fieldTo]: [string[], Function] = useState([]);

  useEffect(() => {
    passer(field);
  }, [field]);

  return (
    <div style={{ display: "inline-block", borderRadius: "" }}>
      <div style={parentStyle} className={parentClass}>
        {Object.keys(options).map((k, i) => {
          var fieldKey = k;
          var fieldTitle = Object.values(options)[i];

          return (
            <div
              key={i}
              style={childStyle}
              className={childClass}
              onClick={(e) => {
                if (!field.includes(fieldKey)) {
                  var newField = field;
                  newField.push(fieldKey);
                  fieldTo([...newField]);

                  e.currentTarget.setAttribute("class", "selectedStyle");
                  passer(field);
                } else {
                  var newField = field;
                  newField = newField.filter((i) => i != fieldKey);
                  fieldTo([...newField]);

                  e.currentTarget.setAttribute("class", "none");
                }
                // passer(field);
              }}
            >
              <div>{fieldTitle}</div>
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
}

function ResultCheckList({
  children,
  changed,
}: {
  children: Object;
  changed: any;
}) {
  function loader(st: any) {
    changed(st);
  }

  return (
    <CheckishList
      passer={loader}
      parentStyle={{
        margin: "30px 10px 0 10px",
        display: "flex",
        height: "70px",
        borderRadius: "30px",
        boxShadow: "var(--digL0), var(--floatL4)",
        border: "5px solid transparent",
        padding: "0 15px 0 0",
        cursor: "pointer",
      }}
      parentClass="cxy"
      childStyle={{
        borderRadius: "30px",
        fontFamily: "Product Sans Regular",
        color: "#808080",
        fontSize: ps,
        margin: "0 0 0 15px",
        padding: "15px",
        cursor: "pointer",
        border: "5px solid transparent",

        boxShadow: "var(--floatL1)",
        transitionDuration: "500ms",
      }}
      childClass="cxy"
    >
      {children}
    </CheckishList>
  );
}

export {
  GradientText,
  Logo,
  Text,
  Loader,
  Format,
  FormatList,
  CheckishList,
  ResultCheckList,
};
