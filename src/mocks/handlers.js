import { rest } from "msw";

const baseURL = "https://drf-api-circle-320cd30d1665.herokuapp.com/"
export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
                ctx.json({
                pk: 2,
                username: "Max",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 2,
                profile_image: "https://res.cloudinary.com/dydlslgyc/image/upload/v1/media/images/european-shorthair-8601492_1280_syhen3"
                }))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
    ];