
import Login from "./Login";
import Chat from "./Chat";

export const publicRoutes = [
    {
        path: '/login',
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: '/chat',
        Component: Chat
    }
]