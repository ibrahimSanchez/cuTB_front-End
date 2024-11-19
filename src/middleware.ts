import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isExpired } from 'react-jwt';


export function middleware(req: NextRequest) {
    const token = req.cookies.get('x-token')?.value;
    const userRole = req.cookies.get('x-role')?.value;

    const requestedPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();

    // Si no hay token y se intenta acceder a una ruta protegida, redirige al login
    if (!token) {
        if (!requestedPage.includes('/auth')) {
            url.pathname = `/auth/login`;
            url.search = `p=${requestedPage}`;
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }

    const isTokenExpired = isExpired(token);

    // Redirige al login si el token ha expirado y no es una ruta de autenticación
    if (isTokenExpired && !requestedPage.includes('/auth')) {
        url.pathname = `/auth/login`;
        url.search = `p=${requestedPage}`;
        return NextResponse.redirect(url);
    }


    // Restricciones de acceso por rol
    if (requestedPage.startsWith('/admin')) {
        if (!userRole) {
            url.pathname = `/auth/login`;
            url.search = `p=${requestedPage}`;
            return NextResponse.redirect(url);
        }

        if (requestedPage === '/admin/users' ||
            requestedPage === '/admin/providers' ||
            requestedPage === '/admin/approvalCurseExam' ||
            requestedPage === '/admin/membership_provider_request'
        ) {
            if (userRole !== 'ADMIN_ROLE') {
                url.pathname = `/unauthorized`;
                url.search = `p=${requestedPage}`;
                return NextResponse.redirect(url);
            }
        }
        
        if ((requestedPage === '/admin/curses' ||
            requestedPage === '/admin/exams' ||
            requestedPage === '/admin/news' ||
            requestedPage === '/admin/scr'
        ) &&
            (userRole !== 'ADMIN_ROLE' && userRole !== 'ACTIVITY_MANAGER_ROLE')) {
            url.pathname = `/unauthorized`;
            url.search = `p=${requestedPage}`;
            return NextResponse.redirect(url);
        }
    }

    // Redirige si está autenticado e intenta acceder a /auth/login
    if (!isTokenExpired && requestedPage.includes('/auth/login')) {
        url.pathname = `/`;
        url.search = `p=${requestedPage}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/auth/:path*',
    ]
};
