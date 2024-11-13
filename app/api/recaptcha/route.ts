export type RecaptchaResponse = {
    message: string;
    success: boolean;
    score?: number;
    error?: Error;
}

export async function POST(request: Request) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY

    const requestBody = await request.json()
    const { responseToken } = requestBody
    const siteverifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${responseToken}`

    try {
        const res = await fetch(siteverifyUrl, {
            method: "POST",
        }).then(res => res.json());
        if (res && res.success && res.score > 0.6) {
            return Response.json({ message: `Verified not bot. Score: ${res.score}`, success: true, score: res.score })
        } else {
            return Response.json({ success: false, score: res.score, message: "Suspected bot" })
        }
    } catch (error) {
        return Response.json({ success: false, message: "Error fetching data from Google Recaptcha", error })
    }



}