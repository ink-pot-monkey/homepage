import { useRef, useEffect } from "react";
import { makeNoise2D } from "open-simplex-noise";
import styled, {keyframes} from "styled-components";

import { lineColor, canvasMargin, backgroundColor } from "../components/layout";

interface line {
  x: number;
  y: number;
  variance: number;
}

const noise2D = makeNoise2D(Date.now());
let yoff = 0;
let xoff = 0;

export default function UnknownPleasures() {
  let canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let requestID: number;

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const body: HTMLElement | null = document.querySelector("body");
      if (!body) return;

      const width =
        parseFloat(getComputedStyle(body, null).width.replace("px", "")) -
        canvasMargin;
      const height =
        parseFloat(getComputedStyle(body, null).height.replace("px", "")) -
        canvasMargin;
      const dpr = window.devicePixelRatio;
      const context = canvas.getContext("2d");

      // Put this in a function to allow us to reset the canvas
      const canvasSetup = () => {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        if (context) {
          context.scale(dpr, dpr);
          context.lineWidth = 2;
        }
      };
      // Initial setup
      canvasSetup();

      let step = 25;
      let offset = 150;

      // Plot the original lines
      const lines: line[][] = [];
      // need to change i so that it is adaptive to height of screen
      for (var i = 600; i <= width - step; i += step) {
        let line = [];
        for (var j = 0; j < width + step; j += step) {
          let distanceToCenter = Math.abs(j - width / 2);
          let variance = Math.max(width / 2 - offset - distanceToCenter, 0);
          let random = ((Math.random() * variance) / 2) * -1;
          let point = { x: j, y: i + random, variance: variance };
          // Point Plotter
          // if (context) {
          //   context.beginPath();
          //   context.arc(point.x, point.y, 1, 0, 2 * Math.PI);
          //   context.stroke();
          // }
          line.push(point);
        }
        lines.push(line);
      }

      const DrawLines = () => {
        if (context) {
          for (let i = 0; i < lines.length; i++) {
            context.beginPath();
            context.moveTo(lines[i][0].x, lines[i][0].y);

            for (var j = 0; j < lines[i].length - 2; j++) {
              var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
              var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
              context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
            }

            context.quadraticCurveTo(
              lines[i][j].x,
              lines[i][j].y,
              lines[i][j + 1].x,
              lines[i][j + 1].y
            );
            context.save();
            context.globalCompositeOperation = "destination-out";
            context.fill();
            context.restore();
            context.strokeStyle = lineColor;
            context.stroke();
          }
        }
      };

      DrawLines();

      const animate = () => {
        xoff -= 10 * lines.length;
        lines.forEach((line, index) => {
          yoff -= 10 * lines[0].length;
          xoff += 0.0001;
          line.forEach((point) => {
            yoff += 0.00001;
            point.y += (noise2D(xoff, yoff) * point.variance) / 1000; // * 1000;
            yoff += 10;
          });
          xoff += 10;
        });
        canvasSetup();
        DrawLines();
        requestID = requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      cancelAnimationFrame(requestID);
    };
  });

  return (
    <>
      <StyledCanvas ref={canvasRef} />
    </>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: ${backgroundColor};
  animation: 9s ease 0s 1 normal forwards running ${fadeIn};
`;
