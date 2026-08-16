import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AddDisk } from './pages/AddDisk';
import { ArchivePage } from './pages/ArchivePage';
import { SettingsPage } from './pages/SettingsPage';
import { HelpPage } from './pages/HelpPage';
import { DiskPage } from './pages/DiskPage';
import { DiskEject } from './pages/DiskEject';
import { TabBar } from './components/TabBar';
import { ImageViewer } from './pages/ImageViewer';
import './index.css';

function App() {
  return (
    <HashRouter>
      <div className="min-h-[100dvh] bg-tg-bg flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-disk" element={<AddDisk />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/disk/:id" element={<DiskPage />} />
          <Route path="/disk/:id/eject" element={<DiskEject />} />
          <Route path="/disk/:id/image" element={<ImageViewer />} />
        </Routes>
      </div>
      <TabBar />
    </HashRouter>
  );
}

export default App;