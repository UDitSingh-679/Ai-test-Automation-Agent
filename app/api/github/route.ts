import { redirect } from "next/navigation"

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_REDIRECT_URI = process.env.GITHUB_REDIRECT_URI


export async function GET() {
    const params = new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID!,
        redirect_uri: process.env.GITHUB_REDIRECT_URI!,
        scope: 'repo read:user'
    })

    redirect(`https://github.com/login/oauth/authorize?${params}`)
}