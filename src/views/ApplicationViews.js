import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
// GAMES
import { GameList } from '../components/game/GameList'
import { GameDetails } from '../components/game/GameDetails'
import { GameForm } from '../components/game/GameForm'
import { UpdateGameForm } from '../components/game/UpdateGameForm'
// EVENTS
import { EventList } from '../components/event/EventList'
import { EventDetails } from '../components/event/EventDetails'
import { EventForm } from '../components/event/EventForm'
import { UpdateEventForm } from '../components/event/UpdateEventForm'
import { Authorized } from "./Authorized"



export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/games" element={<GameList />} />
                <Route path="/events" element={<EventList />} />
                <Route path="/games/new" element={<GameForm />} />
                <Route path="/events/new" element={<EventForm />} />
                <Route path="/games/:gameId" element={<GameDetails />} />
                <Route path="/events/:eventId" element={<EventDetails />} />
                <Route path="/games/update/:gameId" element={<UpdateGameForm />} />
                <Route path="/events/update/:eventId" element={<UpdateEventForm />} />


            </Route>
        </Routes>
    </>
}
