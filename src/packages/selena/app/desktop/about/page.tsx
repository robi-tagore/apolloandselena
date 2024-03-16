"use client";

import { GradientText, Text } from "@/app/components.g";
import { HomePageLoader, WelcomeLoader } from "@/app/loader";
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
              Behind the Scenes
            </GradientText>

            <div style={{ margin: "15px 0 0 0 " }}>
              <Text size={p}>
                There's always a story lies behind the scene, Apollo & Selena
                has some too. This page has been written for them who wants to
                see Apollo & Selana in depth. <br />
                Not Interested in this page ? quick launch -
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
                  <div
                    style={{ margin: "0 10px 0 0" }}
                    className="webdownload"
                    onClick={() => route.push("/desktop/explore")}
                  >
                    <button className="cxy">
                      <GradientText
                        style={{ cursor: "pointer" }}
                        size="1.5rem"
                        animated={true}
                      >
                        🔭
                      </GradientText>{" "}
                    </button>
                  </div>

                  <div>
                    <div>
                      <GradientText size={h2} animated={true}>
                        {" "}
                        Explore Apollo
                      </GradientText>
                    </div>
                    <div>
                      <Text size={p}> Learn how the system works</Text>
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
                  <div
                    style={{ margin: "0 10px 0 0" }}
                    className="webdownload"
                    onClick={() => route.push("/desktop/search")}
                  >
                    <button className="cxy">
                      <GradientText
                        style={{ cursor: "pointer" }}
                        size="1.5rem"
                        animated={true}
                      >
                        🔍
                      </GradientText>{" "}
                    </button>
                  </div>

                  <div>
                    <div>
                      <GradientText size={h2} animated={true}>
                        {" "}
                        Search Streams
                      </GradientText>
                    </div>
                    <div>
                      <Text size={p}>Download streams now</Text>
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
              borderRadius: "50px 50px 50px 0 ",
              boxShadow: "var(--floatL2)",
              margin: "10px",
            }}
          >
            <Text size={h2}>Inspiration</Text>

            <div style={{ margin: "20px 0 0 0" }}>
              <Text size={p}>
                In the era of internetalization when everything is well
                dependent on internet, where a large student community is
                directly dependent on internet and e-learning, it is felt
                difficult for them to find a solution of downloading educational
                content, from the web. Though there's other sources in the web
                to download contents in highest quality available the
                advertisement business has ruined the service, This made the
                author convinced to make a solution for them (The Students who
                wants to learn). Thus Apollo & Selene was made.
              </Text>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              padding: "70px 50px",
              borderRadius: "50px 50px 50px 0 ",
              boxShadow: "var(--floatL2)",
              margin: "10px",
            }}
          >
            <Text size={h2}>Mission and Vision</Text>
            <div style={{ margin: "20px 0 0 0" }}>
              <Text size={p}>
                Apollo & Selena wants to work for students who wants to learn
                and make people learn. Its vision is to develop a world class
                coding community in Bangladesh who could lead the world. Apollo
                & Selena's currently working for creating web solutions across
                Bangladesh.
              </Text>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              padding: "70px 50px 0 ",
              borderRadius: "50px 50px 50px 0 ",
              boxShadow: "var(--floatL2)",
              margin: "10px",
            }}
          >
            <Text size={h2}>Peoples Behind The System</Text>
            <div style={{ margin: "20px 0 0 0" }}>
              <Text size={p}>
                Building a system requires hard work with patiance, this is no
                other. Interested knowing more about the author and the
                developer behind Apollo & Selene ? Launch Apollo _
              </Text>
            </div>

            <div style={{ widows: "100%" }} className="cxy">
              <div
                style={{ margin: "40px 0" }}
                className="webdownload"
                onClick={() => route.push("/desktop/apolloandselena")}
              >
                <button>
                  <GradientText
                    style={{ cursor: "pointer" }}
                    size="2rem"
                    animated={true}
                  >
                    🙭
                  </GradientText>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              padding: "70px 50px",
              borderRadius: "50px 50px 50px 0 ",
              boxShadow: "var(--floatL2)",
              margin: "10px",
            }}
          >
            <Text size={h2}>A Miscallanous Mission</Text>
            <div style={{ margin: "20px 0 0 0" }}>
              <Text size={p}>
                A weird mission of ours is to promote the game of cricket. The
                author and developers of the page and the app are a huge fan of
                cricket. <br />
                We are meant to spread the games, and eliminate all negativities
                of the society.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
