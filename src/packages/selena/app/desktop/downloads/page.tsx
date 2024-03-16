"use client";

import { GradientText, Text } from "@/app/components.g";
import { HomePageLoader, WelcomeLoader } from "@/app/loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createRef } from "react";

export default function SearchPage({}) {
  var h1 = "1.5rem";
  var h2 = "1.20rem";
  var p = ".95rem";
  var s = ".75rem";
  var ps = ".85rem";

  var route = useRouter();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "10px 0 0 0",
        lineHeight: "1.25",
        // alignItems: "center",
      }}
    >
      <div
        style={{
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "0 0 100px 0",
        }}
      >
        <div style={{ height: "300px", maxWidth: "45%" }} className="cxy">
          <div style={{ margin: "120px 0 0 0" }}>
            <GradientText animated={true} size={h1}>
              Download Distributeables
            </GradientText>

            <div style={{ margin: "15px 0 0 0 " }}>
              <Text size={p}>
                Download Desktop Version of HD Youtube Downloader by Apollo &
                Selana to get an enhanced experiance. You may skip this page if
                you are in app or already downloaded one. Features of app
                version includes,
              </Text>
            </div>

            <div>
              <div
                style={{
                  margin: "30px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: "10px 0 0 0",
                  }}
                >
                  <div style={{ margin: "0 10px 0 0" }} className="">
                    <div
                      style={{
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <GradientText size={"2.25rem"} animated={true}>
                        {" "}
                        🗔
                      </GradientText>
                    </div>
                  </div>

                  <div>
                    <div>
                      <GradientText size={h2} animated={true}>
                        {" "}
                        All Platforms
                      </GradientText>
                    </div>
                    <div>
                      <Text size={p}> Supports in Windows, Linux, Mac</Text>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: "10px 0 0 0",
                  }}
                >
                  <div style={{ margin: "0 10px 0 0" }} className="">
                    {" "}
                    <div
                      style={{
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <GradientText size={"3rem"} animated={true}>
                        {" "}
                        ∞
                      </GradientText>{" "}
                    </div>
                  </div>

                  <div>
                    <div>
                      <GradientText size={h2} animated={true}>
                        {" "}
                        Unlimited Size
                      </GradientText>
                    </div>
                    <div>
                      <Text size={p}> Download Streams of any size</Text>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: "10px 0 0 0",
                  }}
                >
                  <div style={{ margin: "0 10px 0 0" }} className="">
                    {" "}
                    <div
                      style={{
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <GradientText size={"2.25rem"} animated={true}>
                        {" "}
                        🗲
                      </GradientText>{" "}
                    </div>
                  </div>

                  <div>
                    <div>
                      <GradientText size={h2} animated={true}>
                        {" "}
                        Fast Operation
                      </GradientText>
                    </div>
                    <div>
                      <Text size={p}> Way more faster than web</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "100%" }} className="cy">
          <HomePageLoader></HomePageLoader>
        </div>
      </div>

      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat( 2 , 1fr )",
        }}
      >
        <div>
          <div
            style={{
              padding: "70px 50px",
              borderRadius: "50px 0 0 0 ",
              boxShadow: "var(--floatL2)",
              margin: "10px",
            }}
          >
            <GradientText animated={true} size={h1}>
              For Linux
            </GradientText>

            <div style={{ margin: "20px 0 0 0" }}>
              <Text size={p}>
                HD Youtube downloader was made on Linux. RPM or DEB of the app
                is comming soon. Install the zip for now.
              </Text>
            </div>

            <div
              style={{
                margin: "30px 0 0 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "10px 0 0 0",
                }}
              >
                <Link href="/linuxZipped.zip" style={{ textDecoration: "none" }}>
                  <div style={{ margin: "0 10px 0 0" }} className="webdownload">
                    <button className="cxy">
                      <GradientText
                        style={{
                          cursor: "pointer",
                          transform: "rotate(90deg)",
                        }}
                        size="2rem"
                        animated={true}
                      >
                        ➡
                      </GradientText>{" "}
                    </button>
                  </div>
                </Link>

                <div>
                  <div>
                    <GradientText size={h2} animated={true}>
                      {" "}
                      Download Zip
                    </GradientText>
                  </div>
                  <div>
                    <Text size={p}>Extract and Get Distributable</Text>
                  </div>
                </div>
              </div>

              <div style={{ margin: "20px 0 0 0 " }}>
                <Text size={h2}>Note</Text>
              </div>
              <div>
                <Text size={ps}>
                  You might get a zipped format of the package. Just Extract and
                  you'll find the distributeables.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              padding: "70px 50px",
              borderRadius: "50px 0 0 0 ",
              boxShadow: "var(--floatL2)",
              margin: "10px",
            }}
          >
            <GradientText animated={true} size={h1}>
              For Windows
            </GradientText>

            <div style={{ margin: "20px 0 0 0" }}>
              <Text size={p}>
                The app is a cross platform app, Windows also supports, but UI
                might be a little blurry.
              </Text>
            </div>

            <div
              style={{
                margin: "30px 0 0 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "10px 0 0 0",
                }}
              >
                <Link href="/windowsZipped.zip" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: "10px 0 0 0",
                    }}
                  >
                    <div
                      style={{ margin: "0 10px 0 0" }}
                      className="webdownload"
                    >
                      <button className="cxy">
                        <GradientText
                          style={{
                            cursor: "pointer",
                            transform: "rotate(90deg)",
                          }}
                          size="2rem"
                          animated={true}
                        >
                          ➡
                        </GradientText>{" "}
                      </button>
                    </div>

                    <div>
                      <div>
                        <GradientText size={h2} animated={true}>
                          {" "}
                          Download Zip
                        </GradientText>
                      </div>
                      <div>
                        <Text size={p}>Extract and Get Distributable</Text>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div style={{ margin: "20px 0 0 0 " }}>
                <Text size={h2}>Note</Text>
              </div>
              <div>
                <Text size={ps}>
                  MSI Installer is recommanded for windows. It is comming soon.
                  For now install zip. Extract and use.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              padding: "70px 50px",
              borderRadius: "50px 0 0 0 ",
              boxShadow: "var(--floatL2)",
              margin: "10px",
            }}
          >
            <Text size={h1}>
              Android and IOS{" "}
              <GradientText animated={true} size={ps}>
                comming soon !
              </GradientText>
            </Text>

            <div style={{ margin: "20px 0 0 0" }}>
              <Text size={p}>
                Currently HD Youtube Downloader is'nt available in android nad
                ios. Development process is underway. A production build for
                mobile is hoped to release soon.
              </Text>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              padding: "70px 50px",
              borderRadius: "50px 0 0 0 ",
              boxShadow: "var(--floatL2)",
              margin: "10px",
            }}
          >
            <Text size={h1}>
              Mac{" "}
              <GradientText animated={true} size={ps}>
                comming soon !
              </GradientText>
            </Text>

            <div style={{ margin: "20px 0 0 0" }}>
              <Text size={p}>
                Developers are reviewing the Windows and Linux distributeables
                of the app. If they are seemed to work well, developers will
                release the app for Mac
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
