import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import './pageViewer.css';

export const PageViewer = (props) => {
  const initialCircle = { x: 0, y: 0, rx: 0, ry: 0 };
  const [tempCircle, setTempCircle] = useState(initialCircle);
  const [windowWidth, windowHeight] = useWindowSize();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [attachment, setAttachment] = useState('');

  const mouseMoveEventListener = useCallback((curr) => {
    setTempCircle((data) => ({
      ...data,
      rx: Math.abs(data.x - curr.offsetX),
      ry: Math.abs(data.y - curr.offsetY),
    }));
  }, []);

  const getImageSize = useCallback(() => {
    // if any, draw image again
    const img = new Image();
    console.log(attachment);
    img.onload = function () {
      const containerWidth = (windowWidth - 300) / 2;
      const containerHeight = windowHeight - 50;
      if ((2 * img.width) / img.height > containerWidth / containerHeight) {
        setSize({
          width: containerWidth,
          height: (img.height * containerWidth) / img.width,
        });
      } else {
        setSize({
          width: (img.width * containerHeight) / img.height,
          height: containerHeight,
        });
      }
    };
    img.src = attachment;
  }, [attachment, windowHeight, windowWidth]);

  useEffect(() => {
    setAttachment(
      props.num > 0 && props.data.length >= props.num
        ? props.data[props.num - 1].image
        : ''
    );
  }, [props.data, props.num]);

  useEffect(() => {
    getImageSize();
  }, [getImageSize]);

  useEffect(() => {
    console.log(size);
  }, [size]);

  return (
    <div className={`pv_container`}>
      {props.num > 0 && props.data.length >= props.num ? (
        <>
          <img src={attachment} alt={'page'} />
          <svg
            width='100%'
            height='100%'
            onMouseDown={(start) => {
              setTempCircle((data) => ({
                ...data,
                x: start.nativeEvent.offsetX,
                y: start.nativeEvent.offsetY,
              }));
              document.addEventListener('mousemove', mouseMoveEventListener);
            }}
            onMouseUp={() => {
              document.removeEventListener('mousemove', mouseMoveEventListener);
              const correctTempCircle = {
                x: tempCircle.x / size.width,
                y: tempCircle.y / size.height,
                rx: tempCircle.rx / size.width,
                ry: tempCircle.ry / size.height,
              };

              props.setData((data) => {
                const target = data[props.num - 1];
                if (target.check === undefined) target['check'] = [];
                const targetIdx = target.check.findIndex(
                  (item) => item.userName === props.userName
                );
                if (targetIdx !== -1) {
                  console.log(targetIdx);
                  target.check[targetIdx].checkByUser.push(correctTempCircle);
                } else {
                  target.check.push({
                    userName: props.userName,
                    checkByUser: [correctTempCircle],
                  });
                }

                return data;
              });

              setTempCircle(initialCircle);
            }}
          >
            <ellipse
              cx={tempCircle.x}
              cy={tempCircle.y}
              rx={tempCircle.rx}
              ry={tempCircle.ry}
              fill='#ffffff00'
              stroke='#b13138'
              strokeWidth='4'
            />
            {props.data[props.num - 1].check && props.data[props.num - 1].check.length !== 0
                ? props.data[props.num - 1].check.filter((item) => item.userName !== props.userName) && props.data[props.num - 1].check.filter((item) => item.userName !== props.userName).length !== 0
                  ? props.data[props.num - 1].check.filter((item) => item.userName !== props.userName)
                    .map((item) => item.checkByUser)
                    .reduce((prev, next) => prev.concat(next))
                    .map((circle, index) => (
                      <ellipse
                        key={index}
                        cx={circle.x * size.width}
                        cy={circle.y * size.height}
                        rx={circle.rx * size.width}
                        ry={circle.ry * size.height}
                        fill='#FF9B2690'
                      />
                    ))
                  : null
                : null
            }
            {props.data[props.num - 1].check && props.data[props.num - 1].check.length !== 0
                ? props.data[props.num - 1].check.filter((item) => item.userName === props.userName) && props.data[props.num - 1].check.filter((item) => item.userName === props.userName).length !== 0
                  ? props.data[props.num - 1].check.filter((item) => item.userName === props.userName)
                    .map((item) => item.checkByUser)
                    .reduce((prev, next) => prev.concat(next))
                    .map((circle, index) => (
                      <ellipse
                        key={index}
                        cx={circle.x * size.width}
                        cy={circle.y * size.height}
                        rx={circle.rx * size.width}
                        ry={circle.ry * size.height}
                        fill='#ffffff00'
                        stroke='#b13138'
                        strokeWidth='4'
                      />
                    ))
                  : null
                : null}
          </svg>
        </>
      ) : null}
    </div>
  );
};


// /* eslint-disable react-hooks/exhaustive-deps */
// import { useRef, useState, useEffect, useCallback } from 'react';
// import { useWindowSize } from '../../hooks/useWindowSize';
// import './pageViewer.css';

