import './assets/css/App.css';
import { useState } from 'react';

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { ReportFinancial } from './components/ReportFinancial';
import { Schedule } from './components/Schedule';
import { Buzon } from './components/Buzon';
import { Contact } from './components/Contact';
import { AudioPlayer } from './components/AudioPlayer';

function App() {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <>
      <Header onOpenReport={() => setIsReportOpen(true)} />
      <Banner />
      <ReportFinancial
        isReportOpen={isReportOpen}
        setIsReportOpen={setIsReportOpen}
      />
      <Schedule />
      <Buzon />
      <Contact />
      <AudioPlayer />
    </>
  );
}

export default App;
