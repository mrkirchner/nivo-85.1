import {Pie} from "@nivo/pie";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Pie
        data={[
          {
            "id": "hack",
            "label": "hack",
            "value": 147,
            "color": "hsl(346, 70%, 50%)"
          },
          {
            "id": "go",
            "label": "go",
            "value": 428,
            "color": "hsl(350, 70%, 50%)"
          },
          {
            "id": "lisp",
            "label": "lisp",
            "value": 576,
            "color": "hsl(48, 70%, 50%)"
          },
          {
            "id": "stylus",
            "label": "stylus",
            "value": 212,
            "color": "hsl(201, 70%, 50%)"
          },
          {
            "id": "elixir",
            "label": "elixir",
            "value": 257,
            "color": "hsl(24, 70%, 50%)"
          }
        ]}
        height={200}
        width={380}
        margin={{
          top: 0,
          right: 20,
          bottom: 0,
          left: -120,
        }}
        key="value"
        colors={{ scheme: "paired" }}
        innerRadius={0.5}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        sortByValue={true}
        legends={
         [
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 0,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 12,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]
        }
      />
    </main>
  );
}
