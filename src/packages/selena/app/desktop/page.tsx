"use client";

import { KeyboardEvent, SyntheticEvent, createRef, useState } from "react";
import { GradientText, Logo, Text } from "../components.g";
import { CompoundOrbit, HomePageLoader, Matter, Orbit } from "../loader";
import { useRouter } from "next/navigation";

export default function Home() {
    var h1 = "1.5rem";
    var h2 = "1.20rem";
    var p = ".95rem";
  var [welcomeVis, welcomeVisTo]: any = useState({
    opacity: "1",
    width: "45%",
  });
  var [searchVis, searchVisTo]: any = useState({ opacity: "1", width: "45%" });
  var [resultVis, resultVisTo]: any = useState({ opacity: "0", width: "0%", transitionDuration : '250ms' });

  var userInput = createRef<HTMLInputElement>();
  var submitBut = createRef<HTMLButtonElement>();
  var route = useRouter()

  function showSystem() {

    welcomeVisTo({ ...welcomeVis, opacity: "0" });
    setTimeout(() => {
      welcomeVisTo({ opacity: "0", width: "0" });
      resultVisTo({ opacity: "1", width: "45%" });
    }, 250);
  }

  function handleKeypress(e: any) {

    if (userInput.current == undefined) {
      return
    }

    var url = userInput.current.value ?? 'apollo';
    var encodedURL = encodeURIComponent(url)
      route.push(`/desktop/formats/${encodedURL}`);

  }

  function keyDownAct(k: any) {
    if (k.key == 'Enter') {
      submitBut.current?.click()
    }
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
      className="cxy"
    >
      <div
        style={{
          height: "100%",
          overflow: "hidden",
          margin: "0 10% 0 0",

          ...searchVis,
        }}
        className="cxy"
      >
        <div>
          <div>
            <GradientText
              style={{ fontSize: h1, margin: "0 0 20px 0", padding: "2px 0px" }}
              animated={true}
              deg="-45"
              colors={["#00ffff", "#ff00ff"]}
            >
              Getting Started
            </GradientText>
          </div>

          <Text size={p} style={{ lineHeight: "1.5" }}>
            HD YouTube Downloader <Text size=".75rem">by Apollo & Selena</Text>{" "}
            offers you download youtube videos at higest quality available. Hit
            the searchbar below to download youtube videos, it is free and
            always will be.
          </Text>
          <div
            style={{ margin: "20px 0 0 0", height: "70px", width: "100%" }}
            className="cx"
          >
            <div className="webinput" onClick={showSystem}>
              <input
                type="text"
                placeholder="youtube.com/apolloselena"
                ref={userInput}
                onKeyDown={keyDownAct}
              />
              <button
                ref={submitBut}
                onClick={handleKeypress}
                type="button"
                className="cxy"
              >
                <GradientText
                  style={{ fontSize: "1.5rem" }}
                  animated={true}
                  deg="45"
                  speed="500ms"
                >
                  ⤊
                </GradientText>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          height: "100%",
          overflow: "hidden",
          ...welcomeVis,
        }}
        className="cxy"
      >
        <div>
          <div style={{ margin: "0 10px 20px 10px", padding: "2px 0px" }}>
            <GradientText
              style={{
                fontSize: h1,
                fontWeight: 400,
                fontFamily: "Product Sans Regular",
              }}
              // colors={["#007ACC", "#43C6AC"]}
              animated={true}
            >
              Hello from Selene
            </GradientText>
          </div>

          <Text
            size={p}
            style={{ margin: "0 10px 30px 10px", lineHeight: "1.5" }}
          >
            Welcome to HD YouTube Downloader{" "}
            <Text size=".75rem">by Apollo & Selena</Text>. Enjoy free HD videos
            in various formats for ever. Dive deeper and elevate your
            entertainment today!
          </Text>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "0 10px 10px 10px",
            }}
          >
            <button
              type="button"
              className="selenabutton"
              onClick={() => route.push("desktop/explore")}
            >
              <GradientText
                style={{ fontSize: h2 }}
                animated={true}
                colors={["#808080", "#808080"]}
              >
                Explore
              </GradientText>
            </button>

            <button
              type="button"
              className="selenabutton"
              onClick={() => route.push("desktop/about")}
            >
              <GradientText
                style={{ fontSize: h2 }}
                animated={true}
                colors={["#808080", "#808080"]}
              >
                About
              </GradientText>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          height: "100%",
          ...resultVis,
        }}
        className="cxy"
      >
        <div>
          <HomePageLoader></HomePageLoader>

          <div style={{ width: "100%" }} className="cxy">
            <GradientText
              size={p}
              colors={["#8383ff", "#ff8383"]}
              animated={true}
            >
              Find Apollo & Selene while page loads
            </GradientText>
          </div>
        </div>
      </div>
    </div>
  );
}
