import { GradientText, Logo, Text } from "@/app/components.g";
import { HomePageLoader } from "@/app/loader";

export default function explorePage({}) {
  var h1 = "1.5rem";
  var h2 = "1.20rem";
  var p = ".95rem";

  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center",
        width: "100%",
        lineHeight: "1.25",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "30px 0 30px 0",
        }}
      >
        <div style={{ width: "40%" }}>
          <GradientText
            size={h1}
            animated={true}
            style={{ margin: "30px 0 20px 0", wordWrap: "break-word" }}
          >
            Explaining the System
          </GradientText>
          <div style={{ margin: "25px 0 0 0" }}>
            <div>
              <Text style={{ padding: "3px 0" }} size="1.20rem">
                Newton and The Solar System
              </Text>
            </div>

            <Text size=".95rem">
              Sir Issac Newton always wondered why and how the planets orbits
              around the sun, though he was known as "The Last Boy" , his
              curousity of expalining the system helped him win The Nobel in 1836. Inspired by him, this
              page has been built to help the learners learn the fundamentals
							lying behind and to inspire them to code. <br />
							Wishing you a good journey from Apollo and Selena.
            </Text>
          </div>
        </div>

        <HomePageLoader></HomePageLoader>
      </div>

      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "40%",
            boxShadow: "var(--floatL2)",
            padding: "50px 35px",
            borderRadius: "30px",
          }}
        >
          <GradientText
            size={h1}
            animated={true}
            style={{ margin: "30px 0 20px 0", wordWrap: "break-word" }}
          >
            The Algorithm (For coders)
          </GradientText>

          <div>
            <Text size={p}>
              The HD YouTube Downloader{" "}
              <Text size=".75rem">by Apollo & Selena</Text> uses a bunch of
              codes to run the process fluently, below is the summary.
            </Text>

            {/* <dd> */}
            <div style={{ margin: "25px 0 0 0" }}>
              <div>
                <Text style={{ padding: "3px 0" }} size={h2}>
                  Used Languages
                </Text>
              </div>

              <Text size={p}>
                The code has mainly uses Nodejs (server side javascript) as the
                backend language, as well as js (ecma-script) in the frontend,
                HTML and CSS for markup and styling,
              </Text>
            </div>

            <div style={{ margin: "25px 0 0 0" }}>
              <div>
                <Text style={{ padding: "3px 0" }} size={h2}>
                  Frontend Libraries and Frameworks
                </Text>
              </div>

              <Text size={p}>
                The frontend has been developed using Next js. So as well it
                uses React js. No database has been added to the service yet, so
                it is hardly dependent on the giant frameworks and libraries.
              </Text>
            </div>

            <div style={{ margin: "25px 0 0 0" }}>
              <div>
                <Text style={{ padding: "3px 0" }} size={h2}>
                  Backend Modules and Packages
                </Text>
              </div>

              <Text size={p}>
                The system is mainly dependent on two NPM Package to run it
                processes. YTDL-core is used to download streams from youtube.
                On the other hand FFMPEG-static merges the medias, these two
                core packages are the heart of the system.
              </Text>
            </div>

            <div style={{ margin: "25px 0 0 0" }}>
              <div>
                <Text style={{ padding: "3px 0" }} size={h2}>
                  Hosting and Deploying
                </Text>
              </div>

              <Text size={p}>
                The project is hosted on github.com. Two respiratpries runs the
                process, github.com/robitagore/apollo and
                github.com/robitagore/selena. Apollo handles the server side
                logic and codes while Selena acts as a client
              </Text>
            </div>
            {/* </dd> */}
          </div>
        </div>

        <div
          style={{
            width: "40%",
            boxShadow: "var(--floatL2)",
            padding: "50px 40px",
            borderRadius: "30px",
          }}
        >
          <GradientText
            size={h1}
            animated={true}
            style={{ margin: "30px 0 20px 0", wordWrap: "break-word" }}
          >
            The Process (For non-coders)
          </GradientText>

          <div>
            <Text size={p}>
              The HD YouTube Downloader{" "}
              <Text size=".75rem">by Apollo & Selena</Text> works in 4 steps to
              provide you a enhanced download experiance. A successfull process
              has to pass the following steps to get downloaded.
            </Text>

            {/* <dd> */}
            <div style={{ margin: "25px 0 0 0" }}>
              <div>
                <Text style={{ padding: "3px 0" }} size={h2}>
                  Fetching Formats
                </Text>
              </div>

              <Text size={p}>
                In this step the Selena requests Apollo to provide all available
                formats of the provided url. A HTTP POST request is sent to the
                API path apollo../loadformats
              </Text>
            </div>

            <div style={{ margin: "25px 0 0 0" }}>
              <div>
                <Text style={{ padding: "3px 0" }} size={h2}>
                  Downloading Resource
                </Text>
              </div>

              <Text size={p}>
                In this step the Apollo Server downloads audio and video streams
                separately and saves them locally in the server. (To note higher
                quality requires downloading audio and video separately waits.
                For HD, 2K, 4K, 8K, YouTube provides non standalone streams) ,
                Apollo waits untill both of the streams are downloaded
                correctly.
              </Text>
            </div>

            <div style={{ margin: "25px 0 0 0" }}>
              <div>
                <Text style={{ padding: "3px 0" }} size={h2}>
                  Merging Streams
                </Text>
              </div>

              <Text size={p}>
                After streams are downloaded successfully, the merging process
                starts. In this step video stream and auiio stream is merged
                preserving the codec, minimizing quality loss
              </Text>
            </div>

            <div style={{ margin: "25px 0 0 0" }}>
              <div>
                <Text style={{ padding: "3px 0" }} size={h2}>
                  Merging Streams
                </Text>
              </div>

              <Text size={p}>
                Last of all, the video generated is sent to client as
                distribuatable format in a webm mp4 or rest of the format
              </Text>
            </div>
            {/* </dd> */}
          </div>
        </div>
      </div>
    </div>
  );
}
