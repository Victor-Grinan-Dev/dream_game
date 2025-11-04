import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Layout from './layout/Layout.jsx'
import MyProfile from './components/views/myProfile/MyProfile.jsx'
import WarRoom from './components/views/warRoom/WarRoom.jsx'
import Login from './components/views/loginSignup/Login.jsx'
import NotFound from './components/views/notFound/NotFound.jsx'
import CreateCampaign from './components/views/createCampaign/CreateCampaign.jsx'
import CreateFormation from './components/views/createFormation/CreateFormation.jsx'
import CreateNewMap from './components/views/createNewMap/CreateNewMap.jsx'
import GameCombat from './components/views/gameCombat/GameCombat.jsx'
import GameMap from './components/views/gameMap/GameMap.jsx'
import MyArmy from './components/views/myArmy/MyArmy.jsx'
import Settings from './components/views/settings/Settings.jsx' 

import './styles/main.scss'

function RequireAuth() {
  const isLogged = useSelector((s) => s.portal.isLogged)
  return isLogged ? <Outlet /> : <Navigate to="/login" replace />
}

function RequireGuest({ children }) {
  const isLogged = useSelector((s) => s.portal.isLogged)
  return isLogged ? <Navigate to="/my-profile" replace /> : children
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public (redirect if already logged in) */}
        <Route path="/login" element={
          <RequireGuest>
            <Login />
          </RequireGuest>
        } />

        {/* App layout */}
        <Route element={<Layout />}>
          {/* Protected */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Navigate to="my-profile" replace />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="war-room" element={<WarRoom />} />
            <Route path="create-campaign" element={<CreateCampaign />} />
            <Route path="create-formation" element={<CreateFormation />} />
            <Route path="create-new-map" element={<CreateNewMap />} />
            <Route path="game-map" element={<GameMap />} />
            <Route path="game-combat" element={<GameCombat />} />
            <Route path="my-army" element={<MyArmy />} />
            <Route path="my-profile/settings" element={<Settings />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
