import { FirstOnboard, SecondOnboard, ThirdOnboard } from "@/assets"
import { colors } from "@/constants"

export const OnBoarding1 = () => {
    return (
        <section className="space-y-4">
            <FirstOnboard className="mx-auto" />
            <p className={`text-center text-lg text-[${colors.Yellow}]`}>Explore App Features</p>
            <p className={`text-center text-[${colors.GraySecondary}]`}>Amet minim mollit non deserunt ullamco est</p>
        </section>
    )
}

export const OnBoarding2 = () => {
    return (
        <section className="space-y-4">
            <SecondOnboard className="mx-auto" />
            <p className={`text-center text-lg text-[${colors.Yellow}]`}>Security Matters</p>
            <p className={`text-center text-[${colors.GraySecondary}]`}>Amet minim mollit non deserunt ullamco est</p>
        </section>
    )
}
export const OnBoarding3 = () => {
    return (
        <section className="space-y-4">
            <ThirdOnboard className="mx-auto" />
            <p className={`text-center text-lg text-[${colors.Yellow}]`}>Explore In-App Services</p>
            <p className={`text-center text-[${colors.GraySecondary}]`}>Amet minim mollit non deserunt ullamco est</p>
        </section>
    )
}