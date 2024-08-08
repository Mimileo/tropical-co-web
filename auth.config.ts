import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnLoginPage = nextUrl.pathname === '/login';

      // Allow access to the login page for all users
      if (isOnLoginPage) {
        return true;
      }

      // Allow access to the MainNav and other public pages for logged-in users
      if (!isOnDashboard && !isOnLoginPage) {
        return true;
      }

      // Redirect logged-in users to the dashboard if trying to access non-allowed pages
      if (isLoggedIn && isOnDashboard) {
        return true;
      }

      // For non-logged-in users, redirect to login page if accessing restricted pages
      if (!isLoggedIn && isOnDashboard) {
        return Response.redirect(new URL('/login', nextUrl));
      }

      // Default case: allow access
      return true;
    },
  },
};
