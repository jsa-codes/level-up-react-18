import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { EventDetails } from '../components/event/EventDetails'
import { EventForm } from '../components/event/EventForm'
import { EventList } from '../components/event/EventList'
import { UpdateEventForm } from '../components/event/UpdateEventForm'
import { GameDetails } from '../components/game/GameDetails'
import { GameForm } from '../components/game/GameForm'
import { GameList } from '../components/game/GameList'
import { UpdateGameForm } from '../components/game/UpdateGameForm'
import { Authorized } from "./Authorized"



export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/games" element={<GameList />} />
                <Route path="/games/:gameId" element={<GameDetails />} />
                <Route path="/games/new" element={<GameForm />} />
                <Route path="/games/update" element={<UpdateGameForm />} />

                <Route path="/events" element={<EventList />} />
                <Route path="/events/:eventId" element={<EventDetails />} />
                <Route path="/events/new" element={<EventForm />} />
                <Route path="/events/update" element={<UpdateEventForm />} />

                
            </Route>
        </Routes>
    </>
}
