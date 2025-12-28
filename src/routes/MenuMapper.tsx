import { menuConstants } from "../constants/menu-constants"
import { Cart } from "../pages/Cart"
import { MoviesDashboard } from "../pages/MoviesDashboard"

export const MenuMapper = {
    [menuConstants.Movie.Dashboard]: {
        path: menuConstants.Movie.Dashboard,
        element: <MoviesDashboard/>
    },
    [menuConstants.Movie.Cart]: {
        path: menuConstants.Movie.Cart,
        element: <Cart/>
    }
}
