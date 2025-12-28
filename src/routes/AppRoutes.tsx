import { BrowserRouter } from "react-router-dom"
import { MenuMappingRouter } from "./MenuMappingRouter"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <MenuMappingRouter />
        </BrowserRouter>
    )
}
