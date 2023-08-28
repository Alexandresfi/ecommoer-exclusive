import ContentLoader from 'react-content-loader';

export default function Loading() {
  return (
    <ContentLoader
      viewBox="0 0 800 400"
      height={400}
      width={800}
      className="max-w-container m-auto mt-10"
    >
      <rect x="470" y="135" rx="5" ry="5" width="70" height="10" />
      <rect x="470" y="160" rx="5" ry="5" width="70" height="10" />
      <rect x="550" y="160" rx="5" ry="5" width="70" height="10" />
      <rect x="630" y="160" rx="5" ry="5" width="70" height="10" />
      <rect x="470" y="185" rx="5" ry="5" width="300" height="100" />
      <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
      <rect x="229" y="300" rx="0" ry="0" width="0" height="0" />
      <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
      <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
      <rect x="10" y="20" rx="0" ry="0" width="40" height="44" />
      <rect x="10" y="80" rx="0" ry="0" width="40" height="44" />
      <rect x="10" y="140" rx="0" ry="0" width="40" height="44" />
      <rect x="194" y="329" rx="0" ry="0" width="0" height="0" />
      <rect x="192" y="323" rx="0" ry="0" width="0" height="0" />
      <rect x="185" y="323" rx="0" ry="0" width="0" height="0" />
      <rect x="10" y="200" rx="0" ry="0" width="40" height="44" />
      <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
      <rect x="470" y="58" rx="0" ry="0" width="130" height="6" />
      <rect x="620" y="58" rx="0" ry="0" width="130" height="6" />
      <rect x="470" y="74" rx="0" ry="0" width="300" height="50" />
      <rect x="10" y="340" rx="0" ry="0" width="700" height="50" />
    </ContentLoader>
  );
}