// export const PageViewer = (props) => {
//   /* for canvas method */
//   const [targetPoint, setTargetPoint] = useState([]);
//   const [imageData, setImageData] = useState({ width: 0, height: 0 });
//   const [attachment, setAttachment] = useState('');

//   const appRef = useRef(null);
//   const canvasRef = useRef(null);

//   const [windowWidth, windowHeight] = useWindowSize();

//   useEffect(() => {
//     setAttachment(
//       props.num > 0 && props.data.length >= props.num
//         ? props.data[props.num - 1].image
//         : ''
//     );
//   }, [props]);

//   useEffect(() => {
//     console.log('target = ', targetPoint);
//   }, [targetPoint]);

//   const setCanvasSize = useCallback((width, height) => {
//     if (canvasRef.current) {
//       canvasRef.current.width = width;
//       canvasRef.current.height = height;
//     }
//   }, []);

//   const imageOnLoad = useCallback(
//     (img) => {
//       if (canvasRef.current && appRef.current) {
//         const containerWidth = (windowWidth - 300) / 2;
//         const containerHeight = windowHeight - 50;
//         let width, height;
//         if ((2 * img.width) / img.height > containerWidth / containerHeight) {
//           width = containerWidth;
//           height = (img.height * containerWidth) / img.width;
//         } else {
//           width = (img.width * containerHeight) / img.height;
//           height = containerHeight;
//         }

//         console.log(width, height);

//         const ctx = canvasRef.current.getContext('2d');
//         setImageData({ width: width, height: height });
//         setCanvasSize(width, height);
//         ctx.drawImage(img, 0, 0, width, height);
//         ctx.stroke();
//       }
//     },
//     [setCanvasSize, windowWidth, windowHeight]
//   );

//   const drawPoint = useCallback((x, y, color) => {
//     const ctx = canvasRef.current.getContext('2d');
//     ctx.strokeStyle = 'white';
//     ctx.fillStyle = color;
//     ctx.lineWidth = 1;
//     ctx.beginPath();
//     ctx.arc(x, y, 4, 0, Math.PI * 2, true);
//     ctx.fill();
//     ctx.stroke();
//   }, []);

//   const drawLine = useCallback(
//     (fromX, fromY, toX, toY) => {
//       const slope = (toY - fromY) / (toX - fromX);
//       const interceptY = toY - toX * slope;

//       let left = { x: 0, y: interceptY };
//       let right = {
//         x: imageData.width,
//         y: imageData.width * slope + interceptY,
//       };

//       const ctx = canvasRef.current.getContext('2d');
//       ctx.strokeStyle = 'green';
//       ctx.lineWidth = 3;
//       ctx.beginPath();
//       ctx.moveTo(left.x, left.y);
//       ctx.lineTo(right.x, right.y);
//       ctx.stroke();
//       ctx.lineWidth = 1;
//     },
//     [imageData.width]
//   );

//   const makeTargetPoint = useCallback(
//     (x, y) => {
//       if (x < imageData.width && y < imageData.height) {
//         setTargetPoint((list) => list.concat([{ x, y }]));
//         drawPoint(x, y, 'red');
//       }
//     },
//     [drawPoint, imageData.height, imageData.width, targetPoint.length]
//   );

//   const drawCanvas = useCallback(
//     (isInitializing = false) => {
//       // if any, draw image again
//       console.log('drawCanvas start');

//       const img = new Image();
//       console.log(attachment);
//       img.onload = function () {
//         imageOnLoad(img);

//         if (!isInitializing) {
//           // if any, draw target points again
//           targetPoint.map(({ x, y }) => {
//             drawPoint(x, y, 'red');
//             return { x, y };
//           });
//         }
//       };
//       img.src = attachment;

//       console.log('drawCanvas end');
//     },
//     [attachment, drawLine, drawPoint, imageOnLoad, targetPoint]
//   );

//   const resetCanvas = useCallback((isRatioAlso, isPaddingAlso) => {
//     console.log('resetCanvas start');
//     setTargetPoint([]);
//     console.log('resetCanvas end');
//   }, []);

//   useEffect(() => {
//     setCanvasSize(0, 0);
//   }, [setCanvasSize]);

//   useEffect(() => {
//     drawCanvas();
//   }, [attachment]);

//   /* for canvas method -- end */

//   return (
//     <div ref={appRef} className='pv_container'>
//       {attachment !== '' ? (
//         <canvas
//           id='canvas'
//           ref={canvasRef}
//           onClick={(e) => {
//             e.preventDefault();
//             const x = Math.round(e.nativeEvent.offsetX);
//             const y = Math.round(e.nativeEvent.offsetY);
//             console.log(x, y);

//             makeTargetPoint(x, y);
//           }}
//         ></canvas>
//       ) : null}
//       <svg width='100%' height='100%'>
//         <ellipse
//           cx={51}
//           cy={101}
//           rx={50}
//           ry={100}
//           fill='#ffffff00'
//           stroke='#b13138'
//           stroke-width='2'
//         />
//       </svg>
//     </div>
//   );
// };
