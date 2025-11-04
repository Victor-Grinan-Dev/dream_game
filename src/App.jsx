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
import MyArmy from './components/views/myArmy/MyArmy.jsx'

import './App.css'

function RequireAuth() {
  const isLogged = useSelector((state) => state.portal.isLogged)
  return isLogged ? <Outlet /> : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />

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
            <Route path="game-combat" element={<GameCombat />} />
            <Route path="my-army" element={<MyArmy />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
