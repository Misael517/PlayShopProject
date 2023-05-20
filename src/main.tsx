import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import Discover from './Pages/Discover/Discover.tsx'
import './index.css'

// Video Games pages
import TheWitcher3 from './Pages/GamesPages/TheWitcher3/TheWitcher.tsx';
import Gta5 from './Pages/GamesPages/GTA5/Gta5.tsx';
import EldenRing from './Pages/GamesPages/EldenRing/EldenRing.tsx';
import Stray from './Pages/GamesPages/Stray/Stray.tsx';
import HorizonForbidden from './Pages/GamesPages/HorizonForbidden/HorizonForbidden.tsx';
import PlagueRequiem from './Pages/GamesPages/PlagueRequiem/PlagueRequiem.tsx';
import TheCalistoProtocol from './Pages/GamesPages/TheCalistoProtocol/TheCalistoProtocol.tsx';
import NeeForSpeed from './Pages/GamesPages/NeedForSpeed/NeedForSpeed.tsx';
import GothamKnights from './Pages/GamesPages/GothamKnights/GothamKnights.tsx';
import HighOnLife from './Pages/GamesPages/HighOnLife/HighOnLife.tsx';
import SonicFrontiers from './Pages/GamesPages/SonicFrontiers/SonicFrontiers.tsx';
import Kirby from './Pages/GamesPages/Kirby/Kirby.tsx';
import DyingLight2 from './Pages/GamesPages/DyingLight2/DyingLight2.tsx';
import GodOfWar from './Pages/GamesPages/GodOfWar/GodOfWar.tsx';
import Cyberpunk2077 from './Pages/GamesPages/Cyberpunk2077/Cyberpunk2077.tsx';
import Kena from './Pages/GamesPages/Kena/Kena.tsx';
import Acc from './Pages/GamesPages/Acc/Acc.tsx';
import Fh5 from './Pages/GamesPages/FH5/FH5.tsx';
import Destiny2 from './Pages/GamesPages/Destiny2/Destiny2.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: 'Error page',
  },
  {
    path: "/discover",
    element: <Discover />
  },
  {
    path: "/profile",
    element: ''
  },
  {
    path: "/cart",
    element: ''
  },
  {
    path: "/TheWitcher3",
    element: <TheWitcher3 />
  },
  {
    path: "/Gta5",
    element: <Gta5 />
  },
  {
    path: "/EldenRing",
    element: <EldenRing />
  },
  {
    path: "/Stray",
    element: <Stray />
  },
  {
    path: "/HorizonForbiddenWest",
    element: <HorizonForbidden />
  },
  {
    path: "/APlagueTaleRequiem",
    element: <PlagueRequiem />
  },
  {
    path: "/TheCalistoProtocol",
    element: <TheCalistoProtocol />
  },
  {
    path: "/NeedForSpeedUnbound",
    element: <NeeForSpeed />
  },
  {
    path: "/GothamKnights",
    element: <GothamKnights />
  },
  {
    path: "/HighOnLife",
    element: <HighOnLife />
  },
  {
    path: "/SonicFrontiers",
    element: <SonicFrontiers />
  },
  {
    path: "/KirbyAndTheForgottenLand",
    element: <Kirby />
  },
  {
    path: "/DyingLight2",
    element: <DyingLight2 />
  },
  {
    path: "/GodOfWarRagnarok",
    element: <GodOfWar />
  },
  {
    path: "/Cyberpunk2077",
    element: <Cyberpunk2077 />
  },
  {
    path: "/KenaBridgeOfSpirits",
    element: <Kena />
  },
  {
    path: "/AssettoCorsaCompetizione",
    element: <Acc />
  },
  {
    path: "/ForzaHorizon5",
    element: <Fh5 />
  },
  {
    path: "/Destiny2",
    element: <Destiny2 />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
