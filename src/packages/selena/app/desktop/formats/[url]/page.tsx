"use client";

import {
  CheckishList,
  Format,
  FormatList,
  GradientText,
  Loader,
  ResultCheckList,
  Text,
} from "@/app/components.g";
import {
  HomePageLoader,
  Matter,
  Orbit,
  Processer,
  Rechiever,
} from "@/app/loader";
import {
  loadFormatServerResponse,
  resolvedFormats,
  revisedFormat,
} from "@/global";
import { createRef, use, useEffect, useState } from "react";
import { off } from "./offline";
import { colN, widthToK } from "@/app/utils";
import { useRouter } from "next/navigation";
import env from '../../../../ENVs'

var h1 = "1.5rem";
var h2 = "1.20rem";
var p = ".95rem";
var s = ".75rem";
var ps = ".85rem";
export default function URLresult({ params }: any) {
  var url = decodeURIComponent(params.url);  
  
  var [loadingVis, loadingVisTo]: any = useState({
    height: "100%",
    opacity: "1",
    overflow: "hidden",
  });
  var [resultVis, resultVisTo]: any = useState({
    height: "0",
    opacity: "0",
    overflow: "hidden",
  });

  var [fetchedFormats, fetchedFormatsTo]: [
    revisedFormat[] | undefined,
    Function
  ] = useState();

  var router = useRouter();

  var [title, titleTo]: any = useState("");
  var [duration, durationTo]: any = useState("");

  var [formatsDiv, formatsDivTo] = useState(<div></div>);
  var [dataFetched, dataFetchedTo] = useState(false);

  var [filterMedia, filterMediaTo]: any = useState([]);
  var [filterVidQuality, filterVidQualityTo]: any = useState([]);
  var [filterAudQuality, filterAudQualityTo]: any = useState([]);
  var [filterFps, filterFpsTo]: any = useState([]);
  var [filterExt, filterExtTo]: any = useState([]);

  var [finalResult, finalResultTo]: any = useState();
  var [filteredResult, filteredResultTo]: any = useState();

  var [filteredMessage, filteredMessageTo] = useState(
    <GradientText animated={true} deg="-45" size={h2}>
      Use Filter to Filter Formats
    </GradientText>
  );

  var [initialLoader, initialLoaderTo] = useState(
    <div style={{ height: "100%", width: "100%" }} className="cyx">
      <HomePageLoader></HomePageLoader>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Text size={p}>
          Search for Apollo and Selene, while formats are being loaded,
        </Text>
        <Rechiever></Rechiever>
      </div>
    </div>
  );

  useEffect(() => {
    if (fetchedFormats != undefined && fetchedFormats?.length != 0) {
      var demo = fetchedFormats;

      demo = demo.filter((f) =>
        filterExt.length == 0 ? true : filterExt.includes(f.ext)
      );
      demo = demo.filter((f) =>
        filterVidQuality.length == 0
          ? true
          : filterVidQuality.includes(f.spec.UIVID)
      );
      demo = demo.filter((f) =>
        filterAudQuality.length == 0
          ? true
          : filterAudQuality.includes(String(f.spec.audioBitrate))
      );
      demo = demo.filter((f) =>
        filterFps.length == 0 ? true : filterFps.includes(String(f.spec.fps))
      );
      demo = demo.filter((f) =>
        filterMedia.length == 0 ? true : filterMedia.includes(f.media)
      );

      if (
        [
          ...filterMedia,
          ...filterVidQuality,
          ...filterAudQuality,
          ...filterFps,
          ...filterExt,
        ].length == 0
      ) {
        filteredMessageTo(
          <GradientText animated={true} deg="-45" size={h2}>
            Try the{" "}
            <GradientText animated={true} deg="45" size={h1}>
              Filter
            </GradientText>{" "}
            to enhance search experiance
          </GradientText>
        );
      } else {
        filteredMessageTo(
          <GradientText animated={true} deg="-45" size={h2}>
            Found{" "}
            <GradientText animated={true} deg="45" size={h1}>
              {demo.length}
            </GradientText>{" "}
            formats
          </GradientText>
        );
      }

      filteredResultTo(demo);
    }
  }, [filterMedia, filterVidQuality, filterAudQuality, filterFps, filterExt]);

  useEffect(() => {
    if (filteredResult != undefined) {
      finalResultTo(
        <FormatList
          title={title}
          url={url}
          formats={filteredResult}
          divHeight="380px"
          minWidth='280px'
          spacing="0px"
        ></FormatList>
      );
    }
  }, [filteredResult]);

  useEffect(() => {
    if (fetchedFormats != undefined && fetchedFormats?.length != 0) {
      formatsDivTo(
        <div>
          <div style={{ margin: "20px 0 20px 20px" }}>
            <ResultCheckList
              changed={(m: any) => {
                filterMediaTo(m);
              }}
            >
              {(() => {
                var data1: string[] = fetchedFormats!.map((f) => f.media);
                var data2: Set<string> = new Set(data1);
                var data3: string[] = Array.from(data2);

                var final: any = {};

                data3.forEach((key: string) => {
                  final[key] =
                    key == "a" ? (
                      <GradientText deg="-45" animated={true} size="1rem">
                        🎵
                      </GradientText>
                    ) : (
                      <GradientText deg="-45" animated={true} size="1rem">
                        🎬
                      </GradientText>
                    );
                });

                return final;
              })()}
            </ResultCheckList>

            <ResultCheckList
              changed={(m: any) => {
                filterVidQualityTo(m);
              }}
            >
              {(() => {
                var data1: string[] = fetchedFormats!.map((f: any) => {
                  return f.spec.UIVID;
                });
                var data2: Set<string> = new Set(data1);
                var data3: string[] = Array.from(data2);

                var final: any = {};

                data3.forEach((key: string) => {
                  final[key] = key;
                });

                return final;
              })()}
            </ResultCheckList>

            <ResultCheckList
              changed={(m: any) => {
                filterExtTo(m);
              }}
            >
              {(() => {
                var data1: string[] = fetchedFormats!.map((f) => f.ext);
                var data2: Set<string> = new Set(data1);
                var data3: string[] = Array.from(data2);

                var final: any = {};

                data3.forEach((key: string) => {
                  final[key] = key;
                });

                return final;
              })()}
            </ResultCheckList>

            <ResultCheckList
              changed={(m: any) => {
                filterFpsTo(m);
              }}
            >
              {(() => {
                var data1: string[] = fetchedFormats!.map((f) => f.spec.fps);
                data1 = data1.filter((d) => d != undefined);
                var data2: Set<string> = new Set(data1);
                var data3: string[] = Array.from(data2);

                var final: any = {};

                data3.forEach((key: string) => {
                  final[key] = key + "fps";
                });

                return final;
              })()}
            </ResultCheckList>

            <ResultCheckList
              changed={(m: any) => {
                filterAudQualityTo(m);
              }}
            >
              {(() => {
                var data1: string[] = fetchedFormats!.map(
                  (f) => f.spec.audioBitrate
                );
                var data2: Set<string> = new Set(data1);
                var data3: string[] = Array.from(data2);

                var final: any = {};

                data3.forEach((key: string) => {
                  final[key] = key + "kbps";
                });

                return final;
              })()}
            </ResultCheckList>

            <div style={{ margin: "80px 0 40px 20px" }}>{filteredMessage}</div>
            <div style={{ margin: "20px 0 0 0" }}>{finalResult}</div>
          </div>
        </div>
      );
    }
  }, [fetchedFormats, finalResult]);

  if (!dataFetched) {
    dataFetchedTo(true);

    fetch(env.LOAD_FORMATS_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "identity": 'selena'
      },
      
      mode:"cors",
      body: JSON.stringify({ greeter: "selene", url: url }),
    })
      .then(async (d) => {
        if (d.status != 200) {
          return Promise.reject("CONNECTION_ERR");
        }

        var response: loadFormatServerResponse = await d.json();

        if (d.status == 200 && response.condition == "NIGHT") {
          return Promise.reject(response); //  comment this to make offline
        }

        var apolloResponse: resolvedFormats = response.data;

        // apolloResponse = off; // uncomment this to make offline

        apolloResponse.available = apolloResponse.available.map((f) => {
          return { ...f, spec: { ...f.spec, UIVID: widthToK(f.spec.width) } };
        });

        fetchedFormatsTo(apolloResponse.available);
        titleTo(apolloResponse.title);
        durationTo(apolloResponse.available[0].spec.approxDurationMs);

        loadingVisTo({ ...loadingVis, opacity: "1" });
        setTimeout(() => {
          loadingVisTo({ ...loadingVis, opacity: "0", height: "0" });
          setTimeout(() => {
            resultVisTo({ ...resultVis, opacity: "1", height: "100%" });
          }, 2000);
        }, 1000);
      })
      .catch((err) => {
        if (err == "CONNECTION_ERR") {
          initialLoaderTo(
            <div style={{ height: "100%", width: "100%" }} className="cyx">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Text size={h2}>
                  It seems Selenana could'nt connect Apollo due to Network
                  Issue, Retrying in 13s &nbsp;
                </Text>
              </div>
            </div>
          );
          setTimeout(() => {
            window.location.reload();
          }, 20000);
        } else {
          initialLoaderTo(
            <div style={{ height: "100%", width: "100%" }} className="cyx">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                {" "}
                <div
                  className="webdownload"
                  onClick={() => router.push("/desktop")}
                >
                  <button>
                    <GradientText
                      style={{ cursor: "pointer" }}
                      size="1.75rem"
                      animated={true}
                    >
                      🏠
                    </GradientText>{" "}
                  </button>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div
                  className="webdownload"
                  onClick={() => window.location.reload()}
                >
                  <button>
                    <GradientText
                      style={{ cursor: "pointer" }}
                      size="2rem"
                      animated={true}
                    >
                      ⟳
                    </GradientText>{" "}
                  </button>
                </div>
                &nbsp;&nbsp;&nbsp;
                <Text size={p} style={{ lineHeight: "1.5" }}>
                  An Error has occured{" "}
                  <span>
                    {(() => {
                      if (
                        err.data != undefined &&
                        err.data.error != undefined &&
                        err.data.error.errno == -3001
                      ) {
                        return (
                          <div>
                            <GradientText size={h2} animated={true}>
                              Server has fallen to a network issue
                            </GradientText>
                          </div>
                        );
                      } else if (err.data != undefined) {
                        return (
                          <div>
                            <GradientText size={p} animated={true}>
                              Invalid url provided
                            </GradientText>
                          </div>
                        );
                      } else {
                        console.log("keep in note for new errors", err);
                        return (
                          <div>
                            <GradientText size={h2} animated={true}>
                              Unable to connect with Apollo (CC).
                            </GradientText>
                          </div>
                        );
                      }
                    })()}
                  </span>
                </Text>
              </div>
            </div>
          );
        }
      });
    
  }

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          transitionDuration: "250ms !important",
          ...loadingVis,
        }}
        className="cxy"
      >
        <div className="cyx">{initialLoader}</div>
      </div>

      <div style={{ width: "100%", ...resultVis }}>
        <div
          style={{
            margin: "0px 10px 0px 10px ",
            // borderRadius: "8px",
            // boxShadow: "var(--floatL0)",
            padding: "20px ",
            lineHeight: "1.25",
          }}
        >
          <GradientText
            animated={true}
            size={h1}
          >
            {title}
          </GradientText>

          <div style={{ margin: "40px 0px 0 0" }}>
            <Text size={p}>
              ⏱ Duration appr &nbsp;
              <Text size={h2}> {duration} ms</Text>
            </Text>
          </div>
          <div
            style={{
              margin: "5px 0 0 0",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ margin: "0 40px 0 0" }}>
              <Text size={p}>
                <Text size={h2}> {fetchedFormats?.length}</Text> Formats
                Generated
              </Text>
            </div>
            <div style={{ margin: "0 40px 0 0" }}>
              <Text size={p}>
                <Text size={h2}>
                  {" "}
                  {fetchedFormats?.filter(({ ext }) => ext == "mp4").length}
                </Text>{" "}
                mp4 &nbsp;
                <Text size={h2}>
                  {" "}
                  {fetchedFormats?.filter(({ ext }) => ext == "webm").length}
                </Text>{" "}
                webm &nbsp;
                <Text size={h2}>
                  {" "}
                  {
                    fetchedFormats?.filter(
                      ({ ext }) => ext != "webm" && ext != "mp4"
                    ).length
                  }
                </Text>{" "}
                others
              </Text>
            </div>
            <div style={{ margin: "0 0px 0 0" }}>
              <Text size={p}>
                <Text size={h2}>
                  {" "}
                  {fetchedFormats?.filter(({ media }) => media == "a").length}
                </Text>{" "}
                audio &nbsp;
                <Text size={h2}>
                  {" "}
                  {fetchedFormats?.filter(({ media }) => media == "v").length}
                </Text>{" "}
                video
              </Text>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            margin: "0 0 0 0",
          }}
        >
          {formatsDiv}
        </div>
      </div>
    </div>
  );
}
