import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';

import Home from './pages/home';
import Converter from './pages/converter';
import Builder from './pages/builder';
import Cli from './pages/cli';
import MigrationGuide from './pages/migration-guide';
import LibsAlternatives from './pages/libs-alternatives';
import TestCases from './pages/test-cases';
import Error404 from './pages/error404';

export const routes: RouteDefinition[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/reactjs-to-solidjs-converter',
        component: Converter,
    },
    {
        path: '/builder',
        component: Builder,
    },
    {
        path: '/reactjs-to-solidjs-cli-converter',
        component: Cli,
    },
    {
        path: '/reactjs-to-solidjs-migration-guide',
        component: MigrationGuide,
    },
    {
        path: '/reactjs-to-solidjs-migration-guide',
        component: MigrationGuide,
    },
    {
        path: '/reactjs-solidjs-libs-alternatives',
        component: LibsAlternatives,
    },
    {
        path: '/test-cases',
        component: TestCases,
    },
    {
        path: '/*',
        component: Error404,
    },
];