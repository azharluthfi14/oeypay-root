import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { OnBoarding1, OnBoarding2, OnBoarding3 } from "@/components"

export const OnBoarding = () => {
    const [currentBoard, setCurrentBoard] = useState(1)
    const navigate = useNavigate()


    const renderBoard = () => {
        switch (currentBoard) {
            case 1:
                return <OnBoarding1 />

            case 2:
                return <OnBoarding2 />
            case 3:
                return <OnBoarding3 />
            default:
                return null
        }
    }

    return (
        <>
            <main className="my-0 mx-auto min-h-full max-w-screen-sm">
                <div className="my-0 mx-auto min-h-screen max-w-[480px] overflow-x-hidden overflow-hidden  bg-white2 pb-[66px]">
                    <div className="p-4">
                        <div>
                            OnBoarding
                        </div>
                        {renderBoard()}
                        <div className="flex flex-col my-4 gap-y-3">
                            <button onClick={() => setCurrentBoard(currentBoard + 1)}>Next</button>
                            <button onClick={() => [localStorage.setItem('onboard', 'true'), navigate('/home', {
                                replace: true
                            })]}>Skip</button>
                            <button onClick={() => localStorage.removeItem('onboard')}>Remove Local Storage Item</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}