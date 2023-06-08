import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './app/store.tsx';
import { Provider } from 'react-redux';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.tsx';
import Discover from './Pages/Discover/Discover.tsx'
import Cart from './Pages/Cart/Cart.tsx';
import Auth from './Pages/SingIn/SingIn.tsx';
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Discover" element={<Discover />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SingIn" element={<Auth />} />
          <Route path="/Gta5" element={<Gta5 />} />
          <Route path="EldenRing" element={<EldenRing />} />
          <Route path="Stray" element={<Stray />} />
          <Route path="/HorizonForbiddenWest" element={<HorizonForbidden />} />
          <Route path="/APlagueTaleRequiem" element={<PlagueRequiem />} />
          <Route path="/TheCalistoProtocol" element={<TheCalistoProtocol />} />
          <Route path="/NeedForSpeedUnbound" element={<NeeForSpeed />} />
          <Route path="/GothamKnights" element={<GothamKnights />} />
          <Route path="/HighOnLife" element={<HighOnLife />} />
          <Route path="/SonicFrontiers" element={<SonicFrontiers />} />
          <Route path="/KirbyAndTheForgottenLand" element={<Kirby />} />
          <Route path="/DyingLight2" element={<DyingLight2 />} />
          <Route path="/TheWitcher3" element={<TheWitcher3 />} />
          <Route path="/GodOfWarRagnarok" element={<GodOfWar />} />
          <Route path="/Cyberpunk2077" element={<Cyberpunk2077 />} />
          <Route path="/KenaBridgeOfSpirits" element={<Kena />} />
          <Route path="/AssettoCorsaCompetizione" element={<Acc />} />
          <Route path="/ForzaHorizon5" element={<Fh5 />} />
          <Route path="/Destiny2" element={<Destiny2 />} />
          <Route path="/DoomEthernal" element={<DoomEthernal />} />
          <Route path="/HorizonZeroDawn" element={<HorizonZero />} />
          <Route path="/AssassinsCreedValhalla" element={<Valhalla />} />
          <Route path="/JediFallenOrder" element={<JediFallenOrder />} />
          <Route path="/MortalKombatX" element={<MortalKombatX />} />
          <Route path="/Stalker2" element={<Stalker2 />} />
          <Route path="/BlackMythWuKong" element={<WuKong />} />
          <Route path="/SuicideSquad" element={<SuicideSquad />} />
          <Route path="/RiseOfTheRonin" element={<RiseOfTheRonin />} />
          <Route path="/ForzaMotosport" element={<ForzaMotosport />} />
          <Route path="/TheDayBefore" element={<TheDayBefore />} />
          <Route path="/Starfield" element={<Starfield />} />
          <Route path="/RobocopRougeCity" element={<Robocop />} />
          <Route path="/LiesOfP" element={<LiesOfP />} />
          <Route path="/ImmortalsOfAveum" element={<ImmortalsOfAveum />} />
          <Route path="/FinalFantasyXVI" element={<FinalFantasy />} />
          <Route path="/Pikmin4" element={<Pikmin4 />} />
          <Route path="/VampireBloodLines2" element={<BloodLines2 />} />
          <Route path="/HogwartsLegacy" element={<HogwartsLegacy />} />
          <Route path="/AtomicHeart" element={<AtomicHeart />} />
          <Route path="/DeadSpace" element={<DeadSpace />} />
          <Route path="/JediSurvivor" element={<JediSurvivor />} />
          <Route path="/ResidentEvil4" element={<ResidentEvil4 />} />
          <Route path="/ZeldaTearsOfTheKingdom" element={<Zelda />} />
          <Route path="/Redfall" element={<Redfall />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
