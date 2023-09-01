import { TopBar } from './Content/Topbar';
import { HandleHeader } from './Content/HandleHeader';

export function Header() {
  return (
    <header className="z-40 sticky top-0">
      <TopBar />
      <HandleHeader />
    </header>
  );
}
