import { TopBar } from './Components/Topbar';
import { HandleHeader } from './Components/HandleHeader';

export function Header() {
  return (
    <header className="z-40 sticky top-0">
      <TopBar />
      <HandleHeader />
    </header>
  );
}
