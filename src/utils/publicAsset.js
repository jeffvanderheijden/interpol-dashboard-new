export function publicAsset(path) {
    if (!path) {
        return path;
    }

    if (
        path.startsWith("http://") ||
        path.startsWith("https://") ||
        path.startsWith("data:") ||
        path.startsWith("blob:")
    ) {
        return path;
    }

    const baseUrl = import.meta.env.BASE_URL || "/";

    if (path.startsWith("/")) {
        return `${baseUrl}${path.slice(1)}`;
    }

    return `${baseUrl}${path}`;
}
