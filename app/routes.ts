import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes"

export default [
    // Static Routes
    index("routes/home.tsx"),
    ...prefix("adi", [route("about", "routes/about.tsx"), route("post/:postId", "routes/post.tsx")]),

    // Nested Routes using the `layout` helper
    layout("routes/dashboard.tsx", [
        route("finance", "routes/finance.tsx"),
        route("personal-info", "routes/personal-info.tsx"),
    ]),
] satisfies RouteConfig
