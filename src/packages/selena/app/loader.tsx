import { dir } from "console";
import { CSSProperties } from "react";

interface MatterOnSpace {
  radi: string;
  color: string;
}

function Matter({
  children,
  radi,
  color,
  style,
}: {
  radi: string;
  color: string;
  children?: any;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        height: `calc(${radi} *2)`,
        width: `calc(${radi} *2)`,
        borderRadius: "100%",
        backgroundColor: color,
        // boxShadow: 'var(--floatL2)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Orbit({
  color,
  radi,
  children,
  rDirection,
  distance,
  speed,
}: {
  color: string;
  radi: string;
  children?: any;
  speed?: string;
  rDirection?: string;
  distance?: string;
}) {
  var rotationDir = rDirection == "apollo" ? "normal" : "reverse";
  children = children ?? <span></span>;

  return (
    <Matter
      style={{
        animation: `Orbit ${speed ?? "2000ms"} linear infinite ${rotationDir}`,
      }}
      color={color}
      radi={radi}
    >
      <span
        style={{
          position: "relative",
          left: `calc((${children.props.radi} + ${distance ?? "0px"}) *-2)`,
        }}
      >
        {children}
      </span>
    </Matter>
  );
}

function CompoundOrbit({
  children,
}: {
  children: Array<React.ReactComponentElement<typeof Orbit>>;
}) {
  return (
    <div style={{ height: `calc(${children[0].props.radi} *2)` }}>
      {children.map((child, index) => {
        var top =
          index != 0 ? `calc(${child.props.radi} *-2 * ${index})` : "0px";

        return (
          <span
            key={index}
            style={{
              top: top,
              position: "relative",
            }}
          >
            {child}
          </span>
        );
      })}
    </div>
  );
}

function HomePageLoader({}) {
  return (
    <div
      style={{
        height: "20rem",
        width: "20rem",
        border: "1px solid transparent",
      }}
      className="cxy"
    >
      <CompoundOrbit>
        <Orbit
          distance="0.5rem"
          speed="10s"
          color="#f7b54f"
          radi="1rem"
          rDirection="apollo"
        >
          <Orbit distance="0.0rem" speed="750ms" color="#c9c9c9" radi="0.5rem">
            <Orbit
              distance="0.0rem"
              speed="2s"
              color="#c9c9c9"
              radi="0.2rem"
            ></Orbit>
          </Orbit>
        </Orbit>

        <Orbit distance="1.5rem" speed="15s" color="#f7b54f" radi="1rem">
          <Orbit distance="0.0rem" speed="750ms" color="#c9c9c9" radi="0.5rem">
            <Orbit
              distance="0.0rem"
              speed="2s"
              color="#c9c9c9"
              radi="0.2rem"
            ></Orbit>
          </Orbit>
        </Orbit>

        <Orbit
          distance="2.5rem"
          speed="12s"
          color="#c9c9c9"
          radi="1rem"
          rDirection="apollo"
        >
          <Orbit distance="0.0rem" speed="750ms" color="#8383ff" radi="0.5rem">
            <Orbit
              distance="0.0rem"
              speed="2s"
              color="#ff8383"
              radi="0.2rem"
            ></Orbit>
          </Orbit>
        </Orbit>

        <Orbit distance="3.5rem" speed="20s" color="#f7b54f" radi="1rem">
          <Orbit distance="0.0rem" speed="750ms" color="#c9c9c9" radi="0.5rem">
            <Orbit
              distance="0.0rem"
              speed="2s"
              color="#c9c9c9"
              radi="0.2rem"
            ></Orbit>
          </Orbit>
        </Orbit>
      </CompoundOrbit>
    </div>
  );
}

function Processer({}) {
  return (
    <div
      style={{
        height: "50px",
        width: "50px",
      }}
      className="cxy"
    >
      <CompoundOrbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="750ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="760ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="770ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="780ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="790ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="800ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="810ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="820ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="830ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="830ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="840ms"
          rDirection="apollo"
        >
          <Orbit color="blueviolet" radi="3px"></Orbit>
        </Orbit>
      </CompoundOrbit>
    </div>
  );
}

function Rechiever({}) {
  return (
    <div
      style={{
        height: "50px",
        width: "50px",
      }}
      className="cxy"
    >
      <CompoundOrbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="750ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="760ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="770ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="780ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="790ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="800ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="810ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="820ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="830ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="830ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
        <Orbit
          color="transparent"
          radi="3px"
          distance="4px"
          speed="840ms"
        >
          <Orbit
            color="#3EECAC"
            radi="3px"
          ></Orbit>
        </Orbit>
      </CompoundOrbit>
    </div>
  );
}

function WelcomeLoader({}) {
  return (
    <div
      style={{
        height: "28rem",
        width: "28rem",
        border: "1px solid transparent",
      }}
      className="cxy"
    >
      <div style={{transform:'rotateZ(60deg)'}}>
        <CompoundOrbit>
          <Orbit distance="0.5rem" speed="15s" color="#f7b54f" radi="1rem">
            <Orbit
              distance="0.0rem"
              speed="750ms"
              color="#c9c9c9"
              radi="0.5rem"
            >
              <Orbit
                distance="0.0rem"
                speed="2s"
                color="#c9c9c9"
                radi="0.2rem"
              ></Orbit>
            </Orbit>
          </Orbit>

          <Orbit distance="1.5rem" speed="14s" color="#f7b54f" radi="1rem" rDirection="apollo">
            <Orbit
              distance="0.0rem"
              speed="750ms"
              color="#c9c9c9"
              radi="0.5rem"
            >
              <Orbit
                distance="0.0rem"
                speed="2s"
                color="#c9c9c9"
                radi="0.2rem"
              ></Orbit>
            </Orbit>
          </Orbit>

          <Orbit distance="2.5rem" speed="13s" color="#c9c9c9" radi="1rem">
            <Orbit
              distance="0.0rem"
              speed="750ms"
              color="#8383ff"
              radi="0.5rem"
            >
              <Orbit
                distance="0.0rem"
                speed="2s"
                color="#ff8383"
                radi="0.2rem"
              ></Orbit>
            </Orbit>
          </Orbit>

          <Orbit distance="3.5rem" speed="12s" color="#f7b54f" radi="1rem" rDirection="apollo">
            <Orbit
              distance="0.0rem"
              speed="750ms"
              color="#c9c9c9"
              radi="0.5rem"
            >
              <Orbit
                distance="0.0rem"
                speed="2s"
                color="#c9c9c9"
                radi="0.2rem"
              ></Orbit>
            </Orbit>
          </Orbit>

          <Orbit distance="4.5rem" speed="11s" color="#f7b54f" radi="1rem">
            <Orbit
              distance="0.0rem"
              speed="750ms"
              color="#c9c9c9"
              radi="0.5rem"
            >
              <Orbit
                distance="0.0rem"
                speed="2s"
                color="#c9c9c9"
                radi="0.2rem"
              ></Orbit>
            </Orbit>
          </Orbit>

          <Orbit distance="5.5rem" speed="10s" color="#f7b54f" radi="1rem" rDirection="apollo">
            <Orbit
              distance="0.0rem"
              speed="750ms"
              color="#c9c9c9"
              radi="0.5rem"
            >
              <Orbit
                distance="0.0rem"
                speed="2s"
                color="#c9c9c9"
                radi="0.2rem"
              ></Orbit>
            </Orbit>
          </Orbit>
        </CompoundOrbit>
      </div>
    </div>
  );
}


export { Orbit, Matter, CompoundOrbit, HomePageLoader, Processer, Rechiever, WelcomeLoader };
