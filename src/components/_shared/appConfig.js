export function getAppByKey(appConfig, appKey) {
    return appConfig[appKey] ?? null;
}

export function renderConfiguredApp(
    appConfig,
    appKey,
    renderProps,
    fallbackMessage = "App niet gevonden"
) {
    const app = getAppByKey(appConfig, appKey);

    if (!app?.render) {
        return fallbackMessage;
    }

    return app.render(renderProps);
}

export function buildMenuApps(appConfig, order, isVisible = () => true) {
    return order
        .map((key) => getAppByKey(appConfig, key))
        .filter((app) => app && isVisible(app))
        .map((app) => ({
            key: app.key,
            label: app.menuLabel ?? app.desktopLabel ?? app.title,
            icon: app.icon,
        }));
}

export function buildDesktopIcons(
    appConfig,
    order,
    {
        isVisible = () => true,
        getBadge = () => false,
    } = {}
) {
    return order
        .map((key) => getAppByKey(appConfig, key))
        .filter((app) => app && isVisible(app))
        .map((app) => ({
            key: app.key,
            label: app.desktopLabel ?? app.title,
            icon: app.icon,
            badge: getBadge(app),
        }));
}
