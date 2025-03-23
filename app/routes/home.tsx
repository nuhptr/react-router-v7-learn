import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
    return [
        {
            title: "New React Router v7",
        },
        {
            name: "description",
            content: "Welcome to React Router!",
        },
    ]
}

export default function Home() {
    return <>Hey</>
}
