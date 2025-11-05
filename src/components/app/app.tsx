import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthStatus } from '@consts';
import PrivateRoute from '@components/private-route/private-route';
import FavoritesPage from '@pages/favorites-page/favorites-page.tsx';
import LoginPage from '@pages/login-page/login-page.tsx';
import MainPage from '@pages/main-page/main-page.tsx';
import OfferPage from '@pages//offer-page/offer-page.tsx';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import { Offer, Review } from '@types';

type AppProps = {
    placesCount: number;
    offers: Offer[];
    reviews: Review[];
}

export default function App({placesCount, offers, reviews}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage placesCount={placesCount} offers={offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthStatus.Auth}
              >
                <FavoritesPage offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferPage
                offers={offers}
                reviews={reviews}
              />
            }
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
