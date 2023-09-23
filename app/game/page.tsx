"use client";

import { motion } from "framer-motion";
import { Suspense, useMemo, useState } from "react";
import { Input } from "@nextui-org/react";

export default function GamePage() {
    const [email, setEmail] = useState("claraprotectsociety.org");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //function Validate
    const validateEmail = (email: string): boolean => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i).test(email);
    const validateText = (text: string): boolean => !(/\d/.test(text));

    // isInputValid
    const isInvalid = useMemo(() => {
        if (email === "") return true;
        return validateEmail(email) ? false : true;
    }, [email]);
    const isFirstNamevalid = useMemo(() => {
        if (firstName === "") return true;
        return validateText(firstName) ? false : true;
    }, [firstName]);
    const isLastNamevalid = useMemo(() => {
        if (firstName === "") return true;
        return validateText(firstName) ? false : true;
    }, [firstName]);
    return (
        <div className='flex relative flex-col w-screen min-h-screen overflow-hidden bg-gray-200'>
        <div className="flex flex-col w-[90vw] min-h-screen mx-auto mt-4 bg-white rounded-lg drop-shadow-lg">
            <motion.div
                initial={{
                    y: 30,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        duration: 1.5,
                        delay: 0.5
                    },
                }}
                className="mx-auto font-bold tracking-tight hover:tracking-[0.3em] max-sm:hover:tracking-normal duration-1000 ease-soft-spring font-sans mt-24 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-amber-900 to-black"
            >
                fill all blanks
                <motion.span className="animate-pulse text-black align-top"
                   initial={{
                    opacity: 0
                   }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 1, // Adjust the duration of the animation
                      ease: "linear", // Use "linear" for a constant speed animation
                      repeat: Infinity, // This makes the animation repeat infinitely
                      repeatType: "loop", // Use "loop" to create a continuous loop
                    }
                  }}
                > _
                </motion.span>
            </motion.div>
            <div className="font-bold text-black/30 mt-4 w-[400px] mx-auto">This website doesn't require real information, you can either provide real information optionally or use fake information to pass vaildate.</div>
            <div className="flex flex-col mx-auto mt-24">
                <div className="font-medium mx-0 mb-4">1. please fill first name in the application form  </div>
                <Input
                    autoComplete="new-password"
                    value={firstName}
                    type="text"
                    size="lg"
                    label="First Name"
                    variant="bordered"
                    isInvalid={isFirstNamevalid}
                    color={isFirstNamevalid ? "danger" : "success"}
                    errorMessage={isFirstNamevalid && "Please enter a name"}
                    onValueChange={setFirstName}
                    className="w-96 mb-12"
                />     
                <div className="font-medium mx-0 mb-4">2. please fill Last name in the application form  </div>
                <Input
                    autoComplete="new-password"
                    value={lastName}
                    type="text"
                    size="lg"
                    label="Last Name"
                    variant="bordered"
                    isInvalid={isLastNamevalid}
                    color={isLastNamevalid ? "danger" : "success"}
                    errorMessage={isLastNamevalid && "Please enter a name"}
                    onValueChange={setLastName}
                    className="w-96 mb-12"
                />               
                <div className="font-medium mx-0 mb-4">3. please fill email address in the application form </div>
                <Input
                    autoComplete="new-password"
                    value={email}
                    type="email"
                    size="lg"
                    label="Email"
                    variant="bordered"
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : "success"}
                    errorMessage={isInvalid && "Please enter a valid email"}
                    onValueChange={setEmail}
                    className="w-96 mb-12"
                />
            </div>
        </div>
    </div>
    )
}