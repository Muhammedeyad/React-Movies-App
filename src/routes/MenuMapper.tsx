import { menuConstants } from "../constants/menu-constants"
import { Cart } from "../pages/Cart"
import { MovieDetails } from "../pages/MovieDetails"
import { MoviesDashboard } from "../pages/MoviesDashboard"

export const MenuMapper = {
    [menuConstants.Movie.Dashboard]: {
        path: menuConstants.Movie.Dashboard,
        element: <MoviesDashboard/>
    },
    [menuConstants.Movie.Cart]: {
        path: menuConstants.Movie.Cart,
        element: <Cart/>
    },
    [menuConstants.Movie.Detail]: {
        path: menuConstants.Movie.Detail,
        element: <MovieDetails/>
    }
}
