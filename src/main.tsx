import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './StateManagement/store.tsx';
import { Provider } from 'react-redux';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Discover from './Pages/Discover/Discover.tsx'
import Cart from './Pages/Cart/Cart.tsx';
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
import DoomEthernal from './Pages/GamesPages/DoomEthernal/DoomEthernal.tsx';
import HorizonZero from './Pages/GamesPages/HorizonZero/HorizonZero.tsx';
import Valhalla from './Pages/GamesPages/Valhalla/Valhalla.tsx';
import JediFallenOrder from './Pages/GamesPages/JediFallenOrder/JediFallenOrder.tsx';
import MortalKombatX from './Pages/GamesPages/MortalKombatX/MortalKombatX.tsx';
import Stalker2 from './Pages/GamesPages/Stalker2/Stalker2.tsx';
import WuKong from './Pages/GamesPages/WuKong/WuKong.tsx';
import SuicideSquad from './Pages/GamesPages/SuicideSquad/SuicideSquad.tsx';
import RiseOfTheRonin from './Pages/GamesPages/RiseOfTheRonin/RiseOfTheRonin.tsx';
import ForzaMotosport from './Pages/GamesPages/ForzaMotosport/ForzaMotosport.tsx';
import Starfield from './Pages/GamesPages/Starfield/Starfield.tsx';
import TheDayBefore from './Pages/GamesPages/TheDayBefore/TheDayBefore.tsx';
import Robocop from './Pages/GamesPages/Robocop/Robocop.tsx';
import LiesOfP from './Pages/GamesPages/LiesOfP/LiesOfP.tsx';
import ImmortalsOfAveum from './Pages/GamesPages/ImmortalOfAveum/ImmortalsOfAveum.tsx';
import FinalFantasy from './Pages/GamesPages/FinalFantasy/FinalFantasy.tsx';
import Pikmin4 from './Pages/GamesPages/Pikmin4/Pikmin4.tsx';
import BloodLines2 from './Pages/GamesPages/BloodLines2/BloodLines2.tsx';
import HogwartsLegacy from './Pages/GamesPages/HogwartsLegacy/HogwartsLegacy.tsx';
import AtomicHeart from './Pages/GamesPages/AtomicHeart/AtomicHeart.tsx';
import DeadSpace from './Pages/GamesPages/DeadSpace2/DeadSpace.tsx';
import JediSurvivor from './Pages/GamesPages/JediSurvivor/JediSurvivor.tsx';
import ResidentEvil4 from './Pages/GamesPages/ResidentEvil4/ResidentEvil4.tsx';
import Zelda from './Pages/GamesPages/Zelda/Zelda.tsx';
import Redfall from './Pages/GamesPages/Redfall/Redfall.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: 'Error page',
  },
  {
    path: "/Discover",
    element: <Discover />
  },
  {
    path: "/Profile",
    element: ''
  },
  {
    path: "/Cart",
    element: <Cart />
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
  {
    path: "/DoomEthernal",
    element: <DoomEthernal />
  },
  {
    path: "/HorizonZeroDawn",
    element: <HorizonZero />
  },
  {
    path: "/AssassinsCreedValhalla",
    element: <Valhalla />
  },
  {
    path: "/JediFallenOrder",
    element: <JediFallenOrder />
  },
  {
    path: "/MortalKombatX",
    element: <MortalKombatX />
  },
  {
    path: "/Stalker2",
    element: <Stalker2 />
  },
  {
    path: "/BlackMythWuKong",
    element: <WuKong />
  },
  {
    path: "/SuicideSquad",
    element: <SuicideSquad />
  },
  {
    path: "/RiseOfTheRonin",
    element: <RiseOfTheRonin />
  },
  {
    path: "/ForzaMotosport",
    element: <ForzaMotosport />
  },
  {
    path: "/Starfield",
    element: <Starfield />
  },
  {
    path: "/TheDayBefore",
    element: <TheDayBefore />
  },
  {
    path: "/RobocopRougeCity",
    element: <Robocop />
  },
  {
    path: "/LiesOfP",
    element: <LiesOfP />
  },
  {
    path: "/ImmortalsOfAveum",
    element: <ImmortalsOfAveum />
  },
  {
    path: "/FinalFantasyXVI",
    element: <FinalFantasy />
  },
  {
    path: "/Pikmin4",
    element: <Pikmin4 />
  },
  {
    path: "/VampireBloodLines2",
    element: <BloodLines2 />
  },
  {
    path: "/HogwartsLegacy",
    element: <HogwartsLegacy />
  },
  {
    path: "/AtomicHeart",
    element: <AtomicHeart />
  },
  {
    path: "/DeadSpace",
    element: <DeadSpace />
  },
  {
    path: "/JediSurvivor",
    element: <JediSurvivor />
  },
  {
    path: "/ResidentEvil4",
    element: <ResidentEvil4 />
  },
  {
    path: "/ZeldaTearsOfTheKingdom",
    element: <Zelda />
  },
  {
    path: "/Redfall",
    element: <Redfall />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
