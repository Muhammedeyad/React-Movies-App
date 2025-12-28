import { Route, Routes } from "react-router-dom"
import { MenuMapper } from "./MenuMapper"
import { AppLayout } from "../layouts/AppLayout"

export const MenuMappingRouter = () => {
    const menus = [
        { path: "/", diplayName: "Dashboard" },
        { path: "/cart", displayName: "Cart" },
        { path: "/detail/:id", displayName: "Movie Details"}
    ]

    return (<Routes>
        <Route path="/" element={<AppLayout/>}>
            {menus.map((menu) => {
                const currentMenu = MenuMapper[menu.path]
                return <Route path={currentMenu.path} element={currentMenu.element} />
            })}
        </Route>

    </Routes>)
}
