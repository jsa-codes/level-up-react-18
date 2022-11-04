import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { EventList } from '../components/event/EventList'
import { GameForm } from '../components/game/GameForm'
import { Authorized } from "./Authorized"



export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<EventList />} />
                <Route path="/games/new" element={<GameForm />} />
            </Route>
        </Routes>
    </>
}
