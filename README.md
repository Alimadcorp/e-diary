# E-Diaries

## Ummm App Structure:
`/:user` for all journals of a user, alogn with user profile and `/:user/:journal` for a specific one, `/:user/:journal/#X` where X is a number, to goto that specific line, `/:user/:journal/?comment=commentId` will scroll to that specific comment 
`/create` to create a new journal, and same page will ask for creation of a diary if one doesnt exist already on the user, will only ask for journal title, alias (the id of the journal, used in params)
`/edit/:journal` to edit a created journal, will have a full featured markdown editor (@uiw/react-md-editor), images will be uploaded to IMGBB
`/browse` to search for journals (title and short description, after: before: fields, and author:username too!), can sort by latest published, oldest, latest edited, alphabetical, can also search for users (by username, bio, and displayName)
`/onboard` to login or signup (will take to Firebase Google Auth page if not signed in, if signed in, will check if user profile exists, if it doesnt, ask for displayName, pfp, bio, if it does, continue to `/app`)
`/login` and `/signup` redirect to `/onboard`
`/app` with a app layout with three tabs: `feed`, `create` (will list your journals, and allow creation of new ones), and `me` (will have allow editing profile, logging out)
... more?

## Firestore Structure:
Collections:
    /users
        /:username (upto 20 chars, A-Za-z_-)
            userId (google auth user id, will be used for security rules?)
            displayName (upto 32 chars)
            joinDate
            pfpUrl
            bio
            email
            ...more if needed
            /journals (collection)
                /:journal (private and public journals are here)
                    username
                    viewMode (public | private | unlisted | password)
                    password?
                    publishDate
                    edits (Array of Date)
                    title (50 char max)
                    short (150 char max short description)
                    content? (long markdown string, can only be private if no content)
                    ...more if needed
                    /comments (collection)
                        /:commendId (owners can delete comments)
                            text (3000 letters max, markdown)
                            commenter (username)
                            date
### did i just put everything in a singular collection ? :sob:

## Third Party Services:
- Firebase Google Auth
- Firebase Firestore

## Stack & Tools used:
- NextJS + TailwindCSS + TS + Lucide
- Firebase
- ImgBB for image storage
- @uiw/react-md-editor

### A project by Muhammad Ali

# Deployment

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

## Environment setup

Make a copy of `.env.example` and rename it to `.env` or `.env.local`, and fill it in with required fields!

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
