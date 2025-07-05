import { Global, css } from '@emotion/react';
import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { router } from './Router';

const root = document.getElementById('app');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Global
        styles={css`
          body {
            font-family:
              'Rajdhani',
              Microsoft JhengHei,
              sans-serif;
            width: 100%;
            height: 100%;
          }

          html {
            width: 100%;
            height: 100%;
          }

          #app {
            width: 100%;
            height: 100%;
          }

          a {
            color: #222222;
            text-decoration: none;
            transition: all 0.5s;
          }

          a:hover {
            color: #bdbdbd;
            text-decoration: none;
          }

          div {
            transition: all 0.5s;
          }

          img {
            transition: all 0.5s;
          }
        `}
      />
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
