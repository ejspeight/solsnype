"use client";

import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useAuth } from "@/app/components/AuthContext"; // Import useAuth hook

import "@solana/wallet-adapter-react-ui/styles.css";

const SolanaAuth = () => {
    const { publicKey } = useWallet(); 
    const { setIsSignedIn } = useAuth(); 
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setIsSignedIn(!!publicKey); 
    }, [publicKey, setIsSignedIn]);

    if (!mounted) return null;

    return (
        <div>
            <WalletMultiButton />
        </div>
    );
};

export default SolanaAuth;
