/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/libs/supabase/client";
import { LogOut, CornerDownRight } from "lucide-react";

// A simple button to show user account info or login with Gmail
// If user is logged in: shows user name and avatar, changes to logout on hover
// If user is not logged in: shows "Login with Gmail" button
const ButtonAccount = () => {
  const supabase = createClient();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    getUser();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const redirectURL = window.location.origin + "/api/auth/callback";
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectURL,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };

  // If user is not logged in, show login button
  if (!user) {
    return (
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="inline-flex w-fit items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        )}
        {isLoading ? "Signing in..." : "Login with Gmail"}
      </button>
    );
  }

  // If user is logged in, show user info that changes to logout on hover
  return (
    <button
      onClick={handleSignOut}
      className="group relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 hover:text-red-600 hover:border-red-200 transition-all duration-200"
    >
      {/* Show logout icon on hover, otherwise show user avatar */}
      <div className="relative mr-2">
        <div className="group-hover:opacity-0 transition-opacity duration-200">
          {user?.user_metadata?.avatar_url ? (
            <img
              src={user?.user_metadata?.avatar_url}
              alt={"Profile picture"}
              className="w-6 h-6 rounded shrink-0 object-cover"
              referrerPolicy="no-referrer"
              width={24}
              height={24}
            />
          ) : (
            <span className="w-6 h-6 bg-gray-300 flex justify-center items-center shrink-0 capitalize text-gray-700 font-medium text-sm">
              {user?.email?.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Show logout text on hover, otherwise show user name */}
      <div className="relative">
        <span className="group-hover:opacity-0 transition-opacity duration-200">
          {user?.user_metadata?.name ||
            user?.email?.split("@")[0] ||
            "Account"}
        </span>
      </div>

      {/* Centered logout text that appears on hover - positioned over the entire button */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none z-10">
        <span className="text-red-600 text-md font-bold">
          Logout
        </span>
      </div>
    </button>
  );
};

export default ButtonAccount;
