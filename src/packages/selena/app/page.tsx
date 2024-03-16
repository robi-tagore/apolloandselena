"use client";

import { useState } from "react";
import { GradientText, Logo, Text } from "./components.g";
import { useRouter } from "next/navigation";
import { Processer, WelcomeLoader } from "./loader";

export default function Home() {
    var h1 = "1.5rem";
    var h2 = "1.20rem";
    var p = ".95rem";
  var router = useRouter()
  var [viewV1, setV1] = useState(
    <div>
      <span onClick={loadDownloader}>
        <GradientText
          style={{
            fontSize: "1.5rem",
            fontWeight: 400,
            fontFamily: "Product Sans Regular",
            cursor: "pointer",
          }}
          deg="45"
          speed="2000ms"
          key={1}
          animated={true}
        >
          HD Youtube Downloader
        </GradientText>
      </span>

      <Text style={{ fontFamily: "Product Sans Regular" }} size="1rem">
        &nbsp; by Apollo & Selena
      </Text>
    </div>
  );

  function loadDownloader() {
    setV1(
      <GradientText
        style={{
          fontSize: h1,
        }}
        deg="45"
        speed="750ms"
        key={1}
        animated={true}
      >
        <span style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          Launching &nbsp;
          
            <Processer></Processer>
          
        </span>
      </GradientText>
    );

    setTimeout(() => {
      router.push('/desktop/search')
    }, 1000);
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
      className="cyx"
    >
      <WelcomeLoader></WelcomeLoader>
      {viewV1}
    </div>
  );
}
