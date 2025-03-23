import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
    // Static Routes
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("post/:postId", "routes/post.tsx"),

    // Nested Routes
    route("dashboard", "routes/dashboard.tsx", [
        route("finances", "routes/finance.tsx"),
        route("personal-info", "routes/personal-info.tsx"),
    ]),
] satisfies RouteConfig
