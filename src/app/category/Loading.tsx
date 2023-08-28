import React from 'react';
import ContentLoader from 'react-content-loader';

export default function Loading({
  width = 1366,
  heading = { width: 140, height: 24 },
  row = 2,
  column = 4,
  padding = 12,
  borderRadius = 4
}) {
  const itemWidth = (width - padding * (column + 1)) / column;
  const space = padding + itemWidth + (padding / 2 + 20) + 20 + padding * 4;
  const height = space * row + padding * 2 + heading.height;

  const items = Array.from({ length: row * column }, (_, index) => {
    const i = Math.floor(index / column);
    const j = index % column;
    const x = padding + j * (itemWidth + padding);
    const y1 = padding + heading.height + padding * 2 + space * i;
    const y2 = y1 + padding + itemWidth;
    const y3 = y2 + padding / 2 + 20;

    return (
      <React.Fragment key={index}>
        <rect
          x={x}
          y={y1}
          rx={borderRadius}
          ry={borderRadius}
          width={itemWidth}
          height={itemWidth}
        />
        <rect x={x} y={y2} rx={0} ry={0} width={itemWidth} height={20} />
        <rect x={x} y={y3} rx={0} ry={0} width={itemWidth * 0.6} height={20} />
        <rect
          x={x}
          y={y3 * 0.53}
          rx={0}
          ry={0}
          width={itemWidth * 0.6}
          height={20}
        />
        <rect
          x={x}
          y={y3 * 2.1}
          rx={0}
          ry={0}
          width={itemWidth * 0.6}
          height={20}
        />
      </React.Fragment>
    );
  });

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className="max-w-container m-auto mt-10"
    >
      {heading && (
        <rect
          x={padding * 40}
          y={padding}
          rx={0}
          ry={0}
          width={heading.width * 3}
          height={heading.height}
        />
      )}
      {items}
    </ContentLoader>
  );
}
